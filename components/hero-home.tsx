import Image from "next/image";

interface Props {
  title: string;
  subTitle: string;
  imageUrl: string;
}

export default function HeroHome({ title, subTitle, imageUrl }: Props) {
  return (
    <section className="hero-home">
      <Image
        className="w-full h-full"
        src={imageUrl}
        alt="hero image"
        width={1200}
        height={500}
      />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center w-full">
        <h1 className="text-7xl text-white">
          {title}
        </h1>
        <h2 className="text-3xl text-white">{subTitle}</h2>
      </div>
    </section>
  );
}
