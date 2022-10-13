const express = require("express");
const router = express.Router();


router.post("/", async (req, res) => {
  const sendSingleEmail = require("../email-sender/sendSingleEmail");

  const returnError = require("../common-helpers/returnError");

  try {
    await sendSingleEmail({
      from: '"Impro Silesia" biuro@improsilesia.pl',
      to: 'olga.kalniei@gmail.com',
      subject: 'THIS IS NEW EMAIL',
      html: `this is request body: ${JSON.stringify(req.body)}`,
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
