const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const getTable = require("../table-helpers/getTable");
  getTable(res, "admin_basic_workshops");
});

module.exports = router;
