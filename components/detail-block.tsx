import Image from "next/image";

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
            ? "w-full text-left md:text-left md:w-[55%] order-2"
            : "w-full text-left md:text-left md:w-[55%] order-1"
        }
      >
        <div dangerouslySetInnerHTML={{ __html: text }} className="detail-block__text-wrapper"/>
      </div>
      <Image
        className={
          type === "left"
            ? "w-full h-[200px] md:w-[45%] md:h-[500px] object-cover rounded-md"
            : "w-full h-[200px] md:w-[45%] md:h-[500px] object-cover order-2 rounded-md"
        }
        src={image}
        alt=""
        width={500}
        height={500}
      />
    </section>
  );
}
