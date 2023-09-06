import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  coverImage: {
    node: {
      sourceUrl: string;
    };
  };
  slug?: string;
}

export default function CoverImage({ title, coverImage, slug }: Props) {
  const image = (
    <Image
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      src={coverImage?.node.sourceUrl}
      className={
        "w-full h-[200px] md:h-[350px] object-cover overflow-hidden transition-all duration-500 ease-in-out group-hover:scale-[120%] group-hover:rotate-[-2deg]"
      }
    />
  );
  return (
    <div className="sm:mx-0 w-full h-[200px] md:h-[350px] overflow-hidden">
      {slug ? (
        <Link href={`/nieuws/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
