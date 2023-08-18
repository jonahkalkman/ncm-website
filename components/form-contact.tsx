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
        <div className="flex justify-between gap-10">
          <div className="w-1/2">
            <h2 className="text-3xl mb-5 mt-0">Adres</h2>
            <p>
              Langehaven 84 <br />
              3111CH Schiedam <br />
              Nederland
            </p>
            <h2 className="mb-5 text-3xl mt-10">Telefoon</h2>
            <a
              href="tel:010-4270920"
              className="group flex gap-3 items-center no-underline transition-all duration-300 ease-in-out hover:text-white"
            >
              <svg
                className="h-[25px] w-[25px]"
                viewBox="0 0 89 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-all duration-300 ease-in-out group-hover:fill-white"
                  d="M14.5313 1C12.8178 0.944682 11.1376 1.67583 9.28129 2.84375C9.15662 2.92445 9.04133 3.01878 8.93754 3.125C-0.257901 12.3205 -1.66993 23.8797 1.68754 35.0625C5.04501 46.2453 12.9493 57.2619 22.3438 66.6563C31.7383 76.0507 42.7547 83.9239 53.9375 87.2813C65.1204 90.6388 76.6796 89.2268 85.875 80.0313C85.9813 79.9275 86.0756 79.8122 86.1563 79.6875C87.491 77.566 88.2699 75.6877 87.9375 73.7188C87.6052 71.7498 86.3513 70.32 84.7813 68.75L72.0313 56C71.2542 55.2229 69.985 54.8541 69 55C68.0151 55.1459 67.2446 55.5973 66.5313 56.0938C65.1047 57.0866 63.8215 58.4584 62.5 59.8125C61.1786 61.1666 59.8556 62.4802 58.8125 63.2188C58.291 63.588 57.8287 63.814 57.5938 63.875C57.3589 63.936 57.4062 63.892 57.375 63.875C52.6378 61.3509 45.5949 55.5625 39.4063 49.5313C33.3925 43.3545 27.6113 36.3184 25.0938 31.5938C25.0772 31.5626 25.064 31.6099 25.125 31.375C25.1861 31.1401 25.3808 30.709 25.75 30.1875C26.4886 29.1445 27.8335 27.8215 29.1875 26.5C30.5416 25.1785 31.9135 23.8641 32.9063 22.4375C33.4027 21.7242 33.8229 20.985 33.9688 20C34.1147 19.0151 33.7771 17.7458 33 16.9688L20.25 4.21875C18.68 2.64874 17.2502 1.39484 15.2813 1.0625C15.0352 1.02096 14.7761 1.00791 14.5313 1ZM14.1563 5C14.334 4.9766 14.496 4.97822 14.625 5C15.1656 5.0912 15.991 5.64725 17.4063 7.0625L29.9375 19.5625C29.9003 19.662 29.8642 19.8127 29.625 20.1563C29.0171 21.0299 27.734 22.2988 26.375 23.625C25.0161 24.9513 23.577 26.3541 22.5 27.875C21.9616 28.6354 21.4955 29.4298 21.25 30.375C21.0045 31.3202 21.0332 32.4755 21.5625 33.4688C24.4849 38.9534 30.4056 46.0251 36.5938 52.375C36.6041 52.3855 36.6145 52.396 36.625 52.4063C42.975 58.5946 50.0154 64.484 55.5 67.4063C56.4933 67.9357 57.6798 67.9642 58.625 67.7188C59.5703 67.4733 60.3646 67.0385 61.125 66.5C62.6459 65.4231 64.0175 63.9527 65.3438 62.5938C66.67 61.2348 67.9702 59.983 68.8438 59.375C69.1874 59.1359 69.338 59.0997 69.4375 59.0625L81.9375 71.5625C83.3528 72.9778 83.8775 73.8344 83.9688 74.375C84.0551 74.8863 83.879 75.7398 82.9063 77.3438C74.7476 85.4137 65.2499 86.518 55.0938 83.4688C44.8836 80.4033 34.2303 72.8863 25.1563 63.8125C16.0824 54.7386 8.59674 44.1165 5.53129 33.9063C2.4883 23.7711 3.59996 14.2726 11.625 6.125C12.8515 5.37642 13.6232 5.07023 14.1563 5Z"
                  fill="black"
                />
              </svg>
              010-4270920
            </a>
            <h2 className="text-3xl mt-10 mb-5">Mail</h2>
            <a
              href="mailto:info@cooperatie-museum.nl"
              className="group flex gap-3 items-center no-underline transition-all duration-300 ease-in-out hover:text-white"
            >
              <svg
                className="h-[25px] w-[25px]"
                viewBox="0 0 88 60"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-all duration-300 ease-in-out group-hover:fill-white"
                  d="M4.6875 0C2.13226 0 0 2.10101 0 4.65625V55.3125C0 57.8677 2.13226 60 4.6875 60H83.3125C85.8677 60 88 57.8677 88 55.3125V4.65625C88 2.10101 85.8677 0 83.3125 0H4.6875ZM7.65625 4H80.3438L44 32.3438L7.65625 4ZM4 6.1875L32.2812 28.25L4 53.4062V6.1875ZM84 6.1875V53.4062L55.7188 28.25L84 6.1875ZM35.5 30.75L42.7812 36.4375C43.1308 36.7061 43.5592 36.8517 44 36.8517C44.4408 36.8517 44.8692 36.7061 45.2188 36.4375L52.5 30.75L80.9062 56H7.09375L35.5 30.75Z"
                  fill="black"
                />
              </svg>
              info@cooperatie-museum.nl
            </a>
          </div>
          <div className="w-1/2">
            <div className="mb-10">
              <h2 className="mb-2">Contact</h2>
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
