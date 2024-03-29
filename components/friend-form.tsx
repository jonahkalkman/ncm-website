import Image from "next/image";
import Container from "./container";
import { useState } from "react";
import clsx from "clsx";

interface Props {
  image: string;
  secondImage: string;
}

export default function FriendForm({ image, secondImage }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = async (event) => {
    // Initial state of the form
    setLoading(true);
    setHasError(false);

    event.preventDefault();

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      address: event.target.address.value,
      zipcode: event.target.zipcode.value,
      city: event.target.city.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/form-friend";

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
      console.error("Error submitting the form: ", error);
    } finally {
      setLoading(false);
    }
  };

  const inputStyling = "w-full py-3 px-5 rounded-sm lg:mb-10";
  const labelStyling = "block mb-2 font-bold";

  return (
    <section className="bg-[#EDB300] py-10 lg:py-20">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-20">
          <div className="order-2 lg:order-1">
            <div className="mb-10">
              <h2 className="mb-2 mt-0">
                Word lid van de Vereniging van Vrienden
              </h2>
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
              <div className="flex flex-col lg:flex-row w-full align-middle justify-start gap-6 mb-6 lg:mb-0 lg:gap-10">
                <div className="w-full lg:w-1/2">
                  <label htmlFor="name" className={labelStyling}>
                    Volledige naam*
                  </label>
                  <input
                    className={inputStyling}
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Volledige naam"
                  />
                </div>
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
              </div>
              <div className="flex flex-col lg:flex-row w-full align-middle justify-start mb-6 lg:mb-0 gap-6 lg:gap-10">
                <div className="w-full lg:w-1/2">
                  <label htmlFor="address" className={labelStyling}>
                    Adres*
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
                <div className="w-full lg:w-1/2">
                  <label htmlFor="zipcode" className={labelStyling}>
                    Postcode*
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
              <div className="flex w-full align-middle justify-start gap-5 lg:gap-10">
                <div className="w-full lg:w-1/2 lg:pr-5">
                  <label htmlFor="city" className={labelStyling}>
                    Stad*
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
          <Image
            className="block w-full h-[200px] lg:w-1/2 lg:h-[600px] object-cover rounded-md"
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
