const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const checkIfRowExists = require("../table-helpers/checkIfRowExists");
  const addNewRowToTable = require("../table-helpers/addNewRowToTable");
  const updateRowInTable = require("../table-helpers/updateRowInTable");

  let callbackCount = 0;

  const finishUpdateCallback = (err, result) => {
    callbackCount = callbackCount + 1;
    if (callbackCount === req.body.row_object.length) {
      res.json({
        status: 200,
        message: "Success",
        data: {
          fieldCount: 0,
          affectedRows: callbackCount,
          insertId: 0,
          serverStatus: 2,
          warningCount: 0,
          message: "All good",
          protocol41: true,
          changedRows: callbackCount,
        },
      });
    }
  };

  const ifExistsCallback = (err, result, record) => {
    if (result.length > 0) {
      updateRowInTable(
        res,
        req.body.table_name_to,
        { mail: record.mail },
        record,
        finishUpdateCallback
      );
    } else {
      addNewRowToTable(
        res,
        req.body.table_name_to,
        { ...record },
        finishUpdateCallback
      );
    }
  };

  req.body.row_object.forEach((record, index) => {
    checkIfRowExists(req.body.table_name_to, record, ifExistsCallback);
  });
});

module.exports = router;
