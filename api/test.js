const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    var mysql = require("mysql");

    var con = mysql.createConnection({
      host: "mysql55.zenbox.pl",
      user: "aproposs22_is",
      password: "ImproSilesi@11235813",
      database: "aproposs22_is",
    });

    con.connect(function (err) {
      if (err) throw err;
      con.query(
        "SELECT * FROM admin_email_templates",
        function (err, result, fields) {
          if (err) throw err;
          console.log(result);
          res.json({
            status: 200,
            message: "Test js is fucking working 1111",
            data: result,
          });
        }
      );
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
