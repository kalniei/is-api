const nodemailer = require("nodemailer");
require("dotenv").config();

const config = {
  host: "smtp.zenbox.pl",
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
};

module.exports = sendSingleEmail;

async function sendSingleEmail({ from, to, subject, html }) {
  const transporter = nodemailer.createTransport(config);
  await transporter.sendMail({
    from: from,
    to: to,
    subject: subject,
    html: html,
  });
}
