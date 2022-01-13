module.exports = transferToWorkshopsTable;

async function transferToWorkshopsTable(
  res,
  tableNameFrom,
  tableNameTo,
  rowObject
) {
  console.log(tableNameFrom);
  console.log(tableNameTo);
  const returnError = require("../common-helpers/returnError");
  const getDbConnection = require("../common-helpers/getDbConnection");

  const con = await getDbConnection();

  try {
    con.connect(function (err) {
      if (err) return returnError(res, err);
      // prettier-ignore
      const sql = `DECLARE @retVal int
                  SELECT @retVal = COUNT(*) 
                  FROM ${tableNameTo}
                  WHERE mail = '${rowObject.mail}'
                  IF (@retVal > 0)
                  BEGIN
                    INSERT INTO ${tableNameTo} (${Object.keys(rowObject)}) VALUES ?
                  END
                  ELSE
                  BEGIN
                    UPDATE ${tableNameTo} SET level=${rowObject.level} WHERE mail=${rowObject.mail}
                  END `;

      const values = Object.values(rowObject);

      con.query(sql, [values], function (err, result) {
        if (err) return returnError(res, err);
        // res.json({
        //   status: 200,
        //   message: "Success",
        //   data: result,
        // });
      });
    });
  } catch (error) {
    return returnError(res, error);
  }
}
