import Image from "next/image";
import Container from "./container";
import { useState } from "react";

interface Props {
  image: string;
  secondImage: string;
}

export default function FriendForm({ image, secondImage }: Props) {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      address: event.target.address.value,
      zipcode: event.target.zipcode.value,
      city: event.target.city.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/form-friend";

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

  const inputStyling = "w-full py-3 px-5 rounded-sm md:mb-10";
  const labelStyling = "block mb-2 font-bold";

  return (
    <section className="bg-[#EDB300] py-10 md:py-20">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-20">
          <div className="order-2 md:order-1">
            <div className="mb-10">
              <h2 className="mb-2">Word lid van de Vereniging van Vrienden</h2>
              <p>
                Als lid van de Vereniging van Vrienden ondersteun ik het
                Nationaal Coöperatie Museum met een jaarlijkse bijdrage van €15.
                Meld je aan via het onderstaande formulier:
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex justify-center flex-col align-middle"
            >
              <div className="flex flex-col md:flex-row w-full align-middle justify-start gap-6 mb-6 md:mb-0 md:gap-10">
                <div className="w-full md:w-1/2">
                  <label htmlFor="name" className={labelStyling}>
                    Naam
                  </label>
                  <input
                    className={inputStyling}
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Naam"
                  />
                </div>
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
              </div>
              <div className="flex flex-col md:flex-row w-full align-middle justify-start mb-6 md:mb-0 gap-6 md:gap-10">
                <div className="w-full md:w-1/2">
                  <label htmlFor="address" className={labelStyling}>
                    Adres
                  </label>
                  <input
                    className={inputStyling}
                    type="text"
                    id="address"
                    name="address"
                    required
                    placeholder="Adres"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="zipcode" className={labelStyling}>
                    Postcode
                  </label>
                  <input
                    className={inputStyling}
                    type="tel"
                    id="zipcode"
                    name="zipcode"
                    required
                    placeholder="Postcode"
                  />
                </div>
              </div>
              <div className="flex w-full align-middle justify-start gap-5 md:gap-10">
                <div className="w-full md:w-1/2 md:pr-5">
                  <label htmlFor="city" className={labelStyling}>
                    Stad
                  </label>
                  <input
                    className={inputStyling}
                    type="text"
                    id="city"
                    name="city"
                    required
                    placeholder="Stad"
                  />
                </div>
              </div>
              <button
                disabled={submitted}
                className={
                  !submitted
                    ? "rounded-lg mt-10 inline-block w-fit font-primary px-[40px] py-[10px] border-2 border-white text-md md:text-[20px] transition-all duration-500 ease-in-out text-white hover:bg-white hover:text-black hover:cursor-pointer"
                    : "rounded-lg mt-10 inline-block w-fit font-primary px-[40px] py-[10px] border-2 border-white text-md md:text-[20px] transition-all duration-500 ease-in-out text-white opacity-50 cursor-not-allowed"
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
          <Image
            className="w-full h-[200px] md:w-1/2 md:h-[600px] object-cover"
            src={secondImage}
            alt="Word Vriend van het Nationaal Coöperatie Museum"
            width={1200}
            height={1200}
          />
        </div>
      </Container>
    </section>
  );
}
