require("dotenv").config();
const cors = require("cors");
const db = require("./database/Mongo.database");
const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth.route");
const app = express();
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
};
// connect to db
db();

app.use(express.json());

// Middleware to parse JSON requests
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", authRoutes);

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
