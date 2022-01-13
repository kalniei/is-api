const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const deleteRow = require("../table-helpers/deleteRow");
  deleteRow(res, req.body.table_name, req.body.key_values);
});

module.exports = router;
