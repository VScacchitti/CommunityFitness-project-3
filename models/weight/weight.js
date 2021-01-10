const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const weightSchema = new Schema({
  
      _id: new mongoose.Types.ObjectId(),
      weight: {
        type: Number,
      },
      units: {
        type: String,
      },
     
},
);

  
  const Weight = mongoose.model("Weight", weightSchema);
  
  module.exports = Weight;