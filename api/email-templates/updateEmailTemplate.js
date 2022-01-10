const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const updateRowModule = require("../helpers/updateRowInTable");
  updateRowModule.updateRowInTable(
    res,
    "admin_email_templates",
    { unique_id: req.body.id },
    req.body.data
  );
});

module.exports = router;
