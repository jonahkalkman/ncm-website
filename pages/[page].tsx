import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../components/container";
import Layout from "../components/layout";
import {
  getAllPostsWithSlug,
  getLogo,
  getPageContent,
  getPrimaryMenu,
} from "../lib/api";
import Header from "../components/header";
import { WEBSITE_TITLE } from "../lib/constants";
import DetailBlock from "../components/detail-block";

export default function Index({ preview, logo, menu, pageContent }) {
  return (
    <Layout preview={preview} logo={logo}>
      <Head>
        <title>{WEBSITE_TITLE}</title>
      </Head>
      <Container>
        <Header logo={logo} menu={menu} />
        <h1 className="font-primary font-bold text-center text-4xl pt-[35px]">
          {pageContent.title}
        </h1>
        {pageContent.firstBlockImage &&
        pageContent.firstBlockText &&
        pageContent.secondBlockText &&
        pageContent.secondBlockImage ? (
          <DetailBlock
            firstBlockImage={pageContent.firstBlockImage.mediaItemUrl}
            firstBlockText={pageContent.firstBlockText}
            secondBlockImage={pageContent.secondBlockImage.mediaItemUrl}
            secondBlockText={pageContent.secondBlockText}
          />
        ) : null}
      </Container>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/${node.slug}`) || [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const logo = await getLogo();
  const menu = await getPrimaryMenu();
  const pageContent = await getPageContent(params?.slug as string);

  return {
    props: { preview, logo, menu, pageContent },
    revalidate: 10,
  };
};
