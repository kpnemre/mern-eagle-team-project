const express = require("express");
require("dotenv").config();
const app = express();
// var cors = require('cors')
const dbConnect = require("./models/dbConnect");
const router = require("./routers/router");
dbConnect();

//middleware
// app.use(cors()) Never use real project
app.use(express.json());
app.use("/api", router);

//server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listen port ${port}`);
});
