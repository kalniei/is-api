const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const checkIfRowExists = require("../table-helpers/checkIfRowExists");
  const addNewRowToTable = require("../table-helpers/addNewRowToTable");
  const updateRowInTable = require("../table-helpers/updateRowInTable");
  const deleteRow = require("../table-helpers/deleteRow");

  const finishUpdatecallback = (err, result) => {
    deleteRow(res, req.body.table_name_from, [req.body.row_object.mail]);
  };

  const ifExistsCallback = (err, result) => {
    if (result.length > 0) {
      updateRowInTable(
        false,
        req.body.table_name_to,
        { id: req.body.row_object.id },
        { level: req.body.row_object.level },
        finishUpdatecallback
      );
    } else {
      addNewRowToTable(
        false,
        req.body.table_name_to,
        req.body.row_object,
        finishUpdatecallback
      );
    }
  };

  checkIfRowExists(
    req.body.table_name_to,
    req.body.row_object,
    ifExistsCallback
  );
});

module.exports = router;
