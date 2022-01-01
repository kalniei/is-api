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
    }
  );
});
