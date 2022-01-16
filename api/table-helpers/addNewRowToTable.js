module.exports = addNewRowToTable;

async function addNewRowToTable(res, tableName, rowObject, callback) {
  const returnError = require("../common-helpers/returnError");
  const getDbConnection = require("../common-helpers/getDbConnection");

  const pool = await getDbConnection();

  try {
    pool.getConnection(function (err, connection) {
      if (err) return returnError(res, err);

      const sql = `INSERT INTO ${tableName} SET ?`;

      connection.query(sql, rowObject, function (err, result) {
        connection.release();
        if (err) return returnError(res, err);
        if (res) {
          res.json({
            status: 200,
            message: "Success",
            data: result,
          });
        } else {
          callback(null, result);
        }
      });
    });
  } catch (error) {
    return returnError(res, error);
  }
}
