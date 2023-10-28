import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FadeInWhenVisible } from "./fade-in";

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
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  const yRange2 = useTransform(scrollYProgress, [0.6, 0.8], [1, 0]);
  const pathLength2 = useSpring(yRange2, { stiffness: 400, damping: 90 });

  return (
    <section className="content-home py-10 lg:my-20">
      <div className="flex flex-col gap-0 mb-10">
        <FadeInWhenVisible>
          <span className="order-2 lg:order-1 block text-left text-md w-[80%] lg:text-xl mb-2 lg:w-full lg:mx-auto">
            In een nostalgisch pand aan de Lange Haven in Schiedam
          </span>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <h2 className="md:order-1 font-bold text-left text-2xl mb-2 lg:text-6xl lg:mb-[80px] lg:w-full mx-auto leading-tight">
            {title}
          </h2>
        </FadeInWhenVisible>
      </div>
      <div className="relative flex flex-col lg:flex-row justify-between items-center gap-0 lg:gap-20 lg:mb-40 mb-20">
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <FadeInWhenVisible>
            <h3 className="text-left text-2xl font-bold lg:text-5xl mb-2 lg:text-left lg:mb-6">
              {firstBlock.title}
            </h3>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div
              className="text-left w-full lg:w-[90%] lg:text-left"
              dangerouslySetInnerHTML={{ __html: firstBlock.text }}
            />
          </FadeInWhenVisible>
        </div>
        <div className="order-1 lg:order-2 lg:w-1/2 z-10">
          <FadeInWhenVisible>
            <Image
              className="w-full lg:h-[500px] object-cover rounded-md"
              src={firstBlock.image}
              alt={firstBlock.title}
              width={1200}
              height={1200}
            />
          </FadeInWhenVisible>
        </div>
        <div className="absolute bottom-[-200px] right-[45%] hidden lg:block">
          <svg
            width="296"
            height="398"
            viewBox="0 0 296 398"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              style={{ pathLength }}
              d="M293 1.5C236 177.003 -179.134 93.3053 96.5 395.5"
              stroke="#EDB300"
              strokeOpacity="0.5"
              strokeWidth="5"
              strokeDasharray="10 10"
            />
          </svg>
        </div>
      </div>
      <div className="relative flex flex-col lg:flex-row justify-between items-center gap-0 lg:gap-20 lg:mb-40 mb-20">
        <div className="w-full lg:w-1/2 z-10">
          <FadeInWhenVisible>
            <Image
              className="w-full lg:h-[500px] object-cover rounded-md"
              src={secondBlock.image}
              alt={secondBlock.title}
              width={1200}
              height={1200}
            />
          </FadeInWhenVisible>
        </div>
        <div className="w-full lg:w-1/2">
          <FadeInWhenVisible>
            <h3 className="text-left text-2xl lg:text-left font-bold lg:text-5xl mb-2 lg:mb-6">
              {secondBlock.title}
            </h3>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div
              className="text-left w-full lg:w-[90%] lg:text-left"
              dangerouslySetInnerHTML={{ __html: secondBlock.text }}
            />
          </FadeInWhenVisible>
        </div>
        <div className="absolute bottom-[-200px] left-[40%] hidden lg:block">
          <svg
            width="404"
            height="354"
            viewBox="0 0 404 354"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              style={{ pathLength: pathLength2 }}
              d="M403.005 351.272C81.0046 310.272 244 57 1.00012 2.49992"
              stroke="#EDB300"
              strokeOpacity="0.5"
              strokeWidth="5"
              strokeDasharray="10 10"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-0 lg:gap-20 lg:mb-0">
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <FadeInWhenVisible>
            <h3 className="text-left text-2xl lg:text-left font-bold lg:text-5xl mb-2 lg:mb-6">
              {thirdBlock.title}
            </h3>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div
              className="text-left w-full lg:w-[90%] lg:text-left"
              dangerouslySetInnerHTML={{ __html: thirdBlock.text }}
            />
          </FadeInWhenVisible>
        </div>
        <div className="w-full lg:w-1/2 lg:order-2">
          <FadeInWhenVisible>
            <Image
              className="w-full lg:h-[500px] object-cover z-10 relative rounded-md"
              src={thirdBlock.image}
              alt={thirdBlock.title}
              width={1200}
              height={1200}
            />
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
