import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { esc, guardForm } from "../../lib/form-utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = guardForm(req, res);
  if (!body) return;

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

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: "info@cooperatie-museum.nl",
    to: "nationaal-coop-museum@hetnet.nl",
    subject: "Educatie Coöperatie Museum",
    html: `<p>Naam: ${esc(body.name)}</p>
           <p>Emailadres: ${esc(body.email)}</p> 
           <p>Telefoonnummer: ${esc(body.phone)}</p> 
           <p>Adres: ${esc(body.address)}</p>
           <p>Organisatie: ${esc(body.organisation)}</p>
           <p>Beschrijving: ${esc(body.description)}</p>
          `,
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
}
