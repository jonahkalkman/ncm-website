const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query = "", { variables }: Record<string, any> = {}) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getPreviewPost(id, idType = "DATABASE_ID") {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  );
  return data.post;
}

export async function getAllPagesWithSlug() {
  const data = await fetchAPI(`
    {
      pages(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.pages;
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );

  return data?.posts;
}

export async function getPostAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.post;
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug));
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug;
  const isDraft = isSamePost && postPreview?.status === "draft";
  const isRevision = isSamePost && postPreview?.status === "publish";
  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
          // Only some of the fields of a revision are considered as there are some inconsistencies
          isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
            : ""
        }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? "DATABASE_ID" : "SLUG",
      },
    }
  );

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id;
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node;

    if (revision) Object.assign(data.post, revision);
    delete data.post.revisions;
  }

  // Filter out the main post
  data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug);
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 2) data.posts.edges.pop();

  return data;
}

export async function getPrimaryMenu() {
  const data = await fetchAPI(
    `
    query PrimaryMenu {
      menuItems(first: 20, where: {location: PRIMARY}) {
        nodes {
          key: id
          parentId
          title: label
          url
        }
      }
    }`
  );
  return data.menuItems.nodes;
}

export async function getHomeContent() {
  const data = await fetchAPI(
    `
    query HomeContent {
      page(id: "11", idType: DATABASE_ID) {
       home {
          fieldGroupName
          heroSubtitle
          heroTitle
          heroImage {
            mediaItemUrl
          }
          heroButtonPrimary {
            buttonPrimaryTitle
            buttonPrimaryLink
            
          }
          heroButtonSecondary {
            buttonSecondaryTitle
            buttonSecondaryLink
          }
          introTitle
          introText
          introImage {
            mediaItemUrl
          }
          bannerTitle
          bannerButton {
            bannerButtonTitle
            bannerButtonLink {
              url
            }
          }
          bannerImages {
            bannerFirstImage {
              mediaItemUrl
            }
            bannerSecondImage {
              mediaItemUrl
            }
          }
          contentTitle
          contentFirstBlock {
            contentFirstTitle
            contentFirstText
            contentFirstImage {
              mediaItemUrl
            }
          }
          contentSecondBlock {
            contentSecondTitle
            contentSecondText
            contentSecondImage {
              mediaItemUrl
            }
          }
          contentThirdBlock {
            contentThirdTitle
            contentThirdText
            contentThirdImage {
              mediaItemUrl
            }
          }
          vacancyBanner {
            vacancyTitle
            vacancyText
            vacancyImage {
              mediaItemUrl
            }
            vacancyButton {
              vacancyButtonLink {
                url
              }
              vacancyButtonTitle
            }
          }
        }
      } 
    }
  `
  );
  return data.page.home;
}

export async function getPageContent(page: string) {
  if (page !== "robots.txt" && page !== "sitemap.xml") {
    const data = await fetchAPI(
      `
        query PageContent {
          page(id: "${page}", idType: URI) {
            title
            slug
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            detail {
              firstBlock {
                firstBlockText
                firstBlockImage {
                  mediaItemUrl
                  description
                }
              }
              secondBlock {
                secondBlockTitle
                secondBlockText
                secondBlockImage {
                  mediaItemUrl
                  description
                }
              }
            }
          }
        }
      `
    );
    return data.page;
  }
}

export async function getPageMetadata(page: string) {
  const data = await fetchAPI(
    `
      query PageContent {
        page(id: "${page}", idType: URI) {
          title
        }
      }
    `
  );
  return data.page;
}

export async function getCollectionContent(page: string) {
  const data = await fetchAPI(
    `
      query CollectionContent {
        page(id: "${page}", idType: URI) {
          collection {
            collectionTitle
            collectionImages {
              collectionFirstImage {
                mediaItemUrl
              }
              collectionSecondImage {
                mediaItemUrl
              }
              collectionThirdImage {
                mediaItemUrl
              }
            }
          }
        }
      }
    `
  );
  return data.page;
}

export async function getPosts() {
  const data = await fetchAPI(
    `
  query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            slug
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }`
  );
  return data.posts;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.posts;
}
