const { Schema, model } = require("mongoose");

const Medication = new Schema(
  {
    medication_name: { type: String, required: true },
    medication_dose: { type: String, required: true },
  },
  { _id: false }
);

module.exports = model("Medication", Medication);
