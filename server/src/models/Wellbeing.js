const { Schema, model } = require("mongoose");

const Wellbeing = new Schema(
  {
    date: { type: Date, required: true },
    day: { type: String },
    day_wellbeing: { type: Number, required: true },
    day_mood: { type: Number, required: true },
    symptoms: { type: Array, ref: "Symptom" },
  },
  { _id: false }
);

module.exports = model("Wellbeing", Wellbeing);
