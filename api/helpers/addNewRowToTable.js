exports.addNewRowToTable = async (
  res,
  tableName,
  tableColumnsStr,
  rowValuesStr
) => {
  const errorModule = require("./returnError");
  const connectionModule = require("./getDbConnection");

  const con = await connectionModule.getDbConnection();

  try {
    con.connect(function (err) {
      if (err) return errorModule.returnError(res, err);

      const sql = `INSERT INTO ${tableName} (${tableColumnsStr}) VALUES ?`;
      const values = [rowValuesStr];

      con.query(sql, [values], function (err, result) {
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
