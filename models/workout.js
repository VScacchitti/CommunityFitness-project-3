const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
    },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        trim: true,
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      }
    }
  ]   
},

{
  // adds a virtual property, not stored in Mongo, to compute properties on documents 
  toJSON: {
  virtuals: true,
  },
}
);

// Creates a virtual property `totalDuration` that's computed by reducing things down to duration.
workoutSchema.virtual("totalDuration").get(function () {
return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
}, 0)
  
});
  
  const Workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = Workout;