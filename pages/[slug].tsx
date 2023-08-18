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
import CollectionContent from "../components/collection-content";

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
      {pageContent &&
      pageContent.detail &&
      pageContent.detail.firstBlock.firstBlockImage ? (
        <div
          style={{
            /* @ts-ignore */
            "--image-url": `url(${pageContent.detail.firstBlock.firstBlockImage.mediaItemUrl})`,
          }}
          className="bg-[image:var(--image-url)] bg-no-repeat bg-center bg-cover bg-slate-300 h-[150px] md:h-[250px] w-full flex items-center justify-start"
        >
          <Container>
            <h1 className="text-3xl text-white drop-shadow-md m-0 p-0 leading-none md:text-7xl">
              {pageContent.title}
            </h1>
          </Container>
        </div>
      ) : null}
      <Container>
        {pageContent && pageContent.slug !== "contact" ? (
          <div className="my-10 md:my-20">
            {pageContent.detail &&
            pageContent.detail.firstBlock.firstBlockImage &&
            pageContent.detail.firstBlock.firstBlockText ? (
              <DetailBlock
                type="right"
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
      pageContent.slug !== "word-vriend" &&
      pageContent.slug !== "contact" ? (
        <div className="bg-primary py-20">
          <Container>
            {pageContent &&
            pageContent.detail &&
            pageContent.detail.secondBlock.secondBlockText &&
            pageContent.detail.secondBlock.secondBlockImage ? (
              <DetailBlock
                type="left"
                image={
                  pageContent.detail.secondBlock.secondBlockImage.mediaItemUrl
                }
                text={pageContent.detail.secondBlock.secondBlockText}
              />
            ) : null}
          </Container>
        </div>
      ) : (
        <>
          {collectionContent &&
          collectionContent.collection &&
          collectionContent.collection.collectionImages.collectionFirstImage
            .mediaItemUrl ? (
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
      {pageContent && pageContent.slug === "collectie" ? (
        <CollectionContent />
      ) : null}
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
