import Image from "next/image";
import Button from "./button";
import Container from "./container";

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
    <section className="banner bg-[#EDB300] py-[60px]">
      <Container>
        <div className="flex justify-between align-center mb-[25px]">
          <h2 className="text-4xl text-black">{title}</h2>
          <Button link={buttonLink} title={buttonTitle} isPrimary={false} />
        </div>
        <div className="flex gap-[25px]">
          <Image
            className="w-1/2 block object-fill"
            src={firstImage}
            alt="banner image"
            width={1200}
            height={1200}
          />
          <Image
            className="w-1/2 block object-fill"
            src={secondImage}
            alt="second banner image"
            width={1200}
            height={1200}
          />
        </div>
      </Container>
    </section>
  );
}
