const express = require("express");
const router = express.Router();

const eduArray = [
                  {
                   "schoolName": "Stevens Institute of Technology",
                   "degree": "Master of Science in Computer Science",
                   "favoriteClass": "Web Programming : CS 546",
                   "favoriteMemory": "My favorite memory here at Stevens Institute of Technology would be the time I played football for 120 straight minutes on the DeBaun Field."
                  },
                  {
                    "schoolName": "University of Mumbai",
                    "degree": "Bachelor of Engineering in Computer Engineering",
                    "favoriteClass": "Big Data Analytics",
                    "favoriteMemory": "The memory that I cherrish the most about this School is when me and the student council used to tirelessly work together to make the annual cultural fest a huge success"
                  },
                  {
                    "schoolName": "D.Y.Patil Junior College",
                    "degree": "High School Diploma",
                    "favoriteClass": "Computer Science I",
                    "favoriteMemory": "The College Marathon would be my favorite memory as I practiced a lot for it and finally when the day of marathon came I didn't wakeup and broke my alarm clock to compensate the gold medal I wouod have won"
                  }
                 ]

router.get("/", async (req, res) => {

    res.json(eduArray)
    });
    
    module.exports = router;