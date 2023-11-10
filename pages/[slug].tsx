import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../components/container";
import Layout from "../components/layout";
import {
  getAllPagesWithSlug,
  getCollectionContent,
  getPageContent,
  getPosts,
  getPrimaryMenu,
} from "../lib/api";
import Header from "../components/header";
import { WEBSITE_TITLE } from "../lib/constants";
import DetailBlock from "../components/detail-block";
import CollectionBlock from "../components/collection/collection-block";
import FriendForm from "../components/friend-form";
import FormContact from "../components/form-contact";
import PostsOverview from "../components/posts-overview";
import CollectionContent from "../components/collection/collection-content";
import { FadeInWhenVisible } from "../components/fade-in";
import FormGroups from "../components/form-groups";

import { GroupType } from "../components/form-groups";
import VacanciesForm from "../components/vacancies/vacancies-form";

export default function Index({
  preview,
  menu,
  pageContent,
  collectionContent,
  posts,
}) {
  return (
    <Layout preview={preview} logo={"/ncm_logo.png"}>
      <Head>
        <title>
          {(pageContent && pageContent.title) ?? "Nieuws"} | {WEBSITE_TITLE}
        </title>
      </Head>
      <div className="block sticky top-0 z-50 bg-white">
        <Container>
          <Header logo={"/ncm_logo.png"} menu={menu} />
        </Container>
      </div>
      {pageContent &&
      pageContent.featuredImage &&
      pageContent.featuredImage.node.mediaItemUrl ? (
        <div
          style={{
            /* @ts-ignore */
            "--image-url": `url(${pageContent.featuredImage.node.mediaItemUrl})`,
          }}
          className="bg-[image:var(--image-url)] bg-no-repeat bg-center bg-cover bg-slate-300 h-[150px] lg:h-[250px] w-full flex items-center justify-start"
        >
          <Container>
            <FadeInWhenVisible>
              <h1 className="text-3xl text-white drop-shadow-md m-0 p-0 leading-none lg:text-7xl">
                {pageContent.title}
              </h1>
            </FadeInWhenVisible>
          </Container>
        </div>
      ) : null}
      <Container>
        {pageContent && pageContent.slug !== "contact" ? (
          <div className="my-10 lg:my-20">
            {pageContent.detail &&
            pageContent.detail.firstBlock.firstBlockImage &&
            pageContent.detail.firstBlock.firstBlockText ? (
              <DetailBlock
                type="right"
                image={
                  pageContent.detail.firstBlock.firstBlockImage.mediaItemUrl
                }
                text={pageContent.detail.firstBlock.firstBlockText}
                description={
                  pageContent.detail.firstBlock.firstBlockImage.description
                }
              />
            ) : null}
          </div>
        ) : null}
      </Container>
      {pageContent &&
      pageContent.slug !== "word-vriend" &&
      pageContent.slug !== "contact" ? (
        <>
          {pageContent &&
          pageContent.detail &&
          pageContent.detail.secondBlock.secondBlockText &&
          pageContent.detail.secondBlock.secondBlockImage ? (
            <div className="bg-primary py-10 lg:py-20">
              <Container>
                <DetailBlock
                  type="left"
                  image={
                    pageContent.detail.secondBlock.secondBlockImage.mediaItemUrl
                  }
                  text={pageContent.detail.secondBlock.secondBlockText}
                  description={
                    pageContent.detail.secondBlock.secondBlockImage.description
                  }
                >
                  {pageContent.slug === "word-vrijwilliger" ? (
                    <VacanciesForm />
                  ) : null}
                </DetailBlock>
              </Container>
            </div>
          ) : null}
        </>
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
      {pageContent && pageContent.slug === "rondleidingen-groepen" ? (
        <section className="bg-primary py-10 lg:py-20">
          <Container>
            <div className="flex gap-20 lg:gap-40 flex-col lg:flex-row">
              <div className="w-full lg:w-1/2">
                <h2 className="leading-normal">
                  Meld je groepsbezoek als particulier aan
                </h2>
                <FormGroups groupType={GroupType.privateGroup} />
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="leading-normal">
                  Met je groepsbezoek als bedrijf of organisatie
                </h2>
                <FormGroups groupType={GroupType.companyGroup} />
              </div>
            </div>
          </Container>
        </section>
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
    props: { preview, menu, pageContent, collectionContent, posts },
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
