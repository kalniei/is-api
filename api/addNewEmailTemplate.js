const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const addNewRowModule = require("./helpers/addNewRowToTable");
  addNewRowModule.addNewRowToTable(
    res,
    "admin_email_templates",
    "title, content",
    [req.body.title, req.body.content]
  );
});

module.exports = router;
