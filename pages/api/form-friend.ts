import { Resend } from "resend";

export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  if (
    !body.name ||
    !body.email ||
    !body.address ||
    !body.zipcode ||
    !body.city
  ) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "Missing data!" });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  resend.emails.send({
    from: "info@cooperatie-museum.nl",
    to: "nationaal-coop-museum@hetnet.nl",
    subject: "Aanmelding Vriend Coöperatie Museum",
    html: `<p>Naam: ${body.name}</p>
           <p>Email: ${body.email}</p> 
           <p>Adres: ${body.address}</p> 
           <p>Postcode: ${body.zipcode}</p>
           <p>Stad: ${body.city}</p>
    `,
  });

  // Sends a HTTP success code
  return res.status(200).json({ data: "Message send!" });
}
