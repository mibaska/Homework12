const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: { type: String, lowercase: true, required: "Enter the type of workout." },
  name: { type: String, required: "Enter the name of the workout." },
  duration: { type: Number, required: "Enter the duration of the workout." },
  distance: { type: Number },
  weight: { type: Number },
  reps: { type: Number },
  sets: { type: Number }
});

const workoutSchema = new Schema({
  day: { type: Date, default: Date.now },
  exercises: [exerciseSchema]
});

workoutSchema.set('toObject', { virtuals: true });
workoutSchema.set('toJSON', { virtuals: true });

workoutSchema.virtual('totalDuration').get(function() {
  var duration = 0;
  this.exercises.forEach(e => {
    duration += e.duration
  })
  return duration;
});

workoutSchema.virtual('totalDistance').get(function() {
  var distance = 0;
  this.exercises.forEach(e => {
    distance += e.distance
  })
  return distance;
});

workoutSchema.virtual('totalWeight').get(function() {
  var weight = 0;
  this.exercises.forEach(e => {
    weight += e.weight
  })
  return weight;
});

workoutSchema.virtual('totalReps').get(function() {
  var reps = 0;
  this.exercises.forEach(e => {
    reps += e.reps
  })
  return reps;
});

workoutSchema.virtual('totalSets').get(function() {
  var sets = 0;
  this.exercises.forEach(e => {
    sets += e.sets
  })
  return sets;
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;