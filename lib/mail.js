import nodemailer from "nodemailer";

export const sendMail = async (name, email, message) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject: `New Message from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Message: ${message}
`,
  });
};
