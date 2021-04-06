console.clear()
//require
const express = require("express");
require("dotenv").config();
const connectDB = require("./config/connectDB.js");
// instance app
const app = express();

//connection with the database
connectDB();
// middleware global route
//json type
app.use(express.json());
// router
app.use('/api/user', require('./routes/student'))/////////////
app.use('/api/user', require('./routes/professor'))//////////
app.use('/api/lesson', require('./routes/cours'))//////////
//create server

const PORT = process.env.PORT;

app.listen(PORT, (err) =>
  err ? console.error(err) : console.log("server is running")
);