import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;

  if (
    !body.name ||
    !body.address ||
    !body.email ||
    !body.phone ||
    !body.description ||
    !body.delivery
  ) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "Missing data!" });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: "info@cooperatie-museum.nl",
    to: "nationaal-coop-museum@hetnet.nl",
    subject: "Mogelijke uitbreiding museumcollectie Coöperatie Museum",
    html: `<p>Naam: ${body.name}</p>
           <p>Naam: ${body.address}</p>
           <p>Email: ${body.email}</p> 
           <p>Telefoonnummer: ${body.phone}</p> 
           <p>Beschrijving: ${body.description}</p>
           <p>Gewenste bezorging (langsbrengen of ophalen): ${body.delivery}</p> 
          `,
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
}
