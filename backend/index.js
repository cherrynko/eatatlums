const express = require('express')
const app = express()
const port = 3000
const m_db = require("./mydb")

m_db();

app.get('/', (req, res) => {
  res.send('Hello World!kjdlksd')
})

app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})