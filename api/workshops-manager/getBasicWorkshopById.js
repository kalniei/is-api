const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const getRecordFromTable = require("../table-helpers/getRecordFromTable");
  getRecordFromTable(res, "admin_basic_workshops", 'path', req.path);
});

module.exports = router;
