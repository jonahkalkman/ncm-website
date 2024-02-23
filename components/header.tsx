import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Header({ logo, menu }) {
  const pathname = usePathname();
  const [hasMobileMenu, setHasMobileMenu] = useState<boolean>(false);

  const isCurrent = (path: string) => {
    return pathname === path;
  };

  return (
    <header
      className={clsx({
        "bg-white overflow-x-hidden py-2 lg:py-[10px] flex justify-start items-center lg:justify-between lg:gap-10":
          true,
      })}
    >
      <div className="relative z-10 w-full flex justify-between items-center lg:w-fit">
        <Link href="/">
          <Image
            className="object-contain w-[60px] lg:w-[70px] lg:h-[57px]"
            src={"/logo.png"}
            alt={"logo"}
            width={70}
            height={57}
          />
        </Link>
        <div
          className="hamburger flex flex-col gap-[6px] border-solid border-2 h-fit border-black rounded-md px-3 py-1 lg:hidden"
          onClick={() => setHasMobileMenu(!hasMobileMenu)}
        >
          <span className="text-black text-base leading-none align-middle">
            Menu
          </span>
        </div>
      </div>
      <div
        className={clsx({
          "h-fit absolute w-[100%] overflow-hidden right-0 top-[64px] z-[-1] transition-all duration-500 shadow-sm lg:hidden":
            true,
          "translate-y-[-100%]": !hasMobileMenu,
          "translate-y-0": hasMobileMenu,
        })}
      >
        <nav className="bg-white px-5 py-4 pt-2 h-fit w-[100%] float-right">
          <hr className="w-full border-none h-[2px] bg-gray-200 mb-4" />
          <ul className="flex flex-col gap-2 list-none">
            {menu &&
              menu.map((item: any) => (
                <Link
                  href={item.url}
                  key={item.id + item.title}
                  className="no-underline"
                  onClick={() => setHasMobileMenu(false)}
                >
                  <li
                    className={
                      isCurrent(item.url)
                        ? "transition-all ease-in-out duration-300 text-lg m-0 text-primary font-serif"
                        : "transition-all ease-in-out duration-300 text-lg m-0 font-serif"
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
