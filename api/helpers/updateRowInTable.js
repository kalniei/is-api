exports.updateRowInTable = async (res, tableName, idSet, changedData) => {
  const errorModule = require("./returnError");
  const connectionModule = require("./getDbConnection");
  const con = await connectionModule.getDbConnection();

  try {
    con.connect(function (err) {
      if (err) return errorModule.returnError(res, err);
      const sql = `UPDATE ${tableName} SET ? WHERE ?`;

      con.query(sql, [changedData, idSet], function (err, result) {
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
