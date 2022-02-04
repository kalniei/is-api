module.exports = createNewUserWorkshopTable;

async function createNewUserWorkshopTable(res, tableName) {
  const returnError = require("../common-helpers/returnError");
  const getDbConnection = require("../common-helpers/getDbConnection");

  const pool = await getDbConnection();

  try {
    pool.getConnection(function (err, connection) {
      if (err) return returnError(res, err);

      const sql = `CREATE TABLE ${tableName} (
          name varchar(35),
          surname varchar(35),
          mail varchar(100),
          phone varchar(20),
          notes text,
          date date,
          level varchar(10),
          paid varchar(500),
          PRIMARY KEY (name)
      );`;

      connection.query(sql, function (err, result) {
        connection.release();
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
