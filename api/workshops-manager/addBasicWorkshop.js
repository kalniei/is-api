const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const addNewRowToTable = require("../table-helpers/addNewRowToTable");
  const createNewUserWorkshopTable = require("../table-helpers/createNewUserWorkshopTable");

  const finishUpdateCallback = (err, result) => {
    createNewUserWorkshopTable(res, req.body.db_table_name);
  };

  addNewRowToTable(
    res,
    "admin_basic_workshops",
    req.body,
    finishUpdateCallback
  );
});

module.exports = router;
