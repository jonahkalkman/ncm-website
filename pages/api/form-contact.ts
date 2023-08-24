import { Resend } from "resend";

export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  if (
    !body.first ||
    !body.last ||
    !body.email ||
    !body.phone ||
    !body.message
  ) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "Missing data!" });
  }

  const resend = new Resend("re_NW2nt9tj_9ArEv9Dwh4wPuVQBPVexwfHC");

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "jonahkalkman@gmail.com",
    subject: "Contact Coöperatie Museum",
    html: `<p>Naam: ${body.first}</p>
           <p>Achternaam: ${body.last}</p> 
           <p>Email: ${body.email}</p> 
           <p>Telefoonnummer: ${body.phone}</p>
           <p>Bericht: ${body.message}</p>
    `,
  });

  // Sends a HTTP success code
  return res.status(200).json({ data: "Message send!" });
}
