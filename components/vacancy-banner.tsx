import Image from "next/image";
import Button from "./button";
import Container from "./container";
import { FadeInWhenVisible } from "./fade-in";

interface Props {
  title: string;
  text: string;
  image: string;
  buttonTitle: string;
  buttonLink: string;
}

export default function VacancyBanner({
  title,
  text,
  image,
  buttonLink,
  buttonTitle,
}: Props) {
  return (
    <section className="vacancy-banner bg-primary py-[40px] lg:py-20 lg:shadow-sm">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-[20px] lg:gap-20">
          <div className="w-full lg:w-1/2">
            <FadeInWhenVisible>
              <Image
                className="w-full lg:h-[500px] block object-cover rounded-md"
                src={image}
                alt="vacancy banner image"
                width={1200}
                height={1200}
              />
            </FadeInWhenVisible>
          </div>
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            <FadeInWhenVisible>
              <h2 className="text-2xl font-bold text-left lg:text-left lg:mb-6 lg:text-6xl text-black leading-tight">
                {title}
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <div
                className="block m-auto text-left lg:w-[80%] lg:m-0 lg:text-left mb-0"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <div className="mt-6 text-left ">
                <Button
                  link={buttonLink}
                  title={buttonTitle}
                  isPrimary={false}
                />
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </Container>
    </section>
  );
}
