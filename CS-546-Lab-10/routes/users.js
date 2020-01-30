const express = require("express");
const router = express.Router();
const users = require("../data")

router.get('/login', async (req, res) => {
  return res.redirect("/"); 
})

router.get('/', async (req, res) => {
  try {
      if (req.session.userId) {
          return res.redirect('private');
      } else {
          return res.render('login',{page_title: "Login"});
      }
  } catch (e) {
      res.status(404).json({ error: e.message });
  }
})

router.get("/private", async (req, res) => {
  try
  {
    let id = req.session.userId;
    let userObj = await users.userFunctions.findUserbyId(id-1);
  res.render("private" , {title : 'Private' , userObj});
  }
  catch(error)
  {
    res.status(404).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
      let check = await users.userFunctions.compareDetails(req.body.username, req.body.password);
      if (check>=1) {
          let id = check;
          let result = await users.userFunctions.findUserbyId(id-1);
          req.session.userId = result._id + 1;
          req.session.AuthCookie = req.sessionID;
          return res.status(200).redirect("private");
      } else {
          res.status(401).render('login', { error: "Wrong Username or Password" });
      }
  } catch (e) {
      res.status(404).json({ error: e.message });
  }
})

router.get("/logout", async (req, res) => {
    req.session.destroy(function() {    
      res.clearCookie('AuthCookie', { path: '/' }).render('logout', {title: "Logout"});     
    });
    console.log("cookie deleted");
});

module.exports = router;