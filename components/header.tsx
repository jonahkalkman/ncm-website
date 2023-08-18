import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header({ logo, menu }) {
  const pathname = usePathname();
  const [hasMobileMenu, setHasMobileMenu] = useState<boolean>(false);

  const isCurrent = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="bg-white overflow-x-hidden py-1 md:py-[10px] flex justify-center items-center lg:justify-between lg:gap-10">
      <Link href="/">
        <Image
          className="object-contain w-[60px] h-[60px] md:w-[70px] md:h-[57px]"
          src={logo}
          alt={"logo"}
          width={70}
          height={57}
        />
      </Link>
      <div
        className="hamburger flex flex-col gap-1 absolute right-5 lg:hidden"
        onClick={() => setHasMobileMenu(!hasMobileMenu)}
      >
        <span className="block w-7 h-1 bg-black"></span>
        <span className="block w-7 h-1 bg-black"></span>
        <span className="block w-7 h-1 bg-black"></span>
      </div>
      <div
        className={
          hasMobileMenu
            ? "absolute w-[80%] overflow-hidden right-0 translate-x-0 top-[68px] transition-all duration-300 md:hidden"
            : "absolute w-[80%] overflow-hidden right-0 translate-x-[1000px] top-[68px] transition-all duration-300 md:hidden"
        }
      >
        <nav className="bg-white p-10 border-solid border-2 border-black border-r-0">
          <ul className="flex flex-col gap-6 list-none">
            {menu &&
              menu.map((item: any) => (
                <Link
                  href={item.url}
                  key={item.id + item.title}
                  className="no-underline font-bold"
                >
                  <li
                    className={
                      isCurrent(item.url)
                        ? "transition-all ease-in-out duration-300 text-xl m-0 text-primary"
                        : "transition-all ease-in-out duration-300 text-xl m-0"
                    }
                  >
                    {item.title}
                  </li>
                </Link>
              ))}
          </ul>
        </nav>
      </div>
      <nav className="hidden lg:block">
        <ul className="flex gap-10 list-none">
          {menu &&
            menu.map((item: any) => (
              <Link
                href={item.url}
                key={item.id + item.title}
                className="no-underline"
              >
                <li
                  className={
                    isCurrent(item.url)
                      ? "transition-all ease-in-out duration-300 hover:text-primary hover:cursor-pointer m-0 text-primary"
                      : "transition-all ease-in-out duration-300 hover:text-primary hover:cursor-pointer m-0"
                  }
                >
                  {item.title}
                </li>
              </Link>
            ))}
        </ul>
      </nav>
    </header>
  );
}
