const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const getTable = require("../table-helpers/getTable");
  getTable(res, req.body.table_name);
});

module.exports = router;
