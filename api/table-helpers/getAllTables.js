module.exports = getAllTables;

async function getAllTables(res) {
  const returnError = require("../common-helpers/returnError");
  const getDbConnection = require("../common-helpers/getDbConnection");

  const pool = await getDbConnection();

  try {
    pool.getConnection(function (err, connection) {
      if (err) return returnError(res, err);
      connection.query(
        `SELECT * FROM information_schema.tables WHERE TABLE_NAME LIKE '%warsztaty%'`,
        function (err, result, fields) {
          connection.release();
          if (err) return returnError(res, err);
          res.json({
            status: 200,
            message: "Success",
            data: result.map((x) => x.TABLE_NAME),
          });
        }
      );
    });
  } catch (error) {
    return returnError(res, error);
  }
}
