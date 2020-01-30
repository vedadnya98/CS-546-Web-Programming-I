const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  res.render("prime");
});

router.post("/", (req, res) => {
  res.render("prime");
});

module.exports = router;