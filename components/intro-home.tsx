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
    <section className="py-10 lg:py-20">
      <div className="flex justify-between items-center gap-5 lg:gap-20 flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <FadeInWhenVisible>
            <span className="block mb-0 lg:mb-2 text-left text-md lg:text-left lg:text-xl">
              Sinds 1978, al meer dan 45 jaar
            </span>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.2}>
            <h2 className="mt-2 w-full font-primary font-bold text-black text-2xl text-left lg:text-6xl lg:text-left my-5 lg:mb-6 lg:my-0 leading-tight">
              {title}
            </h2>
          </FadeInWhenVisible>
          <div className="relative w-full mb-4 lg:hidden">
            <Image
              className="w-full h-auto lg:h-[600px] relative z-10 object-cover object-right rounded-md"
              src={image}
              alt={title}
              width={800}
              height={800}
            />
          </div>
          <FadeInWhenVisible>
            <p className="w-full text-left lg:text-left lg:w-full text-black text-md">
              {text}
            </p>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div className="mt-6 text-left lg:text-left">
              <Button title="Lees meer" link="/museum" />
            </div>
          </FadeInWhenVisible>
        </div>
        <div className="hidden relative w-full lg:block lg:w-1/2">
          <FadeInWhenVisible>
            <Image
              className="w-full h-auto lg:h-[600px] relative z-10 object-cover object-right rounded-md"
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
