import Image from "next/image";
import Link from "next/link";

export default function Header({ logo, menu }) {
  return (
    <header className="bg-white py-1 md:py-[10px] flex justify-center md:justify-start items-center md:gap-10">
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
        <ul className="flex gap-10">
          {menu &&
            menu.map((item) => (
              <a href={item.url} key={item.id + item.title}>
                <li className="hover:opacity-50 hover:cursor-pointer">
                  {item.title}
                </li>
              </a>
            ))}
        </ul>
      </nav>
    </header>
  );
}
