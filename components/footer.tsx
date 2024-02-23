import Image from "next/image";
import Container from "./container";
import IconMail from "./icons/IconMail";
import IconPhone from "./icons/IconPhone";

interface Props {
  logo: string;
}

export default function Footer({ logo }: Props) {
  return (
    <footer className=" pt-10 lg:pt-20 pb-5 lg:mt-0 lg:h-[500px]">
      <div className="lg:fixed bottom-5 w-full">
        <Container>
          <div className="flex justify-between mb-0 lg:mb-20 flex-col lg:flex-row">
            <div className="flex flex-col items-start mb-5 lg:items-start lg:mb-0">
              <h3 className="text-2xl mb-4 mt-0">Openingstijden</h3>
              <ol className="list-none">
                <li>Maandag: Gesloten</li>
                <li>Woensdag: 13:00–17:00</li>
                <li>Donderdag: 13:00–17:00</li>
                <li>Vrijdag: 13:00–17:00</li>
                <li>Zaterdag: 11:00–17:00</li>
                <li>Zondag: Gesloten</li>
              </ol>
            </div>
            <div className="flex flex-col items-start mb-5 lg:items-start lg:mb-0">
              <h3 className="text-2xl mb-4 mt-0">Adres</h3>
              <span className="block mb-1">Lange Haven 84</span>
              <span className="block mb-1">3111CH Schiedam</span>
              <span className="block">Nederland</span>
            </div>
            <div className="flex flex-col items-start mb-5 lg:items-start lg:mb-0">
              <h3 className="text-2xl mb-4 lg:mt-0">Contact</h3>
              <a
                className="group mb-4 flex justify-start items-center no-underline md:transition-all md:duration-300 md:ease-in-out md:hover:text-primary md:hover:translate-x-3"
                href="tel:+010-4270920"
              >
                <span className="inline-flex mr-3 bg-primary justify-center items-center p-[8px] rounded-full">
                  <IconPhone />
                </span>
                010-4270920
              </a>
              <a
                className="group flex justify-start items-center no-underline transition-all duration-300 ease-in-out md:hover:text-primary md:hover:translate-x-3"
                href="mailto:nationaal-coop-museum@hetnet.nl"
              >
                <span className="inline-flex mr-3 bg-primary justify-center items-center p-[8px] rounded-full">
                  <IconMail />
                </span>
                nationaal-coop-museum@hetnet.nl
              </a>
            </div>
            <div className="flex flex-col items-start mb-10 lg:items-start lg:mb-0">
              <h3 className="text-2xl mb-4 lg:mt-0">Steun de coöperatie</h3>
              <span className="block mb-1">IB: NL98 INGB 0002 1825 02</span>
              <span className="block mb-1">BIC: INGBNL2A</span>
              <span className="block mb-1">Fiscaalnummer: 814989433</span>
              <a
                className="block"
                href="https://useplink.com/payment/u1pfz9DiuWVhISOi9bcaa/"
              >
                Doe een eenmalige gift
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between items-start lg:items-center lg:flex-row">
            <div className="flex flex-col lg:items-center lg:flex-row lg:gap-10">
              <a
                href="/algemene-voorwaarden"
                className="no-underline transition-all duration-300 ease-in-out md:hover:text-primary"
              >
                Algemene voorwaarden
              </a>
              <a
                href="/privacybeleid"
                className="no-underline transition-all duration-300 ease-in-out md:hover:text-primary"
              >
                Privacybeleid
              </a>
            </div>
            <div>
              <span>Gemaakt in Rotterdam door Jonah Kalkman ⌘</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
