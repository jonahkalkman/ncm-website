import Image from "next/image";
import Button from "./button";
import Container from "./container";

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
    <section className="vacancy-banner bg-[#EDB300] py-[40px] md:py-[60px]">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-[20px] md:gap-[40px]">
          <Image
            className="w-full md:w-1/2 block object-fill"
            src={image}
            alt="vacancy banner image"
            width={1200}
            height={1200}
          />
          <div className="w-full text-center md:w-1/2 md:text-left">
            <h2 className="font-bold text-center md:text-left mb-[13px] text-3xl text-black">{title}</h2>
            <div
              className="block pb-[20px] md:pb-[40px] w-[80%] m-auto text-center md:m-0 md:text-left"
              dangerouslySetInnerHTML={{ __html: text }}
            />
            <Button link={buttonLink} title={buttonTitle} isPrimary={false} />
          </div>
        </div>
      </Container>
    </section>
  );
}