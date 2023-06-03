import Image from "next/image";

interface Props {
  image: string;
  text: string;
  type: "left" | "right";
}

export default function DetailBlock({ image, text, type }: Props) {
  return (
    <section className="detail-block relative flex gap-20 justify-center items-start">
      <div
        className={type === "left" ? "w-1/2 order-2" : "w-1/2"}
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <Image
        className="w-1/2 h-[500px] object-cover rounded-md"
        src={image}
        alt=""
        width={500}
        height={500}
      />
    </section>
  );
}
