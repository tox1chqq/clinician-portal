const { Schema, model } = require("mongoose");

const Patient = new Schema({
  fullName: { type: String, required: true },
  sex: { type: String, required: true },
  medications: { type: Array, ref: "Medication" },
  wellbeing: { type: Array, ref: "Wellbeing" },
  symptoms: { type: Array, ref: "Symptom" },
  adherence: { type: Number, required: true },
});

module.exports = model("Patient", Patient);
