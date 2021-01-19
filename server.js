const express = require("express");
const mongoose = require ("mongoose");
const cors = require("cors");
const routes= require ("./routes");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes)

//Connet to mongoose
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/communityfitness";

mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  }, 
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);

// setup routes
app.use("/users", require("./routes/api/userroutes/user"));

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

