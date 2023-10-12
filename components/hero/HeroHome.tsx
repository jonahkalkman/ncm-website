import Image from "next/image";
import Button from "../button";
import Container from "../container";

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
          className="w-full h-[280px] lg:min-h-[400px] lg:h-[580px] object-cover blur-[3px] scale-105"
          src={imageUrl}
          alt="hero image"
          width={1200}
          height={1200}
        />
      </div>

      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-left w-full">
        <Container>
          <div>
            <h1 className="animate-fadein text-left text-white text-lg lg:text-xl mb-1 font-normal lg:text-left">
              Nationaal Cooperatie Museum
            </h1>
            <h2 className="animate-fadein font-primary font-bold text-md text-2xl leading-[150%] text-left md:text-4xl lg:leading-[125%] lg:text-left lg:text-7xl lg:w-[80%] lg:font-bold text-white mb-5 mt-0">
              {subTitle}
            </h2>
            <div className="animate-fadein flex gap-2 flex-col justify-start items-left lg:items-center lg:flex-row lg:gap-10">
              <div>
                <Button
                  isPrimary
                  link={buttonPrimary.buttonPrimaryLink}
                  title={buttonPrimary.buttonPrimaryTitle}
                />
              </div>
              <p className="animate-fadein text-white text-sm lg:text-lg">
                Gratis toegang & persoonlijke rondleiding!
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
