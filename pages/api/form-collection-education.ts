import { Resend } from "resend";

export default function handler(req, res) {
  const body = req.body;

  if (
    !body.name ||
    !body.email ||
    !body.phone ||
    !body.address ||
    !body.organisation ||
    !body.description
  ) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "Missing data!" });
  }

  const resend = new Resend("re_NW2nt9tj_9ArEv9Dwh4wPuVQBPVexwfHC");

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "jonahkalkman@gmail.com",
    subject: "Mogelijke uitbreiding museumcollectie Coöperatie Museum",
    html: `<p>Naam: ${body.name}</p>
           <p>Emailadres: ${body.email}</p> 
           <p>Telefoonnummer: ${body.phone}</p> 
           <p>Adres: ${body.address}</p>
           <p>Organisatie: ${body.organisation}</p>
           <p>Beschrijving: ${body.description}</p>
          `,
  });

  // Sends a HTTP success code
  return res.status(200).json({ data: "Message send!" });
}
