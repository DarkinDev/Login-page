require("dotenv").config();
const cors = require("cors");
const db = require("./database/Mongo.database");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
};
// connect to db
db();

app.use(cors(corsOptions));

// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
