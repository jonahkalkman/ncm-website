import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../components/container";
import Layout from "../components/layout";
import {
  getAllPagesWithSlug,
  getLogo,
  getPageContent,
  getPrimaryMenu,
} from "../lib/api";
import Header from "../components/header";
import { WEBSITE_TITLE } from "../lib/constants";
import DetailBlock from "../components/detail-block";
import { useRouter } from "next/router";

export default function Index({ preview, logo, menu, pageContent }) {
  const router = useRouter();

  return (
    <Layout preview={preview} logo={logo}>
      <Head>
        <title>{WEBSITE_TITLE}</title>
      </Head>
      <div className="block border-b-2">
        <Container>
          <Header logo={logo} menu={menu} />
        </Container>
      </div>
      <Container>
        {pageContent ? (
          <div className="pb-[60px]">
            <h1 className="font-primary font-bold text-left text-5xl pt-[35px] mb-[60px]">
              {pageContent.title}
            </h1>
            {pageContent.detail.firstBlock.firstBlockImage &&
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
      <div className="bg-[#EDB300] py-[60px]">
        <Container>
          {pageContent &&
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

  return {
    props: { preview, logo, menu, pageContent },
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
