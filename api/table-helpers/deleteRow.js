module.exports = deleteRow;

async function deleteRow(res, tableName, keyValues) {
  const returnError = require("../common-helpers/returnError");
  const getDbConnection = require("../common-helpers/getDbConnection");

  const pool = await getDbConnection();

  try {
    pool.getConnection(function (err, connection) {
      if (err) return returnError(res, err);
      const sql = `DELETE FROM ${tableName} WHERE mail IN (?)`;
      const values = keyValues;

      connection.query(sql, [values], function (err, result) {
        connection.release();
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
