import Image from "next/image";
import Button from "./button";
import AnimatedText from "./animated-text";
import Container from "./container";

interface Props {
  title: string;
  subTitle: string;
  imageUrl: string;
  buttonPrimary: {
    buttonPrimaryTitle: string;
    buttonPrimaryLink: string;
  };
  buttonSecondary: {
    buttonSecondaryTitle: string;
    buttonSecondaryLink: string;
  };
}

export default function HeroHome({
  title,
  subTitle,
  imageUrl,
  buttonPrimary,
  buttonSecondary,
}: Props) {
  return (
    <section className="hero-home relative overflow-hidden">
      <div>
        <Image
          className="w-full h-[400px] md:min-h-[400px] md:h-[500px] object-cover blur-[3px] scale-105"
          src={imageUrl}
          alt="hero image"
          width={1200}
          height={1200}
        />
      </div>

      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-left w-full px-5">
        <Container>
          <div>
            <h1 className="text-white text-xl mb-3 font-normal">
              Nationaal Cooperatie Museum
            </h1>
            <h2 className="font-primary text-md text-2xl leading-[118%] md:text-7xl md:w-[80%] lg:w-[80%] md:font-bold text-white mb-5 font-normal">
              <AnimatedText text={subTitle} />
            </h2>
            <div className="flex gap-2 flex-col justify-start items-center md:flex-row md:gap-10">
              <div>
                <Button
                  isPrimary
                  link={buttonPrimary.buttonPrimaryLink}
                  title={buttonPrimary.buttonPrimaryTitle}
                />
              </div>
              <p className="text-white text-xs md:text-lg">
                Gratis toegang & persoonlijke rondleiding!
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
