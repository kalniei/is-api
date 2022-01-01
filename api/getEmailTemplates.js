const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const getTableModule = require("./helpers/getTable");
  getTableModule.getTable(res, "admin_email_templates");
});

module.exports = router;
