const { Schema, model } = require("mongoose");

const Symptom = new Schema(
  {
    name: { type: String, required: true },
    status: { type: String, required: true },
  },
  { _id: false }
);

module.exports = model("Symptom", Symptom);
