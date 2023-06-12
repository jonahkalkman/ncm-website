import Image from "next/image";

interface Props {
  title: string;
  images: Array<string>;
}

export default function CollectionBlock({ title, images }: Props) {
  return (
    <section className="collection-block flex justify-center items-center gap-20">
      <h2 className="font-3xl mb-4 md:font-4xl">{title}</h2>
      {images.map((image) => (
        <Image
          className="w-full h-[200px] md:w-1/2 md:h-[600px] object-cover"
          src={image}
          alt=""
          width={500}
          height={500}
        />
      ))}
    </section>
  );
}
