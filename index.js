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

const product = require("./api/product");
app.use("/api/product", product);

// EMAIL MANAGER
const addNewEmailTemplate = require("./api/addNewEmailTemplate");
app.use("/api/addNewEmailTemplate", addNewEmailTemplate);

const updateEmailTemplate = require("./api/updateEmailTemplate");
app.use("/api/updateEmailTemplate", updateEmailTemplate);

const getEmailTemplates = require("./api/getEmailTemplates");
app.use("/api/getEmailTemplates", getEmailTemplates);
// end of EMAIL MANAGER

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
