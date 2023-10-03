import { useState } from "react";

interface Props {}

export default function CollectionFormEducation({}: Props) {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    const data = {
      name: event.target.fullname.value,
      address: event.target.address.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      organisation: event.target.organisation.value,
      description: event.target.description.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/form-collection-education";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    if (response.ok) {
      setSubmitted(true);
    }
  };

  const inputStyling = "w-full py-3 px-5 rounded-sm mb-5 md:mb-10";
  const labelStyling = "block mb-2 font-bold";

  return (
    <section className="bg-primary p-10 rounded-md">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="w-full">
          <div className="mb-5">
            <h3 className="mt-0">Interesse in het museum als kenniscentrum</h3>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex justify-center flex-col align-middle"
          >
            <div className="flex flex-col md:flex-row w-full align-middle justify-start md:gap-10">
              <div className="w-full">
                <label htmlFor="fullname" className={labelStyling}>
                  Naam*
                </label>
                <input
                  className={inputStyling}
                  type="text"
                  id="fullname"
                  name="fullname"
                  required
                  placeholder="Naam"
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
                  placeholder="E-mailadres"
                  required
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
            <div className="w-full md:w-1/2 md:pr-5">
              <label htmlFor="organisation" className={labelStyling}>
                Organisatie*
              </label>
              <input
                className={inputStyling}
                type="text"
                id="organisation"
                name="organisation"
                required
                placeholder="Organisatie"
              />
            </div>
            <div className="w-full">
              <label htmlFor="description" className={labelStyling}>
                In welke informatie bent u geïnteresseerd?*
              </label>
              <textarea
                className="w-full h-[150px] py-3 px-5 rounded-sm mb-5 md:mb-10 min-h-[150px]"
                id="description"
                name="description"
                placeholder="In welke informatie bent u geïnteresseerd..."
                required
              />
            </div>
            <button
              disabled={submitted}
              className={
                !submitted
                  ? "rounded-lg inline-block w-fit font-primary px-[40px] py-[10px] border-2 border-white text-md md:text-[20px] transition-all duration-500 ease-in-out text-white hover:bg-white hover:text-black hover:cursor-pointer"
                  : "rounded-lg inline-block w-fit font-primary px-[40px] py-[10px] border-2 border-white text-md md:text-[20px] transition-all duration-500 ease-in-out text-white opacity-50 cursor-not-allowed"
              }
              type="submit"
            >
              Verstuur
            </button>
            {submitted ? (
              <p className="block text-bold mt-5">
                Bericht verzonden! U ontvangt binnen twee weken bericht van het
                museum.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
