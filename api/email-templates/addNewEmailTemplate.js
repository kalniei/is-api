const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const addNewRowToTable = require("../table-helpers/addNewRowToTable");
  addNewRowToTable(
    res,
    "admin_email_templates",
    {
      title: req.body.title,
      content: req.body.content,
    },
    false
  );
});

module.exports = router;
