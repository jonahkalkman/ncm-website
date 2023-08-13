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
    <section className="banner bg-primary py-[40px] md:py-20 z-10 relative">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between align-start mb-[25px]">
          <div>
            <h2 className="font-bold text-2xl text-center md:text-left md:text-6xl text-black mb-0">
              {title}
            </h2>
            <p className="w-2/3 mt-2 text-center text-sm mx-auto md:mt-5 md:text-left md:w-full">
              Een diverse collectie van oude voorwerpen van de Coöperatie.
            </p>
          </div>
          <div className="hidden md:block">
            <Button link={buttonLink} title={buttonTitle} isPrimary={false} />
          </div>
        </div>
        <div className="flex flex-col mb-6 md:mb-0 md:flex-row">
          <Image
            className="mb-4 w-full md-mb-0 md:w-1/2 md:pr-10 md:h-[500px] block object-cover box-border"
            src={firstImage}
            alt="banner image"
            width={1200}
            height={1200}
          />
          <Image
            className="w-full md:w-1/2 md:pl-10 md:h-[500px] block object-cover box-border"
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
