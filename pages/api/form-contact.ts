import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: "info@cooperatie-museum.nl",
    to: "nationaal-coop-museum@hetnet.nl",
    subject: "Contact Coöperatie Museum",
    html: `<p>Naam: ${body.first}</p>
           <p>Achternaam: ${body.last}</p> 
           <p>Email: ${body.email}</p> 
           <p>Telefoonnummer: ${body.phone}</p>
           <p>Bericht: ${body.message}</p>
    `,
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
}
