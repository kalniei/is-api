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

// --- EVENTS MANAGER ---
// const addNewEvent = require("./api/events-manager/addNewEvent");
// app.use("/api/addNewEvent", addNewEvent);

const updateEvent = require("./api/events-manager/updateEvent");
app.use("/api/updateEvent", updateEvent);

// end of EVENTS MANAGER ---

// --- EMAIL MANAGER ---
const addNewEmailTemplate = require("./api/email-templates/addNewEmailTemplate");
app.use("/api/addNewEmailTemplate", addNewEmailTemplate);

const updateEmailTemplate = require("./api/email-templates/updateEmailTemplate");
app.use("/api/updateEmailTemplate", updateEmailTemplate);

const getEmailTemplates = require("./api/email-templates/getEmailTemplates");
app.use("/api/getEmailTemplates", getEmailTemplates);
// end of EMAIL MANAGER ---

// --- EMAIL SENDER
const sendEmail = require("./api/email-sender/sendEmail");
app.use("/api/sendEmail", sendEmail);

// --- end of EMAIL SENDER ---

//--- TABLES MANAGER---
const getAllManagableTables = require("./api/tables-manager/getAllManagableTables");
app.use("/api/getAllManagableTables", getAllManagableTables);

const getSingleTable = require("./api/tables-manager/getSingleTable");
app.use("/api/getSingleTable", getSingleTable);

const deleteRowsFromTable = require("./api/tables-manager/deleteRowsFromTable");
app.use("/api/deleteRowsFromTable", deleteRowsFromTable);

const transferToGlobalWorkshopsTable = require("./api/tables-manager/transferToGlobalWorkshopsTable");
app.use("/api/transferToGlobalWorkshopsTable", transferToGlobalWorkshopsTable);

const transferAndDeleteToGlobalWorkshopsTable = require("./api/tables-manager/transferAndDeleteToGlobalWorkshopsTable");
app.use(
  "/api/transferAndDeleteToGlobalWorkshopsTable",
  transferAndDeleteToGlobalWorkshopsTable
);

const updateWorkshopRow = require("./api/tables-manager/updateWorkshopRow");
app.use("/api/updateWorkshopRow", updateWorkshopRow);

const addNewUserToTable = require("./api/tables-manager/addNewUserToTable");
app.use("/api/addNewUserToTable", addNewUserToTable);

// --- end of TABLES MANAGER ---

// --- WORKSHOPS MANAGER
const addBasicWorkshop = require("./api/workshops-manager/addBasicWorkshop");
app.use("/api/addBasicWorkshop", addBasicWorkshop);

// --- end of WORKSHOPS MANAGER ---

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
