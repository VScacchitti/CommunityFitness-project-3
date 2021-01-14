const mongoose = require("mongoose");
const db = require("../models/measurement");



// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/communityfitness"
);

const measurmentSeed = [
    {
        neck: 17,
        rightarm: 18,
        leftarm:18,
        chest: 40,
        waist:34,
        hips: 36,
        rightlegupper:24,
        rightleglower:16,
        leftlegupper: 24,
        leftleglower: 16,
        rightcalf: 14,
        leftcalf: 14, 
    }
];

  db.Measurement
  .remove({})
  .then(() => db.Measurement.collection.insertMany(measurmentSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  }); 