import Image from "next/image";
import Button from "./button";

interface Props {
  title: string;
  subTitle: string;
  imageUrl: string;
  buttonPrimary: {
    buttonPrimaryTitle: string;
    buttonPrimaryLink: {
      link: string;
    };
  };
  buttonSecondary: {
    buttonSecondaryTitle: string;
    buttonSecondaryLink: {
      link: string;
    };
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
    <section className="hero-home relative">
      <Image
        className="w-full h-[400px] md:min-h-[600px] md:h-[calc(100vh-77px)]"
        src={imageUrl}
        alt="hero image"
        width={1200}
        height={500}
      />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center w-full mx-auto px-5">
        <h1 className="font-primary font-bold mb-1 text-3xl leading-tight md:text-7xl text-white md:mb-5">
          Nationaal <br className="block sm:hidden" /> Coöperatie Museum
        </h1>
        <h2 className="font-primary text-md md:text-3xl text-white mb-10">
          {subTitle}
        </h2>
        <div className="flex gap-5 justify-center">
          <Button
            isPrimary
            link={buttonPrimary.buttonPrimaryLink.link}
            title={buttonPrimary.buttonPrimaryTitle}
          />
          <Button
            isPrimary={false}
            link={buttonSecondary.buttonSecondaryLink.link}
            title={buttonSecondary.buttonSecondaryTitle}
          />
        </div>
      </div>
    </section>
  );
}
