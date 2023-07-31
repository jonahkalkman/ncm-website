import Image from "next/image";
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
    const endpoint = "/api/form";

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

  const inputStyling = "w-full py-3 px-5 rounded-sm mb-10";
  const labelStyling = "block mb-2 font-bold";

  return (
    <section className="bg-[#EDB300] py-20">
      <Container>
        <div className="flex justify-between gap-20">
          <div>
            <h2>Adres</h2>
            <p>
              Langehaven 84 <br />
              3111CH Schiedam <br />
              Nederland
            </p>
            <h2 className="mt-10">Telefoon</h2>
            <a href="tel:010-4270920">010-4270920</a>
            <h2 className="mt-10">Mail</h2>
            <a href="mailto:info@cooperatie-museum.nl">
              info@cooperatie-museum.nl
            </a>
          </div>
          <div>
            <div className="mb-10">
              <h2 className="mb-2">Neem contact met ons op</h2>
              <p className="">
                Via het onderstaande formulier kan je je aanmelden als
                vrijwilligers bij het Cooperatie Museum.
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex justify-center flex-col align-middle"
            >
              <div className="flex w-full align-middle justify-start gap-10">
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
              <div className="flex w-full align-middle justify-start gap-10">
                <div className="w-1/2">
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
                <div className="w-1/2">
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
                  className="w-full h-[150px] py-3 px-5 rounded-sm mb-10 min-h-[150px]"
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
