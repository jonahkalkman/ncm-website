import Image from "next/image";
import Container from "./container";

interface Props {
  logo: string;
}

export default function Footer({ logo }: Props) {
  return (
    <footer className="mt-10 pt-10 md:pt-20 pb-5 md:mt-0 md:h-[300px]">
      <div className="md:fixed bottom-5 w-full">
        <Container>
          <div className="flex justify-between mb-20 flex-col md:flex-row">
            <div className="flex items-center gap-3 mb-10 justify-center md:mb-0 md:justify-start">
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
            <div className="flex flex-col items-center mb-10 md:items-start md:mb-0">
              <h3 className="text-2xl mb-2">Adres</h3>
              <span className="block mb-1">Langehaven 84</span>
              <span className="block mb-1">3111CH Schiedam</span>
              <span className="block">Nederland</span>
            </div>
            <div className="flex flex-col items-center mb-10 md:items-start md:mb-0">
              <h3 className="text-2xl mb-2">Contact</h3>
              <a className="block mb-1" href="tel:+010-4270920">
                010-4270920
              </a>
              <a className="block" href="mailto:info@cooperatie-museum.nl">
                info@cooperatie-museum.nl
              </a>
            </div>
            <div className="flex flex-col items-center mb-10 md:items-start md:mb-0">
              <h3 className="text-2xl mb-2">Steun de coöperatie</h3>
              <span className="block mb-1">IB: NL98 INGB 0002 1825 02</span>
              <span className="block mb-1">BIC: INGBNL2A</span>
              <span className="block">Fiscaalnummer: 814989433</span>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center md:flex-row">
            <span>© 2023 Nationaal Coöperatie Museum</span>
            <div className="flex flex-col items-center md:flex-row md:gap-10">
              <a href="">Algemene voorwaarden</a>
              <a href="">Privacybeleid</a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
