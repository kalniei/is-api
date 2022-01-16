module.exports = checkIfRowExists;

async function checkIfRowExists(tableName, rowObject, callback) {
  const returnError = require("../common-helpers/returnError");
  const getDbConnection = require("../common-helpers/getDbConnection");

  const con = await getDbConnection();

  try {
    con.connect(function (err) {
      if (err) return returnError(res, err);
      const sql = `SELECT * FROM ${tableName} WHERE mail = '${rowObject.mail}'`;
      con.query(sql, function (err, result) {
        if (err) return returnError(res, err);
        callback(null, result, rowObject);
      });
    });
  } catch (error) {
    return returnError(res, error);
  }
}
