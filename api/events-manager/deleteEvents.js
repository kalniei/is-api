const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const deleteRow = require("../table-helpers/deleteRow");
  deleteRow(res, 'admin_events_table', req.body.key_values, 'unique_ID');
});

module.exports = router;
