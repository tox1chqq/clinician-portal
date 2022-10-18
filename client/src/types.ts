export interface ILineProgressItem {
  name: string;
  value: number;
  color: string;
}

interface ISymptoms {
  name: string;
  status: string;
}

interface IDayState{
  data: string,
  day: string,
  day_mood: number,
  day_wellbeing: number,
  symptoms: ISymptoms[]
}

interface IMedication{
  medication_dose: string,
  medication_name: string
}



export interface IPatient{
  _id: number,
  fullName: string,
  sex: string,
  adherence: number,
  symptoms: ISymptoms[],
  wellbeing: IDayState[],
  medications: IMedication[]
}


export interface IPortalData{
  femaleCount: number,
  maleCount: number,
  moodAvarage: number,
  wellbeingAvarage: number,
  patients: IPatient[]
}