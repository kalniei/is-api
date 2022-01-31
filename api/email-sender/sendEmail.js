const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const sendSingleEmail = require("./sendSingleEmail");
  const returnError = require("../common-helpers/returnError");

  try {
    await sendSingleEmail({
      from: "biuro@improsilesia.pl",
      to: req.body.to,
      subject: req.body.subject,
      html: req.body.content,
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
