const express = require("express");
const router = express.Router();
const axios = require('axios');
const crypto = require('crypto');
require("dotenv").config();

router.post("/", async (req, res) => {

  const returnError = require("../common-helpers/returnError");

  const sendSingleEmail = require("../email-sender/sendSingleEmail");


  // try {
  //   await sendSingleEmail({
  //     from: '"Impro Silesia" biuro@improsilesia.pl',
  //     to: 'olga.kalniei@gmail.com',
  //     subject: 'THIS email with body',
  //     html: `this is temp data: ${JSON.stringify(req.body)}`,
  //   });
   
  // } catch (error) {
  // }
  

  const basicAuth = 'Basic ' + btoa(req.body.merchantId + ':' + '546850019766733902dd563fb07fafde');

    try {
      await sendSingleEmail({
        from: '"Impro Silesia" biuro@improsilesia.pl',
        to: 'olga.kalniei@gmail.com',
        subject: 'THIS email with basicAuth',
        html: `this is temp data: ${basicAuth}`,
      });
     
    } catch (error) {
    }
      
    // const tempData = {
    //   merchantId: req.body.merchantId,
    //   posId: req.body.posId,
    //   sessionId: req.body.sessionId,
    //   amount: req.body.amount,
    //   currency: req.body.currency,
    //   orderId: req.body.orderId,
    //   sign: crypto.createHash('sha384').update(JSON.stringify({
    //     sessionId: req.body.sessionId,
    //     orderId: req.body.orderId,
    //     amount: req.body.amount,
    //     currency: req.body.currency,
    //     crc: '0bdf9c814c299616',
    //   })).digest("hex")
    // };

    // try {
    //   await sendSingleEmail({
    //     from: '"Impro Silesia" biuro@improsilesia.pl',
    //     to: 'olga.kalniei@gmail.com',
    //     subject: 'THIS email with data',
    //     html: `this is temp data: ${JSON.stringify(tempData)} and this is auth token: ${basicAuth} `,
    //   });
     
    // } catch (error) {
    // }
    
    // axios.put('https://sandbox.przelewy24.pl/api' + '/v1/transaction/verify', tempData, {
    //   headers: { Authorization: basicAuth }
    // })
    // .then((response) => {
    //   sendSingleEmail({
    //       from: '"Impro Silesia" biuro@improsilesia.pl',
    //       to: 'olga.kalniei@gmail.com',
    //       subject: 'this is email on success',
    //       html: `no i?`,
    //     });

    //   res.json({
    //     status: 200,
    //     message: "Verification of the payment succeed!",
    //     data: null,
    //   });
    // }).catch((error) => {

    //   sendSingleEmail({
    //     from: '"Impro Silesia" biuro@improsilesia.pl',
    //     to: 'olga.kalniei@gmail.com',
    //     subject: 'this is email on error',
    //     html: `${JSON.stringify(error)}`,
    //   });

    //   return returnError(res, error);
    // });
});

module.exports = router;
