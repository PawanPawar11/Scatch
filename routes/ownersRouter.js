const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("Hey from owner...");
});

module.exports = router;
