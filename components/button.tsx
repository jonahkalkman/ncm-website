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
          ? "inline-block w-fit font-primary px-[30px] py-[15px] bg-[#EDB300] text-md md:text-[20px] rounded-sm transition-all duration-500 ease-in-out hover:bg-[#DBA604] "
          : "inline-block w-fit font-primary px-[30px] py-[15px] bg-white text-md md:text-[20px] rounded-sm text-black"
      }
    >
      {title}
    </a>
  );
}
