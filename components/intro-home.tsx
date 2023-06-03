import Image from "next/image";
import Button from "./button";

interface Props {
  title: string;
  text: string;
  image: string;
}

export default function IntroHome({ title, text, image }: Props) {
  return (
    <section className="intro-home my-10 md:my-40">
      <div className="flex justify-between items-center gap-5 md:gap-20 flex-col md:flex-row">
        <div className="w-1/2">
          <span className="block mb-2">Sinds 1978, al meer dan 45 jaar</span>
          <h2 className="w-full font-primary font-bold text-black text-3xl md:text-6xl text-left my-5 md:mb-6 md:my-0 leading-tight">
            {title}
          </h2>
          <p className="w-full text-center md:text-left md:w-full text-black text-md">
            {text}
          </p>
          <div className="mt-6">
            <Button title="Lees meer" link="/museum" />
          </div>
        </div>
        <div className="relative w-1/2 md:w-1/2">
          <Image
            className="w-full h-auto md:h-[600px] relative z-10 object-cover object-right"
            src={image}
            alt={title}
            width={800}
            height={800}
          />
          {/* <Image
            className="w-full  h-auto md:h-[600px] absolute top-5 right-5"
            src={image}
            alt={title}
            width={800}
            height={800}
          />
          <Image
            className="w-full  h-auto md:h-[600px] absolute top-3 right-3"
            src={image}
            alt={title}
            width={800}
            height={800}
          /> */}
        </div>
      </div>
    </section>
  );
}
