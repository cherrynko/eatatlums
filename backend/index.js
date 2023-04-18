const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3001
const m_db = require("./mydb")

m_db();

app.get('/', (req, res) => {
  // res.send('Hello World!kjdlksd')
})

app.use(express.json());
// Middleware to parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  // res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000")
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/WriteReview"));
app.use("/api", require("./Routes/GetReviews"));
app.use("/api", require("./Routes/GetSearchReviews"));
app.use("/api", require("./Routes/AddFavouriteMeal"));
app.use("/api", require("./Routes/ReportRider"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})