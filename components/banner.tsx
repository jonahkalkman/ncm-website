import Image from "next/image";
import Button from "./button";

interface Props {
  title: string;
  buttonTitle: string;
  buttonLink: string;
  firstImage: string;
  secondImage: string;
}

export default function Banner({
  title,
  buttonLink,
  buttonTitle,
  firstImage,
  secondImage,
}: Props) {
  return (
    <section className="banner">
      <div className="">
        <h2 className="text-black">{title}</h2>
        <Button link={buttonLink} title={buttonTitle} isPrimary={false} />
      </div>
      <div className="flex gap-20">
        <Image
          className="w-1/2 block"
          src={firstImage}
          alt="banner image"
          width={500}
          height={500}
        />
        <Image
          className="w-1/2 block"
          src={secondImage}
          alt="second banner image"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}
