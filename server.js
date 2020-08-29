const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(index.html)
})

app.get('/style.css', (req, res) => {
  req.is('stylesheet')
  res.send('/assets/style')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})