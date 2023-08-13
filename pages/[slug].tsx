import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../components/container";
import Layout from "../components/layout";
import {
  getAllPagesWithSlug,
  getCollectionContent,
  getLogo,
  getPageContent,
  getPosts,
  getPrimaryMenu,
} from "../lib/api";
import Header from "../components/header";
import { WEBSITE_TITLE } from "../lib/constants";
import DetailBlock from "../components/detail-block";
import CollectionBlock from "../components/collection-block";
import FriendForm from "../components/friend-form";
import FormContact from "../components/form-contact";
import PostsOverview from "../components/posts-overview";

export default function Index({
  preview,
  logo,
  menu,
  pageContent,
  collectionContent,
  posts,
}) {
  return (
    <Layout preview={preview} logo={logo}>
      <Head>
        <title>{WEBSITE_TITLE}</title>
      </Head>
      <div className="block sticky top-0 z-50 bg-white border-b-2">
        <Container>
          <Header logo={logo} menu={menu} />
        </Container>
      </div>
      <Container>
        {pageContent ? (
          <div className="pb-[60px]">
            <h1 className="leading-tight font-primary font-bold text-center text-[30px] mb-8 md:text-6xl pt-[35px] md:mb-[60px]">
              {pageContent.title}
            </h1>
            {pageContent.detail &&
            pageContent.detail.firstBlock.firstBlockImage &&
            pageContent.detail.firstBlock.firstBlockText ? (
              <DetailBlock
                type="left"
                image={
                  pageContent.detail.firstBlock.firstBlockImage.mediaItemUrl
                }
                text={pageContent.detail.firstBlock.firstBlockText}
              />
            ) : null}
          </div>
        ) : null}
      </Container>
      {pageContent &&
      pageContent.slug !== "collectie" &&
      pageContent.slug !== "word-vriend" &&
      pageContent.slug !== "contact" ? (
        <div className="bg-primary py-[60px]">
          <Container>
            {pageContent &&
            pageContent.detail &&
            pageContent.detail.secondBlock.secondBlockText &&
            pageContent.detail.secondBlock.secondBlockImage ? (
              <>
                <h2 className="text-center text-3xl mb-8 md:text-6xl md:mb-10">
                  {pageContent.detail.secondBlock.secondBlockTitle}
                </h2>
                <DetailBlock
                  type="right"
                  image={
                    pageContent.detail.secondBlock.secondBlockImage.mediaItemUrl
                  }
                  text={pageContent.detail.secondBlock.secondBlockText}
                />
              </>
            ) : null}
          </Container>
        </div>
      ) : (
        <>
          {collectionContent && collectionContent.collection ? (
            // TODO add check if images exist
            <CollectionBlock
              title={collectionContent.collection.collectionTitle}
              images={[
                collectionContent.collection.collectionImages
                  .collectionFirstImage.mediaItemUrl,
                collectionContent.collection.collectionImages
                  .collectionSecondImage.mediaItemUrl,
                collectionContent.collection.collectionImages
                  .collectionThirdImage.mediaItemUrl,
              ]}
            />
          ) : null}
        </>
      )}
      {pageContent && pageContent.slug === "word-vriend" ? (
        <FriendForm
          image={pageContent.detail.firstBlock.firstBlockImage.mediaItemUrl}
          secondImage={
            pageContent.detail.secondBlock.secondBlockImage.mediaItemUrl
          }
        />
      ) : null}
      {pageContent && pageContent.slug === "contact" ? <FormContact /> : null}
      {posts && posts.edges.length > 0 ? (
        <PostsOverview posts={posts.edges} />
      ) : null}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const logo = await getLogo();
  const menu = await getPrimaryMenu();
  const pageContent =
    params?.slug !== "nieuws"
      ? await getPageContent(params?.slug as string)
      : null;
  const posts = params?.slug === "nieuws" ? await getPosts() : null;

  const collectionContent =
    params?.slug === "collectie"
      ? await getCollectionContent("collectie")
      : null;

  console.log(pageContent);

  return {
    props: { preview, logo, menu, pageContent, collectionContent, posts },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPages = await getAllPagesWithSlug();

  return {
    paths: allPages.edges.map(({ node }) => `/${node.slug}`) || [],
    fallback: true,
  };
};
