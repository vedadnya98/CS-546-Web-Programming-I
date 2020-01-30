const express = require("express");
const router = express.Router();

const myInfo = { name: 'Vedadnya Jadhav', 
                 dateOfBirth: '06/20',
                 hometown: 'Mumbai'}

router.get("/", async (req, res) => {

res.json(myInfo)
});

module.exports = router;