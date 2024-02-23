import { useState } from "react";
import clsx from "clsx";

export default function CollectionForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = async (event) => {
    setLoading(true);
    setHasError(false);

    event.preventDefault();

    const data = {
      name: event.target.fullname.value,
      address: event.target.address.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      description: event.target.description.value,
      delivery: event.target.delivery.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/form-collection-expand";
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
    } catch {
      setHasError(true);
      console.log("Failed to submit form");
    } finally {
      setLoading(false);
    }
  };

  const inputStyling = "w-full py-3 px-5 rounded-sm mb-5 md:mb-10";
  const labelStyling = "block mb-2 font-bold";

  return (
    <section className="bg-primary p-10 rounded-md">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="w-full">
          <div className="mb-5">
            <h3 className="mt-0">
              Mijn mogelijke uitbreiding voor de museumcollectie
            </h3>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex justify-center flex-col align-middle"
          >
            <div className="flex flex-col md:flex-row w-full align-middle justify-start md:gap-10">
              <div className="w-full">
                <label htmlFor="fullname" className={labelStyling}>
                  Volledige naam*
                </label>
                <input
                  className={inputStyling}
                  type="text"
                  id="fullname"
                  name="fullname"
                  required
                  placeholder="Volledige naam"
                />
              </div>

              <div className="w-full">
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
            <div className="flex flex-col md:flex-row w-full align-middle justify-start md:gap-10">
              <div className="w-full">
                <label htmlFor="phone" className={labelStyling}>
                  Telefoonnummer*
                </label>
                <input
                  className={inputStyling}
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Telefoonnummer"
                  required
                />
              </div>
              <div className="w-full">
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
            </div>
            <div className="w-full">
              <label htmlFor="description" className={labelStyling}>
                Omschrijving aan te bieden artikelen*
              </label>
              <textarea
                className="w-full h-[150px] py-3 px-5 rounded-sm mb-5 md:mb-10 min-h-[150px]"
                id="description"
                name="description"
                placeholder="Omschrijving aan te bieden artikelen..."
                required
              />
            </div>
            <div className="w-full">
              <fieldset className="mb-10">
                <legend className={labelStyling}>Selecteer een optie*</legend>
                <div>
                  <div className="w-full mb-2">
                    <input
                      className="mr-2"
                      type="radio"
                      id="collectionChoice1"
                      name="delivery"
                      value="langsbrengen"
                      required
                    />
                    <label htmlFor="collectionChoice1">
                      Ik maak graag een afspraak om deze artikelen even langs te
                      brengen bij het museum.
                    </label>
                  </div>
                  <div className="w-full">
                    <input
                      className="mr-2"
                      type="radio"
                      id="collectionChoice2"
                      name="delivery"
                      value="ophalen"
                      required
                    />
                    <label htmlFor="collectionChoice2">
                      Ik maak graag een afspraak om deze artikelen bij mij thuis
                      op te halen.
                    </label>
                  </div>
                </div>
              </fieldset>
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
                Bericht verzonden! U ontvangt binnen twee weken bericht van het
                museum.
              </p>
            ) : null}
            {hasError && !loading ? (
              <p className="block text-bold mt-5 text-red-600">
                Er is iets misgegaan! Probeer het opnieuw of neem contact op met
                het museum.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
