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
          ? "px-[30px] py-[15px] bg-[#EDB300] text-sm md:text-[20px] rounded-sm transition-all duration-500 ease-in-out hover:bg-[#DBA604] "
          : "px-[30px] py-[15px] bg-white text-sm md:text-[20px] rounded-sm text-black"
      }
    >
      {title}
    </a>
  );
}
