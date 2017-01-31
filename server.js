const express = require('express')
const session = require('express-session')

const app = express()

app.set('trust proxy', 1)

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(function(req, res, next){
  req.session.name = 'Janie'
  next()
})

app.get('/login', function(req, res, next){
  const name = req.session.name
  res.send(`Kia ora ${name}, welcome back`)
})

app.get('/logout', function(req, res, next){
  req.session.destroy(function(err){
  })
  res.send('Ka kite, you have been logged out.')
})


app.listen(3000, function(){
  console.log('Listening carefully on port 3000!');
})

















app.listen()
