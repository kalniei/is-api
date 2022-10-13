const express = require("express");
const router = express.Router();


router.post("/", async (req, res) => {
  console.log(1111111);
  console.log(req.body);
  res.json({
    status: 200,
    message: "Success",
    data: 'jest git',
  });  
});

module.exports = router;
