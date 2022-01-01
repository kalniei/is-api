const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log(req);
  const getTableModule = require("./helpers/getTable");
  getTableModule.getTable(res, "admin_email_templates");
});

module.exports = router;
