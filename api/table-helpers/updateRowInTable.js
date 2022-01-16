module.exports = updateRowInTable;

async function updateRowInTable(res, tableName, idSet, changedData, callback) {
  const returnError = require("../common-helpers/returnError");
  const getDbConnection = require("../common-helpers/getDbConnection");
  const con = await getDbConnection();

  try {
    con.connect(function (err) {
      if (err) return returnError(res, err);
      const sql = `UPDATE ${tableName} SET ? WHERE ?`;
      con.query(sql, [changedData, idSet], function (err, result) {
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
