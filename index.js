const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json({ extended: false }));

// EMAIL MANAGER
const addNewEmailTemplate = require("./api/email-templates/addNewEmailTemplate");
app.use("/api/addNewEmailTemplate", addNewEmailTemplate);

const updateEmailTemplate = require("./api/email-templates/updateEmailTemplate");
app.use("/api/updateEmailTemplate", updateEmailTemplate);

const getEmailTemplates = require("./api/email-templates/getEmailTemplates");
app.use("/api/getEmailTemplates", getEmailTemplates);
// end of EMAIL MANAGER

// EMAIL SENDER
const sendEmail = require("./api/email-sender/sendEmail");
app.use("/api/sendEmail", sendEmail);

// end of EMAIL SENDER

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
