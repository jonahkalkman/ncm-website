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
    <section className="banner bg-[#EDB300] py-[40px] md:py-[60px]">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between align-center mb-[25px]">
          <h2 className="font-bold text-3xl text-center md:text-left md:text-6xl text-black">
            {title}
          </h2>
          <div className="hidden md:block">
            <Button link={buttonLink} title={buttonTitle} isPrimary={false} />
          </div>
        </div>
        <div className="flex flex-col mb-5 md:mb-0 md:flex-row gap-[25px]">
          <Image
            className="w-full md:w-1/2 block object-fill"
            src={firstImage}
            alt="banner image"
            width={1200}
            height={1200}
          />
          <Image
            className="w-full md:w-1/2 block object-fill"
            src={secondImage}
            alt="second banner image"
            width={1200}
            height={1200}
          />
        </div>
        <div className="flex justify-center md:hidden">
          <Button link={buttonLink} title={buttonTitle} isPrimary={false} />
        </div>
      </Container>
    </section>
  );
}
