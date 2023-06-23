import Image from "next/image";
import Button from "./button";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import AnimatedText from "./animated-text";

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
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.015,
      },
    },
  };
  const { scrollYProgress } = useScroll();

  const item = {
    hidden: {
      opacity: 0,
      y: "100%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  const scale = useTransform(
    scrollYProgress,
    // Map x from these values:
    [0, 1],
    // Into these values:
    [1, 1.8]
  );

  return (
    <section className="hero-home relative overflow-hidden">
      <motion.div style={{ scale: scale }} animate={{}}>
        <Image
          className="w-full h-[400px] md:min-h-[600px] md:h-[calc(100vh-77px)] object-cover blur-[3px] scale-105"
          src={imageUrl}
          alt="hero image"
          width={1200}
          height={1200}
        />
      </motion.div>

      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center w-full mx-auto px-5">
        <motion.div variants={container} initial="hidden" animate="visible">
          <h1 className="font-primary font-bold mb-1 text-[30px] leading-tight md:font-normal md:text-4xl text-white md:mb-2">
            <AnimatedText text="Nationaal Coöperatie Museum" />
          </h1>
          <h2 className="font-primary text-md leading-tight text-xl md:text-7xl md:w-[80%] lg:w-[70%] md:mx-auto md:font-bold text-white mb-5 font-normal">
            <AnimatedText text={subTitle} />
          </h2>
          <div className="flex gap-10 flex-col justify-center md:flex-row">
            <motion.div variants={item}>
              <Button
                isPrimary
                link={buttonPrimary.buttonPrimaryLink.link}
                title={buttonPrimary.buttonPrimaryTitle}
              />
            </motion.div>
            <motion.div variants={item}>
              <Button
                isPrimary={false}
                link={buttonSecondary.buttonSecondaryLink.link}
                title={buttonSecondary.buttonSecondaryTitle}
              />
            </motion.div>
          </div>
          <motion.div variants={item}>
            <p className="mt-4 text-white">
              Gratis toegang & persoonlijke rondleiding!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
