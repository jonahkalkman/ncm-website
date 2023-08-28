import Container from "./container";
import { useState } from "react";

interface Props {}

export default function FormContact({}: Props) {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      first: event.target.first.value,
      last: event.target.last.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      message: event.target.message.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/form-contact";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    // console.log("res", response);
    if (response.ok) {
      setSubmitted(true);
    }
  };

  const inputStyling = "w-full py-3 px-5 rounded-sm mb-5 md:mb-10";
  const labelStyling = "block mb-2 font-bold";

  return (
    <section className="bg-primary py-10 md:py-20">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="w-full order-2 md:order-1 md:w-1/2">
            <h2 className="text-2xl mb-1 md:text-3xl md:mb-5 mt-0">Adres</h2>
            <p>
              Langehaven 84 <br />
              3111CH Schiedam <br />
              Nederland
            </p>
            <h2 className="text-2xl mb-1 md:mb-5 md:text-3xl mt-10">
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
                <g fill="none" fill-rule="evenodd">
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
            <h2 className="text-2xl mb-1 md:text-3xl mt-10 md:mb-5">Mail</h2>
            <a
              href="mailto:info@cooperatie-museum.nl"
              className="group flex gap-3 items-center no-underline transition-all duration-300 ease-in-out hover:text-white"
            >
              <svg
                className="h-[25px] w-[25px]"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
              >
                <g fill="none" fill-rule="nonzero">
                  <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
                  <path
                    className="transition-all duration-300 ease-in-out group-hover:fill-white"
                    fill="#000000FF"
                    d="m2.068 5.482 8.875 8.876a1.5 1.5 0 0 0 2.008.103l.114-.103 8.869-8.87c.029.11.048.222.058.337L22 6v12a2 2 0 0 1-1.85 1.995L20 20H4a2 2 0 0 1-1.995-1.85L2 18V6c0-.12.01-.236.03-.35l.038-.168ZM20 4c.121 0 .24.01.355.031l.17.039-8.52 8.52-8.523-8.522c.11-.03.224-.05.34-.06L4 4h16Z"
                  />
                </g>
              </svg>
              info@cooperatie-museum.nl
            </a>
          </div>
          <div className="w-full md:w-1/2">
            <div className="mb-10">
              <h2 className="mt-0 mb-2">Contact</h2>
              <p className="">
                Stel uw vraaag via het onderstaande formulier en wij nemen
                contact met u op. Een mail sturen naar{" "}
                <a href="mailto:nationaal-coop-museum@hetnet.nl">
                  nationaal-coop-museum@hetnet.nl
                </a>{" "}
                of even langskomen in onze winkel kan natuurlijk ook.
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex justify-center flex-col align-middle"
            >
              <div className="flex flex-col md:flex-row w-full align-middle justify-start md:gap-10">
                <div className="w-full">
                  <label htmlFor="first" className={labelStyling}>
                    Voornaam
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
                    Achternaam
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
              <div className="flex flex-col md:flex-row w-full align-middle justify-start md:gap-10">
                <div className="w-full md:w-1/2">
                  <label htmlFor="email" className={labelStyling}>
                    E-mailadres
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
                <div className="w-full md:w-1/2">
                  <label htmlFor="phone" className={labelStyling}>
                    Telefoonnummer
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
                  Bericht
                </label>
                <textarea
                  className="w-full h-[150px] py-3 px-5 rounded-sm mb-5 md:mb-10 min-h-[150px]"
                  id="message"
                  name="message"
                  required
                  placeholder="Laat een bericht achter..."
                />
              </div>
              <button
                disabled={submitted}
                className={
                  !submitted
                    ? "inline-block w-fit font-primary px-[40px] py-[10px] border-2 border-white text-md md:text-[20px] transition-all duration-500 ease-in-out text-white hover:bg-white hover:text-black hover:cursor-pointer"
                    : "inline-block w-fit font-primary px-[40px] py-[10px] border-2 border-white text-md md:text-[20px] transition-all duration-500 ease-in-out text-white opacity-50 cursor-not-allowed"
                }
                type="submit"
              >
                Verstuur
              </button>
              {submitted ? (
                <p className="block text-bold mt-5">Bericht verzonden!</p>
              ) : null}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
