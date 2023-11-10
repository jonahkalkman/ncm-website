import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import {
  getAllPostsWithSlug,
  getPostAndMorePosts,
  getPrimaryMenu,
} from "../../lib/api";
import { WEBSITE_TITLE } from "../../lib/constants";
import Header from "../../components/header";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FadeInWhenVisible } from "../../components/fade-in";

export default function Post({ menu, logo, post, posts, preview }) {
  const router = useRouter();
  const morePosts = posts?.edges;
  const formattedDate = post && post.date ? new Date(post.date) : null;
  const [copied, setCopied] = useState(false);

  const copyURL = () => {
    setCopied(true);
    navigator.clipboard.writeText(
      `https://www.cooperatie-museum.nl/nieuws/${post.slug}`
    );
  };

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview} logo={"/ncm_logo.png"}>
      <Head>
        <title>{WEBSITE_TITLE}</title>
      </Head>
      <div className="block sticky top-0 z-50 bg-white">
        <Container>
          <Header logo={"/ncm_logo.png"} menu={menu} />
        </Container>
      </div>
      <main className="shadow-sm pb-10 md:pb-10">
        <Container>
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <div>
              <article>
                <Head>
                  <title>{`${post.title} | Nationaal Coöperatie Museum`}</title>
                  <meta
                    property="og:image"
                    content={post.featuredImage?.node.sourceUrl}
                  />
                </Head>
                <FadeInWhenVisible>
                  <h1 className="text-4xl md:text-7xl text-center mt-10 md:mt-20 md:mb-10 font-bold leading-[110%]">
                    {post.title}
                  </h1>
                </FadeInWhenVisible>
                <div className="flex justify-center gap-10 mb-10">
                  {post.categories.edges.map((category) => (
                    <>
                      {category.node.name !== "Uncategorized" ? (
                        <>
                          <span>Categorie:</span>
                          <span key={category.node.id}>
                            {category.node.name}
                          </span>
                        </>
                      ) : null}
                    </>
                  ))}
                  <span>
                    Gepubliceerd op: {formattedDate.toLocaleDateString("nl-NL")}
                  </span>
                </div>
                <Image
                  className="w-full h-[200px] md:h-[800px] object-cover rounded-md"
                  src={post.featuredImage?.node.sourceUrl}
                  width={1200}
                  height={1200}
                  alt={post.title}
                />
                <PostBody content={post.content} />
                <div className="mt-20 flex justify-start items-center gap-5 flex-wrap">
                  <p className="font-bold text-xl">Delen op:</p>
                  <Link
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://www.cooperatie-museum.nl/nieuws/${post.slug}`}
                    className="bg-primary p-2 rounded-md w-10 h-10 flex items-center justify-center group transition-all duration-[300ms] ease-in-out hover:bg-black"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z"
                        fill="black"
                        className="transition-all duration-[300ms] ease-in-out group-hover:fill-primary"
                      />
                    </svg>
                  </Link>
                  <Link
                    href={`http://twitter.com/share?text=${post.title}&url=https://www.cooperatie-museum.nl/nieuws/${post.slug}`}
                    className="bg-primary p-2 rounded-md w-10 h-10 flex items-center justify-center group transition-all duration-[300ms] ease-in-out hover:bg-black"
                  >
                    <svg
                      width="21"
                      height="17"
                      viewBox="0 0 21 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.92 2C20.15 2.35 19.32 2.58 18.46 2.69C19.34 2.16 20.02 1.32 20.34 0.31C19.51 0.81 18.59 1.16 17.62 1.36C16.83 0.5 15.72 0 14.46 0C12.11 0 10.19 1.92 10.19 4.29C10.19 4.63 10.23 4.96 10.3 5.27C6.74 5.09 3.57 3.38 1.46 0.79C1.09 1.42 0.88 2.16 0.88 2.94C0.88 4.43 1.63 5.75 2.79 6.5C2.08 6.5 1.42 6.3 0.84 6V6.03C0.84 8.11 2.32 9.85 4.28 10.24C3.65073 10.4122 2.9901 10.4362 2.35 10.31C2.62161 11.1625 3.15354 11.9084 3.87102 12.4429C4.5885 12.9775 5.45545 13.2737 6.35 13.29C4.83363 14.4904 2.954 15.1393 1.02 15.13C0.68 15.13 0.34 15.11 0 15.07C1.9 16.29 4.16 17 6.58 17C14.46 17 18.79 10.46 18.79 4.79C18.79 4.6 18.79 4.42 18.78 4.23C19.62 3.63 20.34 2.87 20.92 2Z"
                        fill="black"
                        className="transition-all duration-[300ms] ease-in-out group-hover:fill-primary"
                      />
                    </svg>
                  </Link>
                  <Link
                    href={`mailto:?subject=${post.title}&amp;body=https://www.cooperatie-museum.nl/nieuws/${post.slug}`}
                    className="bg-primary p-2 rounded-md w-10 h-10 flex items-center justify-center group transition-all duration-[300ms] ease-in-out hover:bg-black"
                  >
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 16C1.45 16 0.979002 15.804 0.587002 15.412C0.195002 15.02 -0.000664969 14.5493 1.69779e-06 14V2C1.69779e-06 1.45 0.196002 0.979002 0.588002 0.587002C0.980002 0.195002 1.45067 -0.000664969 2 1.69779e-06H18C18.55 1.69779e-06 19.021 0.196001 19.413 0.588001C19.805 0.980001 20.0007 1.45067 20 2V14C20 14.55 19.804 15.021 19.412 15.413C19.02 15.805 18.5493 16.0007 18 16H2ZM10 9L18 4V2L10 7L2 2V4L10 9Z"
                        fill="black"
                        className="transition-all duration-[300ms] ease-in-out group-hover:fill-primary"
                      />
                    </svg>
                  </Link>
                  <div className="flex gap-2 md:ml-10">
                    <div className="px-5 py-5 h-10 w-[215px] md:w-[400px] bg-opacity-20 overflow-hidden flex justify-start items-center rounded-md bg-primary text-lg font-bold break-keep text-left whitespace-nowrap	text-gray-500">{`https://www.cooperatie-museum.nl/nieuws/${post.slug}`}</div>
                    <div
                      onClick={() => copyURL()}
                      className={
                        copied
                          ? "bg-black p-2 rounded-md w-10 h-10 flex items-center justify-center group"
                          : "bg-primary p-2 rounded-md w-10 h-10 flex items-center justify-center group transition-all duration-[300ms] ease-in-out hover:bg-black hover:cursor-pointer"
                      }
                    >
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.83269 10.6527C8.24269 11.0427 8.24269 11.6827 7.83269 12.0727C7.44269 12.4627 6.80269 12.4627 6.41269 12.0727C5.47607 11.1347 4.95 9.86327 4.95 8.53769C4.95 7.21211 5.47607 5.94072 6.41269 5.00269L9.95269 1.46269C10.8907 0.52607 12.1621 0 13.4877 0C14.8133 0 16.0847 0.52607 17.0227 1.46269C17.9593 2.40072 18.4854 3.67211 18.4854 4.99769C18.4854 6.32327 17.9593 7.59466 17.0227 8.53269L15.5327 10.0227C15.5427 9.20269 15.4127 8.38269 15.1327 7.60269L15.6027 7.12269C15.883 6.84538 16.1056 6.51522 16.2575 6.15132C16.4094 5.78742 16.4876 5.39702 16.4876 5.00269C16.4876 4.60837 16.4094 4.21796 16.2575 3.85406C16.1056 3.49016 15.883 3.16 15.6027 2.88269C15.3254 2.60235 14.9952 2.3798 14.6313 2.22791C14.2674 2.07602 13.877 1.99781 13.4827 1.99781C13.0884 1.99781 12.698 2.07602 12.3341 2.22791C11.9702 2.3798 11.64 2.60235 11.3627 2.88269L7.83269 6.41269C7.55235 6.69 7.3298 7.02016 7.17791 7.38406C7.02602 7.74796 6.94781 8.13837 6.94781 8.53269C6.94781 8.92702 7.02602 9.31742 7.17791 9.68132C7.3298 10.0452 7.55235 10.3754 7.83269 10.6527ZM10.6527 6.41269C11.0427 6.02269 11.6827 6.02269 12.0727 6.41269C13.0093 7.35072 13.5354 8.62211 13.5354 9.94769C13.5354 11.2733 13.0093 12.5447 12.0727 13.4827L8.53269 17.0227C7.59466 17.9593 6.32327 18.4854 4.99769 18.4854C3.67211 18.4854 2.40072 17.9593 1.46269 17.0227C0.52607 16.0847 0 14.8133 0 13.4877C0 12.1621 0.52607 10.8907 1.46269 9.95269L2.95269 8.46269C2.94269 9.28269 3.07269 10.1027 3.35269 10.8927L2.88269 11.3627C2.60235 11.64 2.3798 11.9702 2.22791 12.3341C2.07602 12.698 1.99781 13.0884 1.99781 13.4827C1.99781 13.877 2.07602 14.2674 2.22791 14.6313C2.3798 14.9952 2.60235 15.3254 2.88269 15.6027C3.16 15.883 3.49016 16.1056 3.85406 16.2575C4.21796 16.4094 4.60837 16.4876 5.00269 16.4876C5.39702 16.4876 5.78742 16.4094 6.15132 16.2575C6.51522 16.1056 6.84538 15.883 7.12269 15.6027L10.6527 12.0727C10.933 11.7954 11.1556 11.4652 11.3075 11.1013C11.4594 10.7374 11.5376 10.347 11.5376 9.95269C11.5376 9.55837 11.4594 9.16796 11.3075 8.80406C11.1556 8.44016 10.933 8.11 10.6527 7.83269C10.5556 7.74168 10.4782 7.63172 10.4252 7.5096C10.3723 7.38747 10.345 7.25579 10.345 7.12269C10.345 6.98959 10.3723 6.85791 10.4252 6.73579C10.4782 6.61367 10.5556 6.5037 10.6527 6.41269Z"
                          fill="black"
                          className={
                            copied
                              ? "fill-primary"
                              : "transition-all duration-[300ms] ease-in-out group-hover:fill-primary"
                          }
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>

              <SectionSeparator />
              {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </div>
          )}
        </Container>
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const menu = await getPrimaryMenu();
  const data = await getPostAndMorePosts(params?.slug, preview, previewData);

  return {
    props: {
      menu,
      preview,
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/nieuws/${node.slug}`) || [],
    fallback: true,
  };
};
