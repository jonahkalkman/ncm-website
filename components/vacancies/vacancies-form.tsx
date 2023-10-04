import { useState } from "react";

interface Props {}

export default function VacanciesForm({}: Props) {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: event.target.fullname.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      motivation: event.target.motivation.value,
      job: event.target.job.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/form-vacancies";
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
    <section className="mt-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="w-full">
          <div className="mb-5">
            <h3 className="mt-0">Contactformulier</h3>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex justify-center flex-col align-middle"
          >
            <div className="w-full">
              <fieldset className="mb-10">
                <legend className={labelStyling}>
                  Ik ben geïnteresseerd in de volgende vrijwilligersfunctie.
                  Neem vrijblijvend contact met mij op.*
                </legend>
                <div>
                  <div className="w-full mb-2">
                    <input
                      className="mr-2"
                      type="radio"
                      id="vacancyChoice1"
                      name="job"
                      value="Winkelmedewerker"
                      required
                    />
                    <label htmlFor="vacancyChoice1">Winkelmedewerker</label>
                  </div>
                  <div className="w-full mb-2">
                    <input
                      className="mr-2"
                      type="radio"
                      id="vacancyChoice2"
                      name="job"
                      value="Museumrondleider"
                      required
                    />
                    <label htmlFor="vacancyChoice2">Museumrondleider</label>
                  </div>
                  <div className="w-full mb-2">
                    <input
                      className="mr-2"
                      type="radio"
                      id="vacancyChoice3"
                      name="job"
                      value="Medewerker collectiebeheer"
                      required
                    />
                    <label htmlFor="vacancyChoice3">
                      Medewerker collectiebeheer
                    </label>
                  </div>
                  <div className="w-full mb-2">
                    <input
                      className="mr-2"
                      type="radio"
                      id="vacancyChoice4"
                      name="job"
                      value="Bestuurslid Gebouwen & Onderhoud"
                      required
                    />
                    <label htmlFor="vacancyChoice4">
                      Bestuurslid Gebouwen & Onderhoud
                    </label>
                  </div>
                  <div className="w-full">
                    <input
                      className="mr-2"
                      type="radio"
                      id="vacancyChoice5"
                      name="job"
                      value="Bestuurslid Collectiebeheer"
                      required
                    />
                    <label htmlFor="vacancyChoice5">
                      Bestuurslid Collectiebeheer
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
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
                  required
                  placeholder="E-mailadres"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full align-middle justify-start md:gap-10">
              <div className="w-full md:w-1/2">
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
            </div>
            <div className="w-full">
              <label htmlFor="motivation" className={labelStyling}>
                Motivatie
              </label>
              <textarea
                className="w-full h-[150px] py-3 px-5 rounded-sm mb-5 md:mb-10 min-h-[150px]"
                id="motivation"
                name="motivation"
                placeholder="Motivatie en achtergrond..."
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
