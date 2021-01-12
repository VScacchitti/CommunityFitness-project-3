const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
    },
  name: {
    type: String,
    trim: true,
    },
  description: {
    type: String,
    },
  notes: {
    type: String,
    },  
},

);


  
  const Workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = Workout;