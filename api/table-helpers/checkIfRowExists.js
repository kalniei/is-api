module.exports = checkIfRowExists;

async function checkIfRowExists(tableName, rowObject, callback) {
  const returnError = require("../common-helpers/returnError");
  const getDbConnection = require("../common-helpers/getDbConnection");

  const pool = await getDbConnection();

  try {
    pool.getConnection(function (err, connection) {
      if (err) return returnError(res, err);
      const sql = `SELECT * FROM ${tableName} WHERE mail = '${rowObject.mail}'`;
      connection.query(sql, function (err, result) {
        connection.release();
        if (err) return returnError(res, err);
        callback(null, result, rowObject);
      });
    });
  } catch (error) {
    return returnError(res, error);
  }
}
