export interface ILineProgressItem{
    name: string,
    value: number,
    color: string
}

export interface  IPatient{
    id: number,
    name: string,
    medication:string,
    medication_dose: number,
    wellbeing: number,
    mood: number,
    adherence: number,
    symptoms: ISymptoms[]
}

interface ISymptoms{
    name:string,
    state:string
}