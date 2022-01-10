const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const getTable = require("../helpers/getTable");
  getTable(res, "admin_email_templates");
});

module.exports = router;
