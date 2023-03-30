const express = require('express')
const app = express()
const port = 4000
const m_db = require("./mydb")

m_db();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})