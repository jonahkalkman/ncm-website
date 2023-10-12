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
    <header className="bg-white overflow-x-hidden py-1 lg:py-[10px] flex justify-start items-center lg:justify-between lg:gap-10">
      <Link href="/">
        <Image
          className="animate-fadein object-contain w-[60px] h-[60px] lg:w-[70px] lg:h-[57px]"
          src={logo}
          alt={"logo"}
          width={70}
          height={57}
        />
      </Link>
      <div
        className={
          hasMobileMenu
            ? "hamburger flex flex-col gap-[5px] absolute right-5 lg:hidden"
            : "hamburger flex flex-col gap-[5px] absolute right-5 lg:hidden"
        }
        onClick={() => setHasMobileMenu(!hasMobileMenu)}
      >
        <span
          className={
            hasMobileMenu
              ? "block w-7 h-1 bg-black rotate-45 transition-all duration-300 ease-in-out relative top-[10px]"
              : "block w-7 h-1 bg-black transition-all duration-300 ease-in-out"
          }
        ></span>
        <span
          className={
            hasMobileMenu
              ? "block h-1 bg-black transition-all duration-150 ease-in-out w-0"
              : "block w-7 h-1 bg-black transition-all duration-150 ease-in-out"
          }
        ></span>
        <span
          className={
            hasMobileMenu
              ? "block w-7 h-1 bg-black rotate-[-45deg] relative transition-all duration-300 ease-in-out top-[-8px]"
              : "block w-7 h-1 bg-black transition-all duration-300 ease-in-out"
          }
        ></span>
      </div>
      <div
        className={
          hasMobileMenu
            ? "absolute w-[90%] overflow-hidden right-0 translate-x-0 top-[68px] transition-all duration-300 lg:hidden"
            : "absolute w-[90%] overflow-hidden right-0 translate-x-[700px] top-[68px] transition-all duration-300 lg:hidden"
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
                  onClick={() => setHasMobileMenu(false)}
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
      <nav className="hidden lg:block animate-fadein">
        <ul className="flex gap-10 list-none lg:gap-5 xl-gap-10 2xl:gap-10">
          {menu &&
            menu.map((item: any) => (
              <Link
                href={item.url}
                key={item.id + item.title}
                className="no-underline"
              >
                <li
                  className={`transition-all ease-in-out duration-300 hover:text-primary hover:cursor-pointer m-0 lg:text-sm xl:text-lg 2xl:text-lg ${
                    isCurrent(item.url) ? "text-primary" : ""
                  }`}
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
