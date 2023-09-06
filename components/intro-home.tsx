import Image from "next/image";
import Button from "./button";
import { FadeInWhenVisible } from "./fade-in";

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
          <FadeInWhenVisible>
            <span className="block mb-0 md:mb-2 text-left text-md md:text-left md:text-xl">
              Sinds 1978, al meer dan 45 jaar
            </span>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <h2 className="mt-2 w-full font-primary font-bold text-black text-2xl text-left md:text-6xl md:text-left my-5 md:mb-6 md:my-0 leading-tight">
              {title}
            </h2>
          </FadeInWhenVisible>
          <div className="relative w-full mb-4 md:hidden">
            <Image
              className="w-full h-auto md:h-[600px] relative z-10 object-cover object-right"
              src={image}
              alt={title}
              width={800}
              height={800}
            />
          </div>
          <FadeInWhenVisible>
            <p className="w-full text-left md:text-left md:w-full text-black text-md">
              {text}
            </p>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div className="mt-6 text-left md:text-left">
              <Button title="Lees meer" link="/museum" />
            </div>
          </FadeInWhenVisible>
        </div>
        <div className="hidden relative w-full md:block md:w-1/2">
          <FadeInWhenVisible>
            <Image
              className="w-full h-auto md:h-[600px] relative z-10 object-cover object-right"
              src={image}
              alt={title}
              width={800}
              height={800}
            />
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
