const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const updateRowInTable = require("../table-helpers/updateRowInTable");
  updateRowInTable(
    res,
    req.body.table_name,
    { mail: req.body.id },
    req.body.data
  );
});

module.exports = router;
