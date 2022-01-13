module.exports = deleteRow;

async function deleteRow(res, tableName, keyValues) {
  const returnError = require("../common-helpers/returnError");
  const getDbConnection = require("../common-helpers/getDbConnection");

  const con = await getDbConnection();

  try {
    con.connect(function (err) {
      if (err) return returnError(res, err);
      const sql = `DELETE FROM ${tableName} WHERE mail IN (?)`;
      const values = keyValues;

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
