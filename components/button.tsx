interface Props {
  title: string;
  link: string;
  isPrimary?: boolean;
}

export default function Button({ title, link, isPrimary = true }: Props) {
  return (
    <a
      href={link}
      className={
        isPrimary
          ? "inline-block w-fit font-primary px-[40px] py-[10px] border-2 border-[#EDB300] text-[#EDB300] text-md md:text-[20px] transition-all duration-500 ease-in-out hover:bg-[#DBA604] hover:text-black hover:cursor-pointer"
          : "inline-block w-fit font-primary px-[40px] py-[10px] border-2 border-white text-md md:text-[20px] transition-all duration-500 ease-in-out text-white hover:bg-white hover:text-black hover:cursor-pointer"
      }
    >
      {title}
    </a>
  );
}
