const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter a name for transaction"
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for transaction"
  },
  duration: {
    type: Number,
    required: "Enter an amount"
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;