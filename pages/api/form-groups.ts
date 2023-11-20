import { Resend } from "resend";

export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  if (
    !body.fullname ||
    !body.phone ||
    !body.email ||
    !body.visitDate ||
    !body.company ||
    !body.groupAmount ||
    !body.message
  ) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "Missing data!" });
  }

  const resend = new Resend("re_NW2nt9tj_9ArEv9Dwh4wPuVQBPVexwfHC");

  resend.emails.send({
    from: "info@cooperatie-museum.nl",
    to: "nationaal-coop-museum@hetnet.nl",
    subject: "Aanmelding Groepsbezoek Coöperatie Museum",
    html: `<p>Naam: ${body.fullname}</p>
           <p>Telefoonnummer: ${body.phone}</p> 
           <p>Email: ${body.email}</p> 
           <p>Bedrijf: ${
             body.company !== "" ? body.company : "Particulier"
           }</p> 
           <p>Gewenste bezoekdatum: ${body.visitDate}</p> 
           <p>Aantal personen: ${body.groupAmount}</p> 
           <p>Bericht: ${body.message}</p>
          `,
  });

  // Sends a HTTP success code
  return res.status(200).json({ data: "Message send!" });
}
