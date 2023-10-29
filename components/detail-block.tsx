import Image from "next/image";
import { FadeInWhenVisible } from "./fade-in";

interface Props {
  image: string;
  text: string;
  description?: string;
  type: "left" | "right";
  children?: React.ReactNode;
}

export default function DetailBlock({
  image,
  text,
  description,
  type,
  children,
}: Props) {
  return (
    <section className="detail-block relative flex gap-4 lg:gap-10 justify-center items-start flex-col lg:flex-row">
      <div
        className={
          type === "left"
            ? "w-full text-left lg:text-left lg:w-1/2 order-2"
            : "w-full text-left lg:text-left lg:w-1/2 order-1"
        }
      >
        <FadeInWhenVisible>
          <div
            dangerouslySetInnerHTML={{ __html: text }}
            className="detail-block__text-wrapper"
          />
          {children}
        </FadeInWhenVisible>
      </div>
      <div
        className={
          type === "left"
            ? "w-full lg:w-1/2 lg:sticky lg:self-start lg:top-40"
            : "w-full lg:w-1/2 order-2 hidden lg:block lg:sticky lg:self-start lg:top-40"
        }
      >
        <Image
          className={
            type === "left"
              ? "w-full h-[200px] lg:h-[500px] object-cover rounded-md mb-5"
              : "w-full h-[200px] lg:h-[500px] object-cover rounded-md mb-5"
          }
          src={image}
          alt=""
          width={500}
          height={500}
        />
        {description ? (
          <div>
            <div
              className="[&>*]:text-sm"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
