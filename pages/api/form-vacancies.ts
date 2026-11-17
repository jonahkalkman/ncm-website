import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { esc, guardForm } from "../../lib/form-utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = guardForm(req, res);
  if (!body) return;

  if (!body.name || !body.phone || !body.email || !body.job) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "Missing data!" });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: "info@cooperatie-museum.nl",
    to: "nationaal-coop-museum@hetnet.nl",
    subject: "Sollicitatie Coöperatie Museum",
    html: `<p>Naam: ${esc(body.name)}</p>
           <p>Telefoonnummer: ${esc(body.phone)}</p> 
           <p>Email: ${esc(body.email)}</p> 
           <p>Functie: ${esc(body.job)}</p> 
           ${body.motivation ? `<p>Motivatie: ${esc(body.motivation)}</p>` : ""}
          `,
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
}
