const mongoose = require("mongoose");
const db = require("../models/workout");


  mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/communityfitness"
  );

  let workoutSeed = [
    {
      day: new Date().setDate(new Date().getDate()-10),
      name: "Mayhem Monday",
      description: "Strength- Front Squat 10 x 3 (185lbs), Back Squat 5x3 (235lbs), Conditioning The Mandolorian -12 Burpee-CHest to Bar PullUp 240 single-unders 10 Burpee C to B 200 single-unders 8 burpee C to B 160 single-unders -Rest 5:00- 15 Overhead Squats (95) 30 Weighted Sit Ups 12 Overhead Squats (95) 24 Weighted SIt Ups 9 Overhead Squats (95) 18 Weighted Sit Ups -Rest 5:00- 20 Burpee Pull-Ups 400 single-unders 20 Overhead Squats (95) 40 Weighted Sit Ups",
      notes: "Completed Mandolorian in 19:02" 
    },
    {
      day: new Date().setDate(new Date().getDate()-9),
      name: "Chest and Triceps",
      description: "Flat Bench Press 3 x 10 (225) Incline Dumbbell Bench Press 4x8(55) Tricep Pull Down 4x15(50), 3 x Max Push -Ups (rest 2min between rounds)",
      notes: "Completed Mandolorian in 19:02"
    
    },
  ];
  
  db.Workout.deleteMany({})
    .then(() => db.Workout.collection.insertMany(workoutSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });