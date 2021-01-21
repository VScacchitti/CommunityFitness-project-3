const mongoose = require("mongoose");
const db = require("../models/user");
// This file empties the Books collection and inserts the books below
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/communityfitness"
);
const userSeed = [
    {
      name: "John Doe",
      email: "john@gmail.com",
      password: "password"
    }
  ];
  db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });