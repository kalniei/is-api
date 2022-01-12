exports.updateRowInTable = async (res, tableName, idSet, changedData) => {
  const returnError = require("../common-helpers/returnError");
  const getDbConnection = require("../common-helpers/getDbConnection");
  const con = await getDbConnection();

  try {
    con.connect(function (err) {
      if (err) return returnError(res, err);
      const sql = `UPDATE ${tableName} SET ? WHERE ?`;

      con.query(sql, [changedData, idSet], function (err, result) {
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
};
