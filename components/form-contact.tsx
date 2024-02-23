import Container from "./container";
import { useState } from "react";
import clsx from "clsx";

export default function FormContact() {
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = async (event) => {
    setLoading(true);
    setHasError(false);
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    const data = {
      first: event.target.first.value,
      last: event.target.last.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      message: event.target.message.value,
    };

    const JSONdata = JSON.stringify(data);

    const endpoint = "/api/form-contact";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);

      if (response.ok) {
        setSubmitted(true);
      } else {
        setHasError(true);
      }
    } catch (error) {
      setHasError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputStyling = "w-full py-3 px-5 rounded-sm mb-5 lg:mb-10";
  const labelStyling = "block mb-2 font-bold";

  return (
    <section className="bg-primary py-10 lg:py-20">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="w-full order-2 lg:order-1 lg:w-1/2">
            <iframe
              className="w-full h-[450px] mb-10"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=Nationaal+Cooperatie+Museum+Schiedam`}
            ></iframe>
            <h2 className="text-2xl mb-1 lg:text-3xl lg:mb-5 mt-0">Adres</h2>
            <p>
              Lange Haven 84 <br />
              3111CH Schiedam <br />
              Nederland
            </p>
            <h2 className="text-2xl mb-1 lg:mb-5 lg:text-3xl mt-10">
              Telefoon
            </h2>
            <a
              href="tel:010-4270920"
              className="group flex gap-3 items-center no-underline transition-all duration-300 ease-in-out hover:text-white"
            >
              <svg
                className="h-[25px] w-[25px]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <g fill="none" fillRule="evenodd">
                  <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
                  <path
                    className="transition-all duration-300 ease-in-out group-hover:fill-white"
                    fill="black"
                    d="M16.552 22.133c-1.44-.053-5.521-.617-9.795-4.89-4.273-4.274-4.836-8.354-4.89-9.795-.08-2.196 1.602-4.329 3.545-5.162a1.47 1.47 0 0 1 1.445.159c1.6 1.166 2.704 2.93 3.652 4.317a1.504 1.504 0 0 1-.256 1.986l-1.951 1.449a.48.48 0 0 0-.142.616c.442.803 1.228 1.999 2.128 2.899.901.9 2.153 1.738 3.012 2.23a.483.483 0 0 0 .644-.162l1.27-1.933a1.503 1.503 0 0 1 2.056-.332c1.407.974 3.049 2.059 4.251 3.598a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.535Z"
                  />
                </g>
              </svg>
              010-4270920
            </a>
            <h2 className="text-2xl mb-1 lg:text-3xl mt-10 lg:mb-5">Mail</h2>
            <a
              href="mailto:nationaal-coop-museum@hetnet.nl"
              className="group flex gap-3 items-center no-underline transition-all duration-300 ease-in-out hover:text-white"
            >
              <svg
                className="h-[25px] w-[25px]"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
              >
                <g fill="none" fillRule="nonzero">
                  <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
                  <path
                    className="transition-all duration-300 ease-in-out group-hover:fill-white"
                    fill="#000000FF"
                    d="m2.068 5.482 8.875 8.876a1.5 1.5 0 0 0 2.008.103l.114-.103 8.869-8.87c.029.11.048.222.058.337L22 6v12a2 2 0 0 1-1.85 1.995L20 20H4a2 2 0 0 1-1.995-1.85L2 18V6c0-.12.01-.236.03-.35l.038-.168ZM20 4c.121 0 .24.01.355.031l.17.039-8.52 8.52-8.523-8.522c.11-.03.224-.05.34-.06L4 4h16Z"
                  />
                </g>
              </svg>
              nationaal-coop-museum@hetnet.nl
            </a>
            <h2 className="text-2xl mb-1 lg:text-3xl mt-10 lg:mb-5">
              Openingstijden
            </h2>
            <ol className="list-none">
              <li>
                <strong>Maandag:</strong> Gesloten
              </li>
              <li>
                <strong>Woensdag:</strong> 13:00–17:00
              </li>
              <li>
                <strong>Donderdag:</strong> 13:00–17:00
              </li>
              <li>
                <strong>Vrijdag:</strong> 13:00–17:00
              </li>
              <li>
                <strong>Zaterdag:</strong> 11:00–17:00
              </li>
              <li>
                <strong>Zondag:</strong> Gesloten
              </li>
            </ol>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="mb-10">
              <h2 className="mt-0 mb-2">Contact</h2>
              <div className="">
                <p>
                  Op deze website zijn diverse contactformulieren opgenomen:
                </p>
                <ul className="pl-10">
                  <li>
                    Voor particulieren, die in het bezit zijn van materiaal als
                    aanvulling op de collectie van het museum, zie{" "}
                    <a href="/collectie">Onze collectie</a>
                  </li>
                  <li>
                    Voor studenten en onderzoeksinstanties, het museum als
                    kenniscentrum van verbruikscoöperaties, zie{" "}
                    <a href="/collectie">Onze collectie</a>
                  </li>
                  <li>
                    Voor rondleidingen voor scholen, zie{" "}
                    <a href="/rondleidingen-scholen">
                      Rondleidingen voor scholen
                    </a>
                    ;
                  </li>
                  <li>
                    Voor rondleidingen voor groepen, zie{" "}
                    <a href="/rondleidingen-groepen">
                      Rondleidingen voor groepen
                    </a>
                  </li>
                  <li>
                    Voor vriend van het museum, zie{" "}
                    <a href="/word-vriend">Word vriend</a>
                  </li>
                  <li>
                    Voor vrijwilligers, zie{" "}
                    <a href="/word-vrijwilliger">Word vrijwilliger</a>
                  </li>
                </ul>
                <p>
                  Voor alle overige vragen: vul onderstaand formulier in en wij
                  nemen contact op. Een mail sturen naar{" "}
                  <a href="mailto:nationaal-coop-museum@hetnet.nl">
                    nationaal-coop-museum@hetnet.nl
                  </a>{" "}
                  of even langskomen in onze winkel kan natuurlijk ook.
                </p>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex justify-center flex-col align-middle"
            >
              <div className="flex flex-col lg:flex-row w-full align-middle justify-start lg:gap-10">
                <div className="w-full">
                  <label htmlFor="first" className={labelStyling}>
                    Voornaam*
                  </label>
                  <input
                    className={inputStyling}
                    type="text"
                    id="first"
                    name="first"
                    required
                    placeholder="Voornaam"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="last" className={labelStyling}>
                    Achternaam*
                  </label>
                  <input
                    className={inputStyling}
                    type="text"
                    id="last"
                    name="last"
                    required
                    placeholder="Achternaam"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row w-full align-middle justify-start lg:gap-10">
                <div className="w-full lg:w-1/2">
                  <label htmlFor="email" className={labelStyling}>
                    E-mailadres*
                  </label>
                  <input
                    className={inputStyling}
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="E-mailadres"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <label htmlFor="phone" className={labelStyling}>
                    Telefoonnummer*
                  </label>
                  <input
                    className={inputStyling}
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Telefoonnummer"
                  />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="message" className={labelStyling}>
                  Bericht*
                </label>
                <textarea
                  className="w-full h-[150px] py-3 px-5 rounded-sm mb-5 lg:mb-10 min-h-[150px]"
                  id="message"
                  name="message"
                  required
                  placeholder="Laat een bericht achter..."
                />
              </div>
              <button
                disabled={submitted}
                className={clsx({
                  "rounded-lg mt-2 inline-block w-fit font-primary px-[40px] py-[10px] border-2 border-white text-md lg:text-[20px] transition-all duration-500 ease-in-out text-white hover:bg-white hover:text-black hover:cursor-pointer":
                    true,
                  "opacity-50 cursor-not-allowed hover:bg-transparent hover:text-white":
                    submitted,
                  "animate-pulse": loading,
                })}
                type="submit"
              >
                Verstuur
              </button>
              {submitted && !loading ? (
                <p className="block text-bold mt-5">
                  Bericht verzonden! U ontvangt binnen twee weken bericht van
                  het museum.
                </p>
              ) : null}
              {hasError && !loading ? (
                <p className="block text-bold mt-5 text-red-600">
                  Er is iets misgegaan! Probeer het opnieuw of neem contact op
                  met het museum.
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
