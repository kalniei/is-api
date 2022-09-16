const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const updateRowInTable = require("../table-helpers/updateRowInTable");
  updateRowInTable(
    res,
    "admin_events_table",
    { unique_ID: req.body.id },
    req.body.data,
    false
  );
});

module.exports = router;
