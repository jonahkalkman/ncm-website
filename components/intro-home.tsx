import Image from "next/image";
import Button from "./button";
import { use, useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, circInOut } from "framer-motion";
import { FadeInWhenVisible } from "./fade-in";

interface Props {
  title: string;
  text: string;
  image: string;
}

export default function IntroHome({ title, text, image }: Props) {
  const { scrollYProgress } = useScroll();
  const ref = useRef(null);
  const isInView = useInView(ref);

  const imageYTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["-15%", "15%"],
    { ease: circInOut }
  );

  return (
    <section className="py-40">
      <div className="flex justify-between items-center gap-5 md:gap-20 flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <FadeInWhenVisible>
            <motion.span className="block mb-0 md:mb-2 text-center md:text-left">
              Sinds 1978, al meer dan 45 jaar
            </motion.span>
            <motion.h2 className="mt-2 w-full font-primary font-bold text-black text-2xl text-center md:text-6xl md:text-left my-5 md:mb-6 md:my-0 leading-tight">
              {title}
            </motion.h2>
            <div className="relative w-full mb-4 md:hidden">
              <Image
                className="w-full h-auto md:h-[600px] relative z-10 object-cover object-right"
                src={image}
                alt={title}
                width={800}
                height={800}
              />
            </div>
            <motion.p className="w-full text-center md:text-left md:w-full text-black text-md">
              {text}
            </motion.p>
            <div className="mt-6 text-center md:text-left">
              <Button title="Lees meer" link="/museum" />
            </div>
          </FadeInWhenVisible>
        </div>
        <div className="hidden relative w-full md:block md:w-1/2">
          <FadeInWhenVisible>
            <motion.div
              ref={ref}
              transition={{ type: "spring" }}
              style={{ translateY: isInView ? imageYTransform : 0 }}
            >
              <Image
                className="w-full h-auto md:h-[600px] relative z-10 object-cover object-right"
                src={image}
                alt={title}
                width={800}
                height={800}
              />
            </motion.div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
