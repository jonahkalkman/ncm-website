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
        <div className="flex flex-col md:flex-row md:justify-between align-start mb-[25px]">
          <div>
            <h2 className="font-bold text-2xl text-center md:text-left md:text-6xl text-black mb-0">
              {title}
            </h2>
            <p className="mt-2 md:mt-5 text-center md:text-left">
              Een diverse collectie van oude voorwerpen van de Coöperatie.
            </p>
          </div>
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
