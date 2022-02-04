const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const checkIfRowExists = require("../table-helpers/checkIfRowExists");
  const addNewRowToTable = require("../table-helpers/addNewRowToTable");
  const updateRowInTable = require("../table-helpers/updateRowInTable");
  const deleteRow = require("../table-helpers/deleteRow");

  let callbackCount = 0;

  const finishUpdatecallback = (err, result) => {
    callbackCount = callbackCount + 1;
    if (callbackCount === req.body.row_object.length) {
      const mailArr = req.body.row_object.map((x) => x.mail);
      deleteRow(res, req.body.table_name_from, mailArr);
    }
  };

  const ifExistsCallback = (err, result, record) => {
    if (result.length > 0) {
      updateRowInTable(
        res,
        req.body.table_name_to,
        { mail: record.mail },
        record,
        finishUpdatecallback
      );
    } else {
      addNewRowToTable(
        res,
        req.body.table_name_to,
        { ...record },
        finishUpdatecallback
      );
    }
  };

  req.body.row_object.forEach((record, index) => {
    checkIfRowExists(req.body.table_name_to, record, ifExistsCallback);
  });
});

module.exports = router;
