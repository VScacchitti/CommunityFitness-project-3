const mongoose = require("mongoose");
const db = require("../models/record");



// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/communityfitnessbackup"
);

const recordSeed = [
    {
      name: "Deadlift",
      weight: 375,
      reps: 1

    },
    {
      name: "Clean and Jerk",
      weight: 195,
      reps: 1
    }
  ];

  db.Record
  .remove({})
  .then(() => db.Record.collection.insertMany(recordSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });





