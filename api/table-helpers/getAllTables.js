module.exports = getAllTables;

async function getAllTables(res) {
  const returnError = require("../common-helpers/returnError");
  const getDbConnection = require("../common-helpers/getDbConnection");

  const con = await getDbConnection();

  try {
    con.connect(function (err) {
      if (err) return returnError(res, err);
      con.query(
        `SELECT * FROM information_schema.tables WHERE TABLE_NAME LIKE '%warsztaty%'`,
        function (err, result, fields) {
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
