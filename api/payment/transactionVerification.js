const express = require("express");
const router = express.Router();
const axios = require('axios');
const crypto = require('crypto');
require("dotenv").config();

router.post("/", async (req, res) => {
  const returnError = require("../common-helpers/returnError");

  const basicAuth =
    'Basic ' +
    btoa(req.body.merchantId + ':' + process.env.SECRET_ID);
      
    const tempData = {
      merchantId: req.body.merchantId,
      posId: req.body.posId,
      sessionId: req.body.sessionId,
      amount: req.body.amount,
      currency: req.body.currency,
      orderId: req.body.orderId,
      sign: crypto.createHash('sha384').update(JSON.stringify({
        sessionId: req.body.sessionId,
        orderId: req.body.orderId,
        amount: req.body.amount,
        currency: req.body.currency,
        crc: process.env.CRC_KEY,
      })).digest("hex")
    };
    
    axios.put(process.env.PAYMENT_API + '/v1/transaction/verify', tempData, {
      headers: { Authorization: basicAuth }
    })
    .then((response) => {
      res.json({
        status: 200,
        message: "Verification of the payment succeed!",
        data: null,
      });
    }).catch((error) => {
      return returnError(res, error);
    });

  

  // const sendSingleEmail = require("../email-sender/sendSingleEmail");

  // const returnError = require("../common-helpers/returnError");

  // try {
  //   await sendSingleEmail({
  //     from: '"Impro Silesia" biuro@improsilesia.pl',
  //     to: 'olga.kalniei@gmail.com',
  //     subject: 'THIS IS NEW EMAIL',
  //     html: `this is request body: ${JSON.stringify(req.body)}`,
  //   });
  //   res.json({
  //     status: 200,
  //     message: "Email has been sent",
  //     data: null,
  //   });
  // } catch (error) {
  //   return returnError(res, error);
  // }

  
});

module.exports = router;
