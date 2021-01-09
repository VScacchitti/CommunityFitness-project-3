const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recordSchema = new Schema({
  
      name: {
        type: String,
        trim: true,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
     
},
);

  
  const Record = mongoose.model("Record", recordSchema);
  
  module.exports = Record;