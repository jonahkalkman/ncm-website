import { useState } from "react";
import clsx from "clsx";

export enum GroupType {
  privateGroup,
  companyGroup,
}

interface Props {
  groupType: GroupType;
}

export default function FormGroups({ groupType }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = async (event) => {
    // Initial state of the form
    setLoading(true);
    setHasError(false);

    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    const data = {
      fullname: event.target.fullname.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      visitDate: event.target.visitDate.value,
      company: event.target.company
        ? event.target.company.value
        : "Particulier",
      groupAmount: event.target.groupAmount.value,
      message: event.target.message.value,
    };

    const JSONdata = JSON.stringify(data);

    const endpoint = "/api/form-groups";

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

  const inputStyling = "w-full py-3 px-5 rounded-sm mb-5 md:mb-10";
  const labelStyling = "block mb-2 font-bold";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center flex-col align-middle"
    >
      <div className="flex flex-col md:flex-row w-full align-middle justify-start md:gap-10">
        <div className="w-full md:w-1/2">
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
        <div className="w-full md:w-1/2">
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
      <div className="flex flex-col md:flex-row w-full align-middle justify-start md:gap-10">
        <div className="w-full md:w-1/2">
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
        <div className="w-1/2">
          <label htmlFor="visitDate" className={labelStyling}>
            Gewenste bezoekdatum*
          </label>
          <input
            className={inputStyling}
            type="date"
            id="visitDate"
            name="visitDate"
            required
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full align-middle justify-start md:gap-10">
        {groupType === GroupType.companyGroup ? (
          <div className="w-1/2">
            <label htmlFor="company" className={labelStyling}>
              Bedrijf*
            </label>
            <input
              className={inputStyling}
              type="text"
              id="company"
              name="company"
              required
              placeholder="Bedrijfsnaam"
            />
          </div>
        ) : null}
        <div className="w-1/2">
          <label htmlFor="groupAmount" className={labelStyling}>
            Aantal personen*
          </label>
          <input
            className="w-fit py-3 px-5 rounded-sm mb-5 md:mb-10"
            type="number"
            id="groupAmount"
            name="groupAmount"
            min="10"
            max="100"
            placeholder="10"
            required
          />
        </div>
      </div>
      <div className="w-full">
        <label htmlFor="message" className={labelStyling}>
          Aanleiding voor het bezoek & bijzonderheden of wensen
        </label>
        <textarea
          className="w-full h-[200px] py-3 px-5 rounded-sm mb-5 md:mb-10 min-h-[150px]"
          id="message"
          name="message"
          placeholder="Aanleiding voor het bezoek & bijzonderheden of wensen..."
        />
      </div>
      <button
        disabled={submitted}
        className={clsx({
          "rounded-lg inline-block w-fit font-primary px-[40px] py-[10px] border-2 border-white text-md md:text-[20px] transition-all duration-500 ease-in-out text-white hover:bg-white hover:text-black hover:cursor-pointer":
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
          Er is iets misgegaan! Probeer het opnieuw of neem contact op met het
          museum.
        </p>
      ) : null}
    </form>
  );
}
