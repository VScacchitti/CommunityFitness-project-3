const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  focus: { type: String, required: true },
  name: { type: String, required: true },
  bodypart: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String},
  scale: {type: String}
},
);

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;