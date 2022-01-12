const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const getALLTables = require("../table-helpers/getAllTables");
  getALLTables(res);
});

module.exports = router;
