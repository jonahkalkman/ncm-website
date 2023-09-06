import Image from "next/image";
import { FadeInWhenVisible } from "./fade-in";

interface Props {
  image: string;
  text: string;
  type: "left" | "right";
}

export default function DetailBlock({ image, text, type }: Props) {
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
      <Image
        className={
          type === "left"
            ? "w-full h-[200px] md:w-1/2 md:h-[500px] object-cover md:sticky md:self-start md:top-40"
            : "w-full h-[200px] md:w-1/2 md:h-[500px] object-cover order-2 md:sticky md:self-start md:top-40 hidden md:block"
        }
        src={image}
        alt=""
        width={500}
        height={500}
      />
    </section>
  );
}
