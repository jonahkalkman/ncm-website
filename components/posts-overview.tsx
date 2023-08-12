import Image from "next/image";
import Container from "./container";
import { use, useEffect } from "react";
import Link from "next/link";

interface Props {
  posts: any[];
}

export default function PostsOverview({ posts }: Props) {
  const date = new Date(posts[0].node.date);

  useEffect(() => {
    console.log(posts);
  }, []);

  return (
    <Container>
      <div className="">
        <h1 className="leading-tight font-primary font-bold text-center text-[30px] mb-8 md:text-6xl pt-[35px] md:mb-[20px]">
          Nieuws
        </h1>
        <div className="flex gap-20">
          {posts.map((post, index) => (
            <>
              {index === 0 ? (
                <Link
                  href={"/nieuws/" + post.node.slug}
                  className="group w-2/3 no-underline"
                >
                  <div key={index} className="mt-8 overflow-hidden">
                    {post.node.featuredImage ? (
                      <div className="w-full h-[640px] overflow-hidden">
                        <Image
                          className="object-cover w-full h-[640px] overflow-hidden transition-all duration-500 ease-in-out group-hover:scale-[120%] group-hover:rotate-[-2deg]"
                          alt={post.node.title}
                          src={post.node.featuredImage.node.sourceUrl}
                          width={414}
                          height={260}
                        />
                      </div>
                    ) : null}
                    <h3 className="text-3xl font-bold mt-4 transition-all duration-[300ms] ease-in-out group-hover:text-primary group-hover:translate-x-2">
                      {post.node.title}
                    </h3>
                    <div className="flex items-center justify-start transition-all duration-[300ms] ease-in-out group-hover:translate-x-2">
                      <div className="text-md text-gray-500 transition-all duration-[300ms] ease-in-out group-hover:text-primary">
                        {date.toLocaleDateString("nl-NL")}
                      </div>
                      {post.node.categories.edges.map((category, index) => (
                        <>
                          {category.node.name !== "Uncategorized" ? (
                            <span
                              key={index}
                              className="ml-8 text-md text-gray-500"
                            >
                              Categorie: {category.node.name}
                            </span>
                          ) : null}
                        </>
                      ))}
                    </div>
                  </div>
                </Link>
              ) : null}
            </>
          ))}
          <div className="flex flex-col w-1/3">
            {posts.map((post, index) => (
              <>
                {index === 1 || index === 2 ? (
                  <Link
                    href={"/nieuws/" + post.node.slug}
                    className="group w-full no-underline"
                  >
                    <div key={index} className="mt-8">
                      {post.node.featuredImage ? (
                        <div className="w-full h-[220px] overflow-hidden">
                          <Image
                            className="object-cover w-full h-[220px] overflow-hidden transition-all duration-500 ease-in-out group-hover:scale-[120%] group-hover:rotate-[-2deg]"
                            alt={post.node.title}
                            src={post.node.featuredImage.node.sourceUrl}
                            width={414}
                            height={260}
                          />
                        </div>
                      ) : null}
                      <h3 className="text-3xl font-bold mt-4 transition-all duration-[300ms] ease-in-out group-hover:text-primary group-hover:translate-x-2">
                        {post.node.title}
                      </h3>
                      <div className="flex items-center justify-start transition-all duration-[300ms] ease-in-out group-hover:translate-x-2">
                        <div className="text-md text-gray-500 transition-all duration-[300ms] ease-in-out group-hover:text-primary">
                          {date.toLocaleDateString("nl-NL")}
                        </div>
                        {post.node.categories.edges.map((category, index) => (
                          <>
                            {category.node.name !== "Uncategorized" ? (
                              <span
                                key={index}
                                className="ml-8 text-md text-gray-500"
                              >
                                Categorie: {category.node.name}
                              </span>
                            ) : null}
                          </>
                        ))}
                      </div>
                    </div>
                  </Link>
                ) : null}
              </>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
