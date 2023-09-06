import Image from "next/image";
import Container from "./container";

interface Props {
  logo: string;
}

export default function Footer({ logo }: Props) {
  return (
    <footer className="mt-5 pt-10 md:pt-20 pb-5 md:mt-0 md:h-[300px]">
      <div className="md:fixed bottom-5 w-full">
        <Container>
          <div className="flex justify-between mb-0 md:mb-20 flex-col md:flex-row">
            <div className="flex items-center gap-3 mb-5 justify-start md:mb-0 md:justify-start">
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
            <div className="flex flex-col items-start mb-5 md:items-start md:mb-0">
              <h3 className="text-2xl mb-4">Adres</h3>
              <span className="block mb-1">Langehaven 84</span>
              <span className="block mb-1">3111CH Schiedam</span>
              <span className="block">Nederland</span>
            </div>
            <div className="flex flex-col items-start mb-5 md:items-start md:mb-0">
              <h3 className="text-2xl mb-4">Contact</h3>
              <a
                className="group mb-4 flex justify-start items-center no-underline transition-all duration-300 ease-in-out hover:text-primary hover:translate-x-3"
                href="tel:+010-4270920"
              >
                <span className="inline-flex mr-3 bg-primary justify-center items-center p-[8px] rounded-full">
                  <svg
                    className="h-[20px] w-[20px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
                      <path
                        className="transition-all duration-300 ease-in-out"
                        fill="black"
                        d="M16.552 22.133c-1.44-.053-5.521-.617-9.795-4.89-4.273-4.274-4.836-8.354-4.89-9.795-.08-2.196 1.602-4.329 3.545-5.162a1.47 1.47 0 0 1 1.445.159c1.6 1.166 2.704 2.93 3.652 4.317a1.504 1.504 0 0 1-.256 1.986l-1.951 1.449a.48.48 0 0 0-.142.616c.442.803 1.228 1.999 2.128 2.899.901.9 2.153 1.738 3.012 2.23a.483.483 0 0 0 .644-.162l1.27-1.933a1.503 1.503 0 0 1 2.056-.332c1.407.974 3.049 2.059 4.251 3.598a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.535Z"
                      />
                    </g>
                  </svg>
                </span>
                010-4270920
              </a>
              <a
                className="group flex justify-start items-center no-underline transition-all duration-300 ease-in-out hover:text-primary hover:translate-x-3"
                href="mailto:info@cooperatie-museum.nl"
              >
                <span className="inline-flex mr-3 bg-primary justify-center items-center p-[8px] rounded-full">
                  <svg
                    className="h-[20px] w-[20px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" fill-rule="nonzero">
                      <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
                      <path
                        className="transition-all duration-300 ease-in-out"
                        fill="#000000FF"
                        d="m2.068 5.482 8.875 8.876a1.5 1.5 0 0 0 2.008.103l.114-.103 8.869-8.87c.029.11.048.222.058.337L22 6v12a2 2 0 0 1-1.85 1.995L20 20H4a2 2 0 0 1-1.995-1.85L2 18V6c0-.12.01-.236.03-.35l.038-.168ZM20 4c.121 0 .24.01.355.031l.17.039-8.52 8.52-8.523-8.522c.11-.03.224-.05.34-.06L4 4h16Z"
                      />
                    </g>
                  </svg>
                </span>
                info@cooperatie-museum.nl
              </a>
            </div>
            <div className="flex flex-col items-start mb-10 md:items-start md:mb-0">
              <h3 className="text-2xl mb-4">Steun de coöperatie</h3>
              <span className="block mb-1">IB: NL98 INGB 0002 1825 02</span>
              <span className="block mb-1">BIC: INGBNL2A</span>
              <span className="block">Fiscaalnummer: 814989433</span>
            </div>
          </div>
          <div className="flex flex-col justify-between items-start md:items-center md:flex-row">
            <div className="flex flex-col md:items-center md:flex-row md:gap-10">
              <a
                href="/algemene-voorwaarden"
                className="no-underline transition-all duration-300 ease-in-out hover:text-primary"
              >
                Algemene voorwaarden
              </a>
              <a
                href="/privacybeleid"
                className="no-underline transition-all duration-300 ease-in-out hover:text-primary"
              >
                Privacybeleid
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
