import { Patient } from "../models/Patient.js";
import { HttpStatusCodes, ResponseMessages } from "../contants/contants.js";
import { PatientError } from "../errors/errors.js";

export default class PatientsService {
  static async getPatients() {
    const patients = await Patient.find({});

    const maleCount = patients.filter((item) => item.sex === "Male").length;
    const femaleCount = patients.filter((item) => item.sex === "Female").length;

    const wellbeingAvarage = (patients.reduce((prev,current) => {
      return prev + (current.wellbeing.reduce((prevDay, currentDay) => {
        return prevDay + currentDay.day_wellbeing
      },0) / current.wellbeing.length)
    },0)/patients.length).toFixed(1)

    const moodAvarage = (patients.reduce((prev,current) => {
      return prev + (current.wellbeing.reduce((prevDay, currentDay) => {
        return prevDay + currentDay.day_mood
      },0) / current.wellbeing.length)
    },0)/patients.length).toFixed(1)


    return {maleCount, femaleCount, moodAvarage,wellbeingAvarage,patients };
  }

  static async createNewPatient(
    fullName,
    sex,
    medications,
    wellbeing,
    symptoms,
    adherence
  ) {
    const patient = new Patient({
      fullName,
      sex,
      medications,
      wellbeing,
      symptoms,
      adherence,
    });

    await patient.save();

    return { message: ResponseMessages.SUCCESS_ADD };
  }

  static async deletePatient(id) {
    const data = await Patient.findByIdAndRemove(id);

    if (!data) {
      throw new PatientError(
        HttpStatusCodes.NOT_FOUND,
        ResponseMessages.NOT_FOUND
      );
    }

    return { message: ResponseMessages.SUCCESS_DELETE };
  }
}
