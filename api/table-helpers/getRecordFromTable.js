module.exports = getTable;

async function getTable(res, tableName, uniqie_name, unique_value) {
  const returnError = require("../common-helpers/returnError");
  const getDbConnection = require("../common-helpers/getDbConnection");

  const pool = await getDbConnection();

  try {
    pool.getConnection(function (err, connection) {
      if (err) return returnError(res, err);
      connection.query(
        `SELECT * FROM ${tableName} WHERE ${uniqie_name} = '${unique_value}'`,
        function (err, result, fields) {
          connection.release();
          if (err || !result.length) return returnError(res, !result.length ? {
            sqlMessage: 'Nie ma takich warsztatów w naszej bazie'} : err);
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
