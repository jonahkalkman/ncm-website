import Image from "next/image";

interface Props {
  title: string;
  text: string;
  image: string;
}

export default function IntroHome({ title, text, image }: Props) {
  return (
    <section className="intro-home my-20">
      <h2 className="text-black text-6xl text-center my-10">{title}</h2>
      <div className="flex justify-between items-center gap-20">
        <p className="w-1/2 text-black text-md">{text}</p>
        <div className="relative w-[900px]">
          <Image
            className="w-full h-[600px] relative z-10"
            src={image}
            alt={title}
            width={800}
            height={800}
          />
          <Image
            className="w-full h-[600px] absolute top-5 right-5"
            src={image}
            alt={title}
            width={800}
            height={800}
          />
          <Image
            className="w-full h-[600px] absolute top-3 right-3"
            src={image}
            alt={title}
            width={800}
            height={800}
          />
        </div>
      </div>
    </section>
  );
}
