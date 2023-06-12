import Image from "next/image";
import Button from "./button";

interface Props {
  title: string;
  firstBlock: {
    title: string;
    text: string;
    image: string;
  };
  secondBlock: {
    title: string;
    text: string;
    image: string;
  };
  thirdBlock: {
    title: string;
    text: string;
    image: string;
  };
}

export default function ContentHome({
  title,
  firstBlock,
  secondBlock,
  thirdBlock,
}: Props) {
  return (
    <section className="content-home py-10 md:py-20">
      <span className="block text-center text-sm md:text-md mb-2 md:w-[50%] mx-auto">
        In een nostalgisch pand aan de Lange Haven in Schiedam
      </span>
      <h2 className="font-bold text-center text-2xl md:text-6xl mb-10 md:text-6xl md:mb-20 md:w-[50%] mx-auto leading-tight">
        {title}
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-20 md:mb-40 mb-20">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <h3 className="text-center text-2xl font-bold md:text-5xl mb-2 md:text-left">
            {firstBlock.title}
          </h3>
          <div
            className="text-center w-full md:w-[80%] md:text-left"
            dangerouslySetInnerHTML={{ __html: firstBlock.text }}
          />
          <div className="mt-5 text-center md:text-left">
            <Button title="Lees meer" link="/museumwinkel" />
          </div>
        </div>
        <Image
          className="w-full md:w-1/2 order-1 md:order-2"
          src={firstBlock.image}
          alt={firstBlock.title}
          width={400}
          height={400}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-20 md:mb-40 mb-20">
        <Image
          className="w-full md:w-1/2"
          src={secondBlock.image}
          alt={secondBlock.title}
          width={400}
          height={400}
        />
        <div className="w-full md:w-1/2">
          <h3 className="text-center text-2xl md:text-left font-bold md:text-5xl mb-2">
            {secondBlock.title}
          </h3>
          <div
            className="text-center w-full md:w-[80%] md:text-left"
            dangerouslySetInnerHTML={{ __html: secondBlock.text }}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-20 md:mb-40">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <h3 className="text-center text-2xl md:text-left font-bold md:text-5xl mb-2">
            {thirdBlock.title}
          </h3>
          <div
            className="text-center w-full md:w-[80%] md:text-left"
            dangerouslySetInnerHTML={{ __html: thirdBlock.text }}
          />
          <div className="mt-5 text-center md:text-left">
            <Button title="Lees meer" link="/museumwinkel" />
          </div>
        </div>
        <Image
          className="w-full md:w-1/2 md:order-2"
          src={thirdBlock.image}
          alt={thirdBlock.title}
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}
