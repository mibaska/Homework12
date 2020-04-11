const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: { type: String, lowercase: true, required: "Enter the type of workout." },
  name: { type: String, required: "Enter the name of the workout." },
  duration: { type: Number, required: "Enter the duration of the workout." }
}, { collection: 'data' });

if(workoutSchema.type === "cardio") {
  workoutSchema.add({ distance: { type: Number, required: "Enter the distance of the workout." } });
} else if(workoutSchema.type === "resistance") {
  workoutSchema.add({ weight: { type: Number, required: "Enter the weight lifted during the workout." }, reps: { type: Number, required: "Enter the number of reps done during the workout." }, sets: { type: Number, required: "Enter the number of sets." } });
} else {
  throw Error;
}

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;