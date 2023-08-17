import Image from "next/image";
import Button from "./button";
import Container from "./container";
import { FadeInWhenVisible } from "./fade-in";
import { motion } from "framer-motion";

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
    <section className="vacancy-banner bg-primary py-[40px] md:py-20 md:shadow-sm">
      <Container>
        <FadeInWhenVisible>
          <div className="flex flex-col md:flex-row items-center gap-[20px] md:gap-20">
            <motion.div className="w-full md:w-1/2">
              <Image
                className="w-full md:h-[500px] block object-cover"
                src={image}
                alt="vacancy banner image"
                width={1200}
                height={1200}
              />
            </motion.div>
            <div className="w-full text-center md:w-1/2 md:text-left">
              <motion.h2 className="text-2xl font-bold text-left md:text-left md:mb-6 md:text-6xl text-black leading-tight">
                {title}
              </motion.h2>
              <motion.div
                className="block m-auto text-left md:w-[80%] md:m-0 md:text-left mb-0"
                dangerouslySetInnerHTML={{ __html: text }}
              />
              <motion.div className="mt-6">
                <Button
                  link={buttonLink}
                  title={buttonTitle}
                  isPrimary={false}
                />
              </motion.div>
            </div>
          </div>
        </FadeInWhenVisible>
      </Container>
    </section>
  );
}
