import Image from "next/image";
import Button from "./button";
import Container from "./container";
import { FadeInWhenVisible } from "./fade-in";

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
    <section className="banner  py-[40px] md:py-20 z-10 relative">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between align-start mb-[25px]">
          <div>
            <FadeInWhenVisible>
              <h2 className="font-bold text-2xl text-left md:text-left md:text-6xl text-black mb-0">
                {title}
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <p className="w-full mt-2 text-left text-md mx-auto md:mt-5 md:text-left md:w-full md:text-lg">
                Een diverse collectie van oude voorwerpen van de Coöperatie.
              </p>
            </FadeInWhenVisible>
          </div>
          <div className="hidden md:block">
            <FadeInWhenVisible>
              <Button link={buttonLink} title={buttonTitle} isPrimary={false} />
            </FadeInWhenVisible>
          </div>
        </div>
        <div className="flex flex-col mb-6 md:mb-0 md:flex-row md:w-full md:gap-10">
          <div className="w-full md:w-1/2">
            <FadeInWhenVisible>
              <Image
                className="mb-4 w-full md-mb-0 md:h-[450px] block object-cover box-border rounded-md"
                src={firstImage}
                alt="banner image"
                width={1200}
                height={1200}
              />
            </FadeInWhenVisible>
          </div>
          <div className="w-full md:w-1/2">
            <FadeInWhenVisible>
              <Image
                className="w-full md:h-[450px] block object-cover box-border rounded-md"
                src={secondImage}
                alt="second banner image"
                width={1200}
                height={1200}
              />
            </FadeInWhenVisible>
          </div>
        </div>
        <div className="flex md:justify-center md:hidden">
          <Button link={buttonLink} title={buttonTitle} isPrimary={false} />
        </div>
      </Container>
    </section>
  );
}
