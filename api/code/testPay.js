const express = require("express");
const router = express.Router();


router.post("/", async (req, res) => {
  console.log(1111111);
  console.log(req.body);
  const sendSingleEmail = require("../email-sender/sendSingleEmail");

  const returnError = require("../common-helpers/returnError");

  try {
    await sendSingleEmail({
      from: '"Impro Silesia" biuro@improsilesia.pl',
      to: 'olga.kalniei@gmail.com',
      subject: 'ho ho ho',
      html: 'this is content',
    });
    res.json({
      status: 200,
      message: "Email has been sent",
      data: null,
    });
  } catch (error) {
    return returnError(res, error);
  }

  
});

module.exports = router;
