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
              <h3 className="text-2xl mb-4">Adres</h3>
              <span className="block mb-1">Langehaven 84</span>
              <span className="block mb-1">3111CH Schiedam</span>
              <span className="block">Nederland</span>
            </div>
            <div className="flex flex-col items-center mb-10 md:items-start md:mb-0">
              <h3 className="text-2xl mb-4">Contact</h3>
              <a
                className="group mb-4 flex justify-start items-center no-underline transition-all duration-300 ease-in-out hover:text-primary hover:translate-x-3"
                href="tel:+010-4270920"
              >
                <span className="h-[25px] w-[25px] inline-block mr-3">
                  <svg
                    className="h-[25px] w-[25px]"
                    viewBox="0 0 89 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-all duration-300 ease-in-out group-hover:fill-primary"
                      d="M14.5313 1C12.8178 0.944682 11.1376 1.67583 9.28129 2.84375C9.15662 2.92445 9.04133 3.01878 8.93754 3.125C-0.257901 12.3205 -1.66993 23.8797 1.68754 35.0625C5.04501 46.2453 12.9493 57.2619 22.3438 66.6563C31.7383 76.0507 42.7547 83.9239 53.9375 87.2813C65.1204 90.6388 76.6796 89.2268 85.875 80.0313C85.9813 79.9275 86.0756 79.8122 86.1563 79.6875C87.491 77.566 88.2699 75.6877 87.9375 73.7188C87.6052 71.7498 86.3513 70.32 84.7813 68.75L72.0313 56C71.2542 55.2229 69.985 54.8541 69 55C68.0151 55.1459 67.2446 55.5973 66.5313 56.0938C65.1047 57.0866 63.8215 58.4584 62.5 59.8125C61.1786 61.1666 59.8556 62.4802 58.8125 63.2188C58.291 63.588 57.8287 63.814 57.5938 63.875C57.3589 63.936 57.4062 63.892 57.375 63.875C52.6378 61.3509 45.5949 55.5625 39.4063 49.5313C33.3925 43.3545 27.6113 36.3184 25.0938 31.5938C25.0772 31.5626 25.064 31.6099 25.125 31.375C25.1861 31.1401 25.3808 30.709 25.75 30.1875C26.4886 29.1445 27.8335 27.8215 29.1875 26.5C30.5416 25.1785 31.9135 23.8641 32.9063 22.4375C33.4027 21.7242 33.8229 20.985 33.9688 20C34.1147 19.0151 33.7771 17.7458 33 16.9688L20.25 4.21875C18.68 2.64874 17.2502 1.39484 15.2813 1.0625C15.0352 1.02096 14.7761 1.00791 14.5313 1ZM14.1563 5C14.334 4.9766 14.496 4.97822 14.625 5C15.1656 5.0912 15.991 5.64725 17.4063 7.0625L29.9375 19.5625C29.9003 19.662 29.8642 19.8127 29.625 20.1563C29.0171 21.0299 27.734 22.2988 26.375 23.625C25.0161 24.9513 23.577 26.3541 22.5 27.875C21.9616 28.6354 21.4955 29.4298 21.25 30.375C21.0045 31.3202 21.0332 32.4755 21.5625 33.4688C24.4849 38.9534 30.4056 46.0251 36.5938 52.375C36.6041 52.3855 36.6145 52.396 36.625 52.4063C42.975 58.5946 50.0154 64.484 55.5 67.4063C56.4933 67.9357 57.6798 67.9642 58.625 67.7188C59.5703 67.4733 60.3646 67.0385 61.125 66.5C62.6459 65.4231 64.0175 63.9527 65.3438 62.5938C66.67 61.2348 67.9702 59.983 68.8438 59.375C69.1874 59.1359 69.338 59.0997 69.4375 59.0625L81.9375 71.5625C83.3528 72.9778 83.8775 73.8344 83.9688 74.375C84.0551 74.8863 83.879 75.7398 82.9063 77.3438C74.7476 85.4137 65.2499 86.518 55.0938 83.4688C44.8836 80.4033 34.2303 72.8863 25.1563 63.8125C16.0824 54.7386 8.59674 44.1165 5.53129 33.9063C2.4883 23.7711 3.59996 14.2726 11.625 6.125C12.8515 5.37642 13.6232 5.07023 14.1563 5Z"
                      fill="black"
                    />
                  </svg>
                </span>
                010-4270920
              </a>
              <a
                className="group flex justify-start items-center no-underline transition-all duration-300 ease-in-out hover:text-primary hover:translate-x-3"
                href="mailto:info@cooperatie-museum.nl"
              >
                <span className="h-[25px] w-[25px] inline-block mr-3">
                  <svg
                    className="h-[25px] w-[25px]"
                    viewBox="0 0 88 60"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-all duration-300 ease-in-out group-hover:fill-primary"
                      d="M4.6875 0C2.13226 0 0 2.10101 0 4.65625V55.3125C0 57.8677 2.13226 60 4.6875 60H83.3125C85.8677 60 88 57.8677 88 55.3125V4.65625C88 2.10101 85.8677 0 83.3125 0H4.6875ZM7.65625 4H80.3438L44 32.3438L7.65625 4ZM4 6.1875L32.2812 28.25L4 53.4062V6.1875ZM84 6.1875V53.4062L55.7188 28.25L84 6.1875ZM35.5 30.75L42.7812 36.4375C43.1308 36.7061 43.5592 36.8517 44 36.8517C44.4408 36.8517 44.8692 36.7061 45.2188 36.4375L52.5 30.75L80.9062 56H7.09375L35.5 30.75Z"
                      fill="black"
                    />
                  </svg>
                </span>
                info@cooperatie-museum.nl
              </a>
            </div>
            <div className="flex flex-col items-center mb-10 md:items-start md:mb-0">
              <h3 className="text-2xl mb-4">Steun de coöperatie</h3>
              <span className="block mb-1">IB: NL98 INGB 0002 1825 02</span>
              <span className="block mb-1">BIC: INGBNL2A</span>
              <span className="block">Fiscaalnummer: 814989433</span>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center md:flex-row">
            <span>© 2023 Nationaal Coöperatie Museum</span>
            <div className="flex flex-col items-center md:flex-row md:gap-10">
              <a
                href=""
                className="no-underline transition-all duration-300 ease-in-out hover:text-primary"
              >
                Algemene voorwaarden
              </a>
              <a
                href=""
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
