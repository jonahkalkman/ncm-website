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
        <h1 className="leading-tight font-primary font-bold text-center text-[30px] mb-8 md:text-6xl pt-[35px] md:mb-[60px]">
          Nieuws
        </h1>
        <div className="flex gap-20 flex-wrap">
          {posts.map((post, index) => (
            <Link href={"/nieuws/" + post.node.slug}>
              <div key={index} className="mt-8">
                {post.node.featuredImage ? (
                  <Image
                    className="h-[260px] w-[414px] object-cover"
                    alt={post.node.title}
                    src={post.node.featuredImage.node.sourceUrl}
                    width={414}
                    height={260}
                  />
                ) : null}
                <h3 className="text-3xl font-bold mt-4">{post.node.title}</h3>
                <div className="flex items-center justify-start">
                  <div className="text-md text-gray-500">
                    {date.toLocaleDateString("nl-NL")}
                  </div>
                  {post.node.categories.edges.map((category, index) => (
                    <span key={index} className="ml-8 text-md text-gray-500">
                      Categorie: {category.node.name}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
