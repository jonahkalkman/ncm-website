import { Resend } from "resend";

export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (
    !body.first ||
    !body.last ||
    !body.email ||
    !body.phone ||
    !body.message
  ) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "First or last name not found" });
  }

  const resend = new Resend("re_NW2nt9tj_9ArEv9Dwh4wPuVQBPVexwfHC");

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "jonahkalkman@gmail.com",
    subject: "Aanmelding vrijwilliger Coöperatie Museum",
    html: `<p>Naam: ${body.first} ${body.last}</p><p>Email: ${body.email}</p> <p>Telefoonnummer: ${body.phone}</p> <p>Bericht: ${body.message}</p>`,
  });

  // Found the name.
  // Sends a HTTP success code
  return res.status(200).json({ data: "Message send!" });
}
