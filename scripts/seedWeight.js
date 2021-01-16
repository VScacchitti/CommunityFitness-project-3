const mongoose = require("mongoose");
const db = require("../models/weight");



// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/communityfitness"
);

const weightSeed = [
    {
        day: new Date().setDate(new Date().getDate()-10),
        weight: 195,
        units: "lbs" 
      }
  ];

  db.Weight
  .remove({})
  .then(() => db.Weight.collection.insertMany(weightSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });