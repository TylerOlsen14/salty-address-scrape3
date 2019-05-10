const express = require('express');
const router = express.Router();
const app = express();
const fs = require('fs');
const port = 4000

const

var readMe = fs.readFileSync('../address.json', 'utf8');
var address = JSON.parse(readMe)

app.use(express.static('../address.json'))

app.get('/', function(req, res) {
  res.send(address)
})

app.get('/dev', function(req, res) {
  res.send('<h1>Route dev!!!</h1>')
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))