exports.getTable = async (res, tableName) => {
  const errorModule = require("./returnError");
  const connectionModule = require("./getDbConnection");

  const con = await connectionModule.getDbConnection();

  try {
    con.connect(function (err) {
      if (err) return errorModule.returnError(res, err);
      con.query(`SELECT * FROM ${tableName}`, function (err, result, fields) {
        if (err) return errorModule.returnError(res, err);
        res.json({
          status: 200,
          message: "Success",
          data: result,
        });
      });
    });
  } catch (error) {
    return errorModule.returnError(res, error);
  }
};
