const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const measurementSchema = new Schema({
  
      neck: {
        type: Number,
      },
      rightarm: {
        type: Number,
      },
      leftarm: {
        type: Number,
      },
      chest: {
        type: Number,
      },
      waist: {
        type: Number,
      },
      hips: {
        type: Number,
      },
      rightlegupper: {
        type: Number,
      },
      rightleglower: {
        type: Number,
      },
      leftlegupper: {
        type: Number,
      },
      leftleglower: {
        type: Number,
      },
      rightcalf: {
        type: Number,
      },
      leftcalf: {
        type: Number,
      },
    
},
);


const Measurement = mongoose.model("Measurement", measurementSchema);

module.exports = Measurement;