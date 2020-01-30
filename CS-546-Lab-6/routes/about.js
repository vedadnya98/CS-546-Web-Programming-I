const express = require("express");
const router = express.Router();

const aboutObj = {
                "name": "Vedadnya Jadhav",
                "cwid": "10450603",
                "biography": "I am a student at Stevens Institute of Technology , I am currently pursuing a MS in Computer Science course. \n I love challenging myself and sometimes regret over-challenging myself.",
                "favoriteShows": ["Prison Break", "Sherlock", "F.R.I.E.N.D.S", "Game of Thrones" , "WWE"],
                "hobbies": ["Playing Football", "Traveling", "Singing" , "Procrastinating"]
               }

router.get("/", async (req, res) => {

res.json(aboutObj)
});

module.exports = router;