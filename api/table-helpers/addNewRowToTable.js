module.exports = addNewRowToTable;

async function addNewRowToTable(res, tableName, tableColumnsStr, rowValuesStr) {
  const returnError = require("../common-helpers/returnError");
  const getDbConnection = require("../common-helpers/getDbConnection");

  const con = await getDbConnection();

  try {
    con.connect(function (err) {
      if (err) return returnError(res, err);

      const sql = `INSERT INTO ${tableName} (${tableColumnsStr}) VALUES ?`;
      const values = [rowValuesStr];

      con.query(sql, [values], function (err, result) {
        if (err) return returnError(res, err);
        res.json({
          status: 200,
          message: "Success",
          data: result,
        });
      });
    });
  } catch (error) {
    return returnError(res, error);
  }
}
