import { Schema, model } from "mongoose";

const PatientSchema = new Schema({
  fullName: { type: String, required: true },
  sex: { type: String, required: true },
  medications: { type: Array, ref: "Medication" },
  wellbeing: { type: Array, ref: "Wellbeing" },
  symptoms: { type: Array, ref: "Symptom" },
  adherence: { type: Number, required: true },
});

export const Patient = model("Patient", PatientSchema);
