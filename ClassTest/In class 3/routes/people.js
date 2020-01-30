const express = require("express");
const router = express.Router();
const data = require("../data/people");

router.get("/:id", async (req, res) => {
    try {
      const showPerson = await data.getPersonById(req.params.id);
      res.json(showPerson);
    } catch (e) {
      res.status(404).json({ message: "Post not found" });
    }
  });
  
  router.get("/", async (req, res) => {
    try {
      const peopleList = await data.getPeople();
      res.json(peopleList);
    } catch (e) {
      res.status(500).send();
    }
  });
  
  
  module.exports = router;