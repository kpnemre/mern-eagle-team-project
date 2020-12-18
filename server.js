const express = require("express");
const app = express();
require("dotenv").config();
const dbConnect = require("./models/dbConnect");
const router = require("./routers/router");
dbConnect();

//middleware
app.use(express.json());
//app.use("/api", router);

//server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listen port ${port}`);
});
