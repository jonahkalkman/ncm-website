import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  const formattedDate = new Date(date);

  return (
    <div className="group">
      <div className="mb-5">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <h3 className="text-3xl mb-2 leading-snug transition-all duration-[300ms] ease-in-out group-hover:text-primary group-hover:translate-x-2">
        <Link
          href={`/nieuws/${slug}`}
          className="no-underline"
          dangerouslySetInnerHTML={{ __html: title }}
        ></Link>
      </h3>
      <div className="text-md text-gray-500 transition-all duration-[300ms] ease-in-out group-hover:text-primary group-hover:translate-x-2">
        {formattedDate.toLocaleDateString("nl-NL")}
      </div>
    </div>
  );
}
