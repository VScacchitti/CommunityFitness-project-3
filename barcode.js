const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  Gym Name: {
    type: String,
    required: true
  },
  Membership ID#: {
    type: String,
    required: true
  }
});

const Memberships = mongoose.model("Membership", UserSchema);

module.exports = Memberships;

<canvas id="barcode"></canvas>
<svg id="code128"></svg>

JsBarcode("#code128", "555128985374");

JsBarcode("#barcode")
  .options({font: "CODE128"}) // Will affect all barcodes
  .blank(20) // Create space between the barcodes
  .render();