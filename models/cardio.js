const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
  type: {
    type: String,
    trim: true,
    default: "Cardio"
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a workout name"
  },
  duration: {
    type: Number,
    required: "Enter a duration"
  },
  distance: {
    type: Number,
    required: "Enter a distance"
  }
});

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;