import Image from "next/image";
import Button from "./button";

interface Props {
  firstBlockImage: string;
  firstBlockText: {
    text: string;
  };
  secondBlockImage: string;
  secondBlockText: {
    text: string;
  };
}

export default function DetailBlock({
  firstBlockImage,
  firstBlockText,
  secondBlockImage,
  secondBlockText,
}: Props) {
  return (
    <section className="detail-block relative">
      <div
        className="w-1/2"
        dangerouslySetInnerHTML={{ __html: firstBlockText.text }}
      />
      <Image src={firstBlockImage} alt="" width={500} height={500} />
    </section>
  );
}
