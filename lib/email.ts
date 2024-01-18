import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmailFromWebSite = async (
  name: string,
  contact_email: string,
  message: string
) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "startups.globallink@gmail.com",
    subject: "Contato a partir do site",
    html: `
    <h2>Você recebeu uma mensagem a partir do site:</h2> <ul>
      <li><strong>Nome:</strong>${name}</li>
      <li><strong>E-mail:</strong>${contact_email}</li>
      <li><strong>Mensagem:</strong>${message}</li>
    </ul>`,
  });
};
