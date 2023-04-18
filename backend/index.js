const express = require('express')
const app = express()
const port = 3001
const m_db = require("./mydb")
var cors = require('cors')


m_db();

app.get('/', (req, res) => {
  res.send('Hello World!kjdlksd')
})


app.use(cors()) 
app.use(express.json());
app.use((req, res, next) => {
  // res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000")
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use("/api", require("./Routes/UserRoute"));
app.use("/api/home", require("./Routes/HomeRoute"));
app.use("/api", require("./Routes/EateriesRoute"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})