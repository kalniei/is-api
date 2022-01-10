module.exports = getTable;

async function getTable(res, tableName) {
  const returnError = require("./returnError");
  const getDbConnection = require("./getDbConnection");

  const con = await getDbConnection();

  try {
    con.connect(function (err) {
      if (err) return returnError(res, err);
      con.query(`SELECT * FROM ${tableName}`, function (err, result, fields) {
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
