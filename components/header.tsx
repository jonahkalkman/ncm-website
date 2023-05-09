import Image from "next/image";
import Link from "next/link";

export default function Header({ logo, menu }) {
  return (
    <header className="bg-white py-5 flex justify-between items-center gap-10">
      <Link href="/">
        <Image src={logo} alt={"logo"} width={70} height={57} />
      </Link>
      <nav>
        <ul className="flex gap-10">
          {menu && menu.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
