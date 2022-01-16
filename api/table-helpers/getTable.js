module.exports = getTable;

async function getTable(res, tableName) {
  const returnError = require("../common-helpers/returnError");
  const getDbConnection = require("../common-helpers/getDbConnection");

  const pool = await getDbConnection();

  try {
    pool.getConnection(function (err, connection) {
      if (err) return returnError(res, err);
      connection.query(
        `SELECT * FROM ${tableName}`,
        function (err, result, fields) {
          connection.release();
          if (err) return returnError(res, err);
          res.json({
            status: 200,
            message: "Success",
            data: result,
          });
        }
      );
    });
  } catch (error) {
    return returnError(res, error);
  }
}
