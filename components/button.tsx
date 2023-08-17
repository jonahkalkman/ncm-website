import Link from "next/link";

interface Props {
  title: string;
  link: string;
  isPrimary?: boolean;
}

export default function Button({ title, link, isPrimary = true }: Props) {
  return (
    <Link
      href={link}
      className={
        isPrimary
          ? "no-underline inline-block w-fit font-primary px-[40px] py-[10px] border-2 border-primary text-primary text-md md:text-[20px] transition-all duration-500 ease-in-out hover:bg-primary hover:text-black hover:cursor-pointer rounded-lg"
          : "no-underline inline-block w-fit font-primary px-[40px] py-[10px] border-2 border-white text-md md:text-[20px] transition-all duration-500 ease-in-out text-white hover:bg-white hover:text-black hover:cursor-pointer rounded-lg"
      }
    >
      {title}
    </Link>
  );
}
