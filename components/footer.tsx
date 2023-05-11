import Image from "next/image";
import Container from "./container";

interface Props {
  logo: string;
}

export default function Footer({ logo }: Props) {
  return (
    <footer className="py-10">
      <Container>
        <div className="flex justify-between mb-10">
          <div className="flex items-center gap-3">
            <Image
              className="object-contain w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
              src={logo}
              alt={"logo"}
              width={70}
              height={57}
            />
            <span className="text-xl">
              Nationaal <br />
              Coöperatie Museum
            </span>
          </div>
          <div>
            <h3 className="text-2xl mb-2">Adres</h3>
            <span className="block mb-1">Langehaven 84</span>
            <span className="block mb-1">3111CH Schiedam</span>
            <span className="block">Nederland</span>
          </div>
          <div>
            <h3 className="text-2xl mb-2">Contact</h3>
            <a className="block mb-1" href="tel:+010-4270920">
              010-4270920
            </a>
            <a className="block" href="mailto:info@cooperatie-museum.nl">
              info@cooperatie-museum.nl
            </a>
          </div>
          <div>
            <h3 className="text-2xl mb-2">Steun de coöperatie</h3>
            <span className="block mb-1">IB: NL98 INGB 0002 1825 02</span>
            <span className="block mb-1">BIC: INGBNL2A</span>
            <span className="block">Fiscaalnummer: 814989433</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span>© 2023 Nationaal Coöperatie Museum</span>
          <div className="flex gap-10 items-center">
            <a href="">Algemene voorwaarden</a>
            <a href="">Privacybeleid</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
