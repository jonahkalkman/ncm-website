import Image from "next/image";
import Container from "./container";

interface Props {
  title: string;
  images: Array<string>;
}

export default function CollectionBlock({ title, images }: Props) {
  return (
    <section className="collection-block bg-primary py-20">
      <Container>
        <h2 className="font-3xl mb-8 md:font-4xl text-center">{title}</h2>
        <div className="flex justify-between items-center gap-10">
          {images.map((image) => (
            <Image
              className="object-cover"
              src={image}
              alt=""
              width={500}
              height={500}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
