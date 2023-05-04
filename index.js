const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())


const data = {
  "id": "0001",
  "type": "donut",
  "name": "Cake",
  "ppu": 0.55,
}

app.get('/hello', (req, res) => {
  res.status(401).send("Hello World")
})

app.get('/getData', (req, res) => {
  res.json({ data })
})

app.post('/postData', (req, res) => {
  res.json({ data: req.body })
})

app.listen(5000, () => {
  console.log('Server running at 5000')
})