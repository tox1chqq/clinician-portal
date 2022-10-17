import Patient from "../models/Patient";
import { HttpStatusCodes, ResponseMessages } from "../contants/contants";

export default class PatientsService {
  static async getPatients() {
    return Patient.find({});
  }

  static async createNewPatient(
    fullName,
    sex,
    medications,
    wellbeing,
    symptoms
  ) {
    const patient = new Patient({
      fullName,
      sex,
      medications,
      wellbeing,
      symptoms,
    });

    await patient.save();

    return { message: ResponseMessages.SUCCESS_ADD };
  }

  static async deletePatient(id) {
    const data = await Patient.findByIdAndRemove(id);

    if (!data) {
      throw new Error(ResponseMessages.PATIENT_NOT_FOUND);
    }

    return { message: ResponseMessages.SUCCESS_DELETE };
  }
}
