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
  next()
})

app.get('/', function(req, res, next){
  req.session.name = 'Janie'
  const name = req.session.name
  res.send(`Kia ora ${name}, welcome to this amazing app`)
})

app.get('/about', function(req, res, next){
  const name = req.session.name
  const about = `Kia ora, ${name}, this app is about cookies and how to destroy them.`
  res.send(about)
})

app.get('/logout', function(req, res, next){
  req.session.destroy(function(err){
  })
  res.send('Ka kite, you have been logged out, and we hope the cookie is destroyed.')
})


app.listen(3000, function(){
  console.log('Listening carefully on port 3000!');
})

















app.listen()
