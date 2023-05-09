import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome, getHomeContent, getLogo, getPrimaryMenu } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import Header from "../components/header";
import { log } from "console";

export default function Index({ allPosts: { edges }, preview, logo, menu, homeContent }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
      <Container>
        <Header logo={logo} menu={menu} />
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const logo = await getLogo();
  const menu = await getPrimaryMenu();
  const allPosts = await getAllPostsForHome(preview);
  const homeContent = await getHomeContent();
  console.log(homeContent);
  

  return {
    props: { allPosts, preview, logo, menu, homeContent },
    revalidate: 10,
  };
};
