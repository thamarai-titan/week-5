const express = require('express')

const app = express();

app.use(express.json());

var Users = [];

app.get('/login', (req, res) => {
  res.render('login');
})

app.post('/login', (req, res)=>{
  res.send(`Full name is:${req.body.user} ${req.body.password}.`);
})
app.listen(3000);