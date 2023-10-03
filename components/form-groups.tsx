import { type } from "os";
import { useState } from "react";

export enum GroupType {
  privateGroup,
  companyGroup,
}

interface Props {
  groupType: GroupType;
}

export default function FormGroups({ groupType }: Props) {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      fullname: event.target.fullname.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      visitDate: event.target.visitDate.value,
      company: event.target.company ? event.target.company.value : "Particulier",
      groupAmount: event.target.groupAmount.value,
      message: event.target.message.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    const endpoint = "/api/form-groups";

    // Form the request for sending data to the server.
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    if (response.ok) {
      setSubmitted(true);
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
            Naam
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
        <div className="w-1/2">
          <label htmlFor="visitDate" className={labelStyling}>
            Gewenste bezoekdatum
          </label>
          <input
            className={inputStyling}
            type="date"
            id="visitDate"
            name="visitDate"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full align-middle justify-start md:gap-10">
        {groupType === GroupType.companyGroup ? (
          <div className="w-1/2">
            <label htmlFor="company" className={labelStyling}>
              Bedrijf
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
            Aantal personen
          </label>
          <input
            className="w-fit py-3 px-5 rounded-sm mb-5 md:mb-10"
            type="number"
            id="groupAmount"
            name="groupAmount"
            min="10"
            max="100"
            placeholder="10"
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
          required
          placeholder="Aanleiding voor het bezoek & bijzonderheden of wensen..."
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
        <p className="block text-bold mt-5">Bericht verzonden!</p>
      ) : null}
    </form>
  );
}
