const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
  type: {
    type: String,
    trim: true,
    default: "Resistance"
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
  weight: {
    type: Number,
    required: "Enter a weight"
  },
  reps: {
    type: Number,
    required: "Enter the number of reps"
  },
  sets: {
    type: Number,
    required: "Enter a the number of sets"
  }
});

const Resistance = mongoose.model("Resistance", resistanceSchema);

module.exports = Resistance;