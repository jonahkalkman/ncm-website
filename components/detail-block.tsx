import Image from "next/image";

interface Props {
  image: string;
  text: string;
  type: "left" | "right";
}

export default function DetailBlock({ image, text, type }: Props) {
  return (
    <section className="detail-block relative flex gap-4 md:gap-20 justify-center items-center flex-col md:flex-row">
      <div
        className={
          type === "left"
            ? "w-full text-left md:text-left md:w-1/2 order-2"
            : "w-full text-left md:text-left md:w-1/2 order-1"
        }
      >
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <Image
        className={
          type === "left"
            ? "w-full h-[200px] md:w-1/2 md:h-[600px] object-cover"
            : "w-full h-[200px] md:w-1/2 md:h-[600px] object-cover order-2"
        }
        src={image}
        alt=""
        width={500}
        height={500}
      />
    </section>
  );
}
