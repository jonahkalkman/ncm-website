import Image from "next/image";
import Button from "./button";

interface Props {
  title: string;
  text: string;
  image: string;
}

export default function IntroHome({ title, text, image }: Props) {

  return (
    <section className="py-10 md:py-20">
      <div className="flex justify-between items-center gap-5 md:gap-20 flex-col md:flex-row">
        <div className="w-full md:w-1/2">
            <span className="block mb-0 md:mb-2 text-center text-sm md:text-left md:text-xl">
              Sinds 1978, al meer dan 45 jaar
            </span>
            <h2 className="mt-2 w-full font-primary font-bold text-black text-2xl text-center md:text-6xl md:text-left my-5 md:mb-6 md:my-0 leading-tight">
              {title}
            </h2>
            <div className="relative w-full mb-4 md:hidden">
              <Image
                className="w-full h-auto md:h-[600px] relative z-10 object-cover object-right"
                src={image}
                alt={title}
                width={800}
                height={800}
              />
            </div>
            <p className="w-full text-left md:text-left md:w-full text-black text-md">
              {text}
            </p>
            <div className="mt-6 text-center md:text-left">
              <Button title="Lees meer" link="/museum" />
            </div>
        </div>
        <div className="hidden relative w-full md:block md:w-1/2">
            <Image
              className="w-full h-auto md:h-[600px] relative z-10 object-cover object-right"
              src={image}
              alt={title}
              width={800}
              height={800}
            />
        </div>
      </div>
    </section>
  );
}
