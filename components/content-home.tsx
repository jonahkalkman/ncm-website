import Image from "next/image";
import Link from "next/link";

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
  return (
    <section className="content-home py-20">
      <h2 className="text-center text-4xl mb-20">{title}</h2>
      <div className="flex justify-between items-center gap-20 mb-40">
        <div className="w-1/2">
          <h3 className="text-3xl mb-2">{firstBlock.title}</h3>
          <div
            className="w-[80%]"
            dangerouslySetInnerHTML={{ __html: firstBlock.text }}
          />
        </div>
        <Image
          className="w-1/2 rounded-sm"
          src={firstBlock.image}
          alt={firstBlock.title}
          width={400}
          height={400}
        />
      </div>
      <div className="flex justify-between items-center gap-20 mb-40">
        <Image
          className="w-1/2 rounded-sm"
          src={secondBlock.image}
          alt={secondBlock.title}
          width={400}
          height={400}
        />
        <div className="w-1/2">
          <h3 className="text-3xl mb-2">{secondBlock.title}</h3>
          <div
            className="w-[80%]"
            dangerouslySetInnerHTML={{ __html: secondBlock.text }}
          />
        </div>
      </div>
      <div className="flex justify-between items-center gap-20">
        <div className="w-1/2">
          <h3 className="text-3xl mb-2">{thirdBlock.title}</h3>
          <div
            className="w-[80%]"
            dangerouslySetInnerHTML={{ __html: thirdBlock.text }}
          />
        </div>
        <Image
          className="w-1/2 rounded-sm"
          src={thirdBlock.image}
          alt={thirdBlock.title}
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}
