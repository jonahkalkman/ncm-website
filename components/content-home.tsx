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
    <section className="content-home py-10 md:my-20">
      <span className="block text-center text-sm md:text-xl mb-2 md:w-[90%] mx-auto">
        In een nostalgisch pand aan de Lange Haven in Schiedam
      </span>
      <h2 className="font-bold text-center text-2xl mb-10 md:text-6xl md:mb-[100px] md:w-[90%] mx-auto leading-tight">
        {title}
      </h2>
      <div className="relative flex flex-col md:flex-row justify-between items-center gap-5 md:gap-20 md:mb-40 mb-20">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <h3 className="text-center text-2xl font-bold md:text-5xl mb-2 md:text-left md:mb-6">
            {firstBlock.title}
          </h3>
          <div
            className="text-center w-full md:w-[90%] md:text-left"
            dangerouslySetInnerHTML={{ __html: firstBlock.text }}
          />
          <div className="mt-6 text-center md:text-left">
            <Button title="Lees meer" link="/museumwinkel" />
          </div>
        </div>
        <div className="order-1 md:order-2 md:w-1/2 z-10">
          <Image
            className="w-full md:h-[500px] object-cover"
            src={firstBlock.image}
            alt={firstBlock.title}
            width={1200}
            height={1200}
          />
        </div>
        <div className="absolute bottom-[-200px] right-[45%]">
          <svg
            width="296"
            height="398"
            viewBox="0 0 296 398"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M293 1.5C236 177.003 -179.134 93.3053 96.5 395.5"
              stroke="#EDB300"
              stroke-opacity="0.5"
              stroke-width="5"
              stroke-dasharray="10 10"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-20 md:mb-40 mb-20">
        <div className="w-1/2 z-10">
          <Image
            className="w-full md:h-[500px] object-cover"
            src={secondBlock.image}
            alt={secondBlock.title}
            width={1200}
            height={1200}
          />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-center text-2xl md:text-left font-bold md:text-5xl mb-2 md:mb-6">
            {secondBlock.title}
          </h3>
          <div
            className="text-center w-full md:w-[90%] md:text-left"
            dangerouslySetInnerHTML={{ __html: secondBlock.text }}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-20 md:mb-0">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <h3 className="text-center text-2xl md:text-left font-bold md:text-5xl mb-2 md:mb-6">
            {thirdBlock.title}
          </h3>
          <div
            className="text-center w-full md:w-[90%] md:text-left"
            dangerouslySetInnerHTML={{ __html: thirdBlock.text }}
          />
          <div className="mt-6 text-center md:text-left">
            <Button title="Lees meer" link="/museumwinkel" />
          </div>
        </div>
        <div className="w-1/2 md:order-2">
          <Image
            className="w-full md:h-[500px] object-cover"
            src={thirdBlock.image}
            alt={thirdBlock.title}
            width={1200}
            height={1200}
          />
        </div>
      </div>
    </section>
  );
}
