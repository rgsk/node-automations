import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";
const transporter = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  })
);
const sendEmailWithGmailSmtp = async ({ to, subject, html }: any) => {
  const info = await transporter.sendMail({
    to: to,
    subject: subject,
    html: html,
  });
  return info;
};
export default sendEmailWithGmailSmtp;
