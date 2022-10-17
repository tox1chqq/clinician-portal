const { HttpStatusCodes, ResponseMessages } = require("../contants/contants");
const PatientsService = require("../services/patientsServices");

class PatientsController {
  async createNewPatient(req, res) {
    try {
      const { fullName, sex, medications, wellbeing, symptoms } = req.body;

      const result = await PatientsService.createNewPatient(
        fullName,
        sex,
        medications,
        wellbeing,
        symptoms
      );

      return res.status(HttpStatusCodes.SUCCESS).json(result);
    } catch (e) {
      console.log(e);
      res
        .status(HttpStatusCodes.SERVER_ERROR)
        .json({ error: ResponseMessages.SERVER_ERROR });
    }
  }

  async getPatients(req, res) {
    try {
      const result = await PatientsService.getPatients();

      return res.status(HttpStatusCodes.SUCCESS).json(result);
    } catch (e) {
      console.log(e);
      res
        .status(HttpStatusCodes.SERVER_ERROR)
        .json({ error: ResponseMessages.SERVER_ERROR });
    }
  }

  async deletePatient(req, res) {
    try {
      const {id} = req.params;

      const result = await PatientsService.deletePatient(id);

      return res.status(HttpStatusCodes.SUCCESS).json(result);
    } catch (e) {
      console.log(e);
      res
        .status(HttpStatusCodes.SERVER_ERROR)
        .json({ error: ResponseMessages.SERVER_ERROR });
    }
  }
}

module.exports = new PatientsController();
