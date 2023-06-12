import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../components/container";
import Layout from "../components/layout";
import {
  getAllPagesWithSlug,
  getCollectionContent,
  getLogo,
  getPageContent,
  getPrimaryMenu,
} from "../lib/api";
import Header from "../components/header";
import { WEBSITE_TITLE } from "../lib/constants";
import DetailBlock from "../components/detail-block";
import { useRouter } from "next/router";
import CollectionBlock from "../components/collection-block";

export default function Index({
  preview,
  logo,
  menu,
  pageContent,
  collectionContent,
}) {
  const router = useRouter();

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
            {pageContent.detail.firstBlock.firstBlockImage &&
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
      {pageContent && pageContent.slug !== "collectie" ? (
        <div className="bg-[#EDB300] py-[60px]">
          <Container>
            {pageContent &&
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
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const logo = await getLogo();
  const menu = await getPrimaryMenu();
  const pageContent = await getPageContent(params?.slug as string);

  const collectionContent =
    params?.slug === "collectie"
      ? await getCollectionContent("collectie")
      : null;

  return {
    props: { preview, logo, menu, pageContent, collectionContent },
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
