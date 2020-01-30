const session = require('express-session');
const express = require('express');
const app = express();
const path = require('path')
const static = express.static(__dirname + '/public');
const configRoutes = require('./routes');
const exphbs = require('express-handlebars');

app.use('/public', static);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname + '/views'));


app.use(session({
  name: 'AuthCookie',
  secret: 'I love Web',
  resave: false,
  saveUninitialized: true,
  cookie: {path: '/', httpOnly: true, secure: false, maxAge: null }
}))


app.use(function(req, res, next) {
  let status = "Non-Authenticated User";
  if (req.session.AuthCookie) {
    status = "Authenticated User";
  }
  console.log(`[${new Date().toUTCString()}]: ${req.method} ${req.originalUrl} (${status})`);
  next();
});
  
app.use('/private', function(req, res, next) {
  res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  if(req.session.userId) {
     return next();
  } else {
      res.status(403).render('error');
  }
});

configRoutes(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log('Your routes will be running on http://localhost:3000');
});