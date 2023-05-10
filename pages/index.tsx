import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import Layout from "../components/layout";
import { getHomeContent, getLogo, getPrimaryMenu } from "../lib/api";
import Header from "../components/header";
import { WEBSITE_TITLE } from "../lib/constants";
import HeroHome from "../components/hero-home";

export default function Index({ preview, logo, menu, homeContent }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{WEBSITE_TITLE}</title>
      </Head>
      <Container>
        <Header logo={logo} menu={menu} />
      </Container>
      <HeroHome
        title={homeContent.heroTitle}
        subTitle={homeContent.heroSubtitle}
        imageUrl={homeContent.heroImage.mediaItemUrl}
      />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const logo = await getLogo();
  const menu = await getPrimaryMenu();
  const homeContent = await getHomeContent();

  return {
    props: { preview, logo, menu, homeContent },
    revalidate: 10,
  };
};
