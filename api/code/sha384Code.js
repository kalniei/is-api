const express = require("express");
const router = express.Router();
const crypto = require('crypto');


router.post("/", async (req, res) => {
  const hash = crypto.createHash('sha384').update(JSON.stringify(req.body)).digest("hex");
  res.json({
    status: 200,
    message: "Success",
    data: hash,
  });  
});

module.exports = router;
