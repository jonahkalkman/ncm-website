import { Resend } from "resend";

export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  if (!body.name || !body.phone || !body.email || !body.job) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "Missing data!" });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  resend.emails.send({
    from: "info@cooperatie-museum.nl",
    to: "nationaal-coop-museum@hetnet.nl",
    subject: "Sollicitatie Coöperatie Museum",
    html: `<p>Naam: ${body.name}</p>
           <p>Telefoonnummer: ${body.phone}</p> 
           <p>Email: ${body.email}</p> 
           <p>Functie: ${body.job}</p> 
           ${body.motivation ? `<p>Motivatie: ${body.motivation}</p>` : ""}
          `,
  });

  // Sends a HTTP success code
  return res.status(200).json({ data: "Message send!" });
}
