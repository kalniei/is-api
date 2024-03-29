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
const addNewEvent = require("./api/events-manager/addNewEvent");
app.use("/api/addNewEvent", addNewEvent);

const updateEvent = require("./api/events-manager/updateEvent");
app.use("/api/updateEvent", updateEvent);

const deleteEvents = require("./api/events-manager/deleteEvents");
app.use("/api/deleteEvents", deleteEvents);

const getEventTable = require("./api/events-manager/getEventTable");
app.use("/api/getEventTable", getEventTable);

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

const updateBasicWorkshop = require("./api/workshops-manager/updateBasicWorkshop");
app.use("/api/updateBasicWorkshop", updateBasicWorkshop);

const getBasicWorkshopById = require("./api/workshops-manager/getBasicWorkshopById");
app.use("/api/getBasicWorkshopById", getBasicWorkshopById);

const getBasicWorkshops = require("./api/workshops-manager/getBasicWorkshops");
app.use("/api/getBasicWorkshops", getBasicWorkshops);

// --- end of WORKSHOPS MANAGER ---

// --- sha384 CODING ---
const sha384Code = require("./api/payment/sha384Code");
app.use("/api/sha384Code", sha384Code);

const transactionVerification = require("./api/payment/transactionVerification");
app.use("/api/transactionVerification", transactionVerification);

// --- end of sha384 CODING ---

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
