const express = require('express');
const router = express.Router();
const data = require('../data');
const peopleData = data.people;

router.get("/", (req, res) => {
  res.render('people/index' , {title : "People Finder"});
});

router.post('/search', async (req, res) => {
  try
   {
        const str = req.body.personName;
        if(str.length == 0)
        {
          res.status(400).render('people/error',{title : "Error occured" , error:"No Input provided"})
        }

        const people = await peopleData.search(req.body.personName);
        
        res.render('people/search' , {title : "People Found" , people: people , name : req.body.personName});
   } 
   catch (e) 
    {
      res.status(404).render('people/error',{title : "Error occured" , error:"We're sorry, but no results were found for the above keyword" , searchtitle : "People Found" , name : req.body.personName})
    }
  });

router.get('/details/:id', async (req, res) => {
  try 
    {
        const peopleObj = await peopleData.getPersonById(req.params.id);
        res.render('people/details', {title : "Person Found" , peopleObj : peopleObj});
    }
  catch (e) 
    {
      res.status(400).render('people/error',{title : "Error occured" , error:"No such ID exists" })
    }

});

router.get('/details', async (req, res) => {
      res.status(400).render('people/error',{title : "Error occured" , error:"No ID provided"})
});

module.exports = router;