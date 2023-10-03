import Image from "next/image";
import { FadeInWhenVisible } from "./fade-in";

interface Props {
  image: string;
  text: string;
  description?: string;
  type: "left" | "right";
}

export default function DetailBlock({ image, text, description, type }: Props) {
  return (
    <section className="detail-block relative flex gap-4 md:gap-10 justify-center items-start flex-col md:flex-row">
      <div
        className={
          type === "left"
            ? "w-full text-left md:text-left md:w-1/2 order-2"
            : "w-full text-left md:text-left md:w-1/2 order-1"
        }
      >
        <FadeInWhenVisible>
          <div
            dangerouslySetInnerHTML={{ __html: text }}
            className="detail-block__text-wrapper"
          />
        </FadeInWhenVisible>
      </div>
      <div
        className={
          type === "left"
            ? "w-full md:w-1/2 md:sticky md:self-start md:top-40"
            : "w-full md:w-1/2 order-2 hidden md:block md:sticky md:self-start md:top-40"
        }
      >
        <Image
          className={
            type === "left"
              ? "w-full h-[200px] md:h-[500px] object-cover rounded-md mb-5"
              : "w-full h-[200px] md:h-[500px] object-cover rounded-md mb-5"
          }
          src={image}
          alt=""
          width={500}
          height={500}
        />
        {description ? (
          <div
            className="[&>*]:text-sm"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        ) : null}
      </div>
    </section>
  );
}
