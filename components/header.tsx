import Image from "next/image";
import Link from "next/link";

export default function Header({ logo, menu }) {
  return (
    <header className="bg-white py-1 md:py-[10px] flex justify-center md:justify-center items-center md:gap-10">
      <Link href="/">
        <Image
          className="object-contain w-[60px] h-[60px] md:w-[70px] md:h-[57px]"
          src={logo}
          alt={"logo"}
          width={70}
          height={57}
        />
      </Link>
      <nav className="hidden md:block">
        <ul className="flex gap-10 list-none">
          {menu &&
            menu.map((item) => (
              <Link
                href={item.url}
                key={item.id + item.title}
                className="no-underline"
              >
                <li className="transition-all ease-in-out duration-300 hover:text-[#EDB300] hover:cursor-pointer">
                  {item.title}
                </li>
              </Link>
            ))}
        </ul>
      </nav>
    </header>
  );
}
