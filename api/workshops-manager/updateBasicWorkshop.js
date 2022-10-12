const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const updateRowInTable = require("../table-helpers/updateRowInTable");
  updateRowInTable(
    res,
    'admin_basic_workshops',
    { path: req.body.path },
    req.body.data,
    false
  );
});

module.exports = router;
