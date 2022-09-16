const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const addNewRowToTable = require("../table-helpers/addNewRowToTable");
  addNewRowToTable(
    res,
    "admin_events_table",
    req.body.data_object, false
  );
});

module.exports = router;
