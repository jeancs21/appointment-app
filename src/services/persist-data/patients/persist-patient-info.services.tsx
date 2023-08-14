import { PatientFormValues } from "../../../model/patient.model";


export const persisteDbPatientState = (patientList: PatientFormValues[]) => {
    localStorage.setItem('patientList', JSON.stringify(patientList));
}

export const clearDbPatient = () => {
    localStorage.setItem('patientList', '');
};

export const managePatientState = (patientList: PatientFormValues) => {
    const prevPatientList = localStorage.getItem('patientList');
    if (prevPatientList) {
        const result = JSON.parse(prevPatientList) as PatientFormValues[];
        persisteDbPatientState([...result, patientList]);
    }
    else {
        persisteDbPatientState([patientList]);
    }
}

export const loadDbPatientState = (): PatientFormValues[] | undefined => {
    const patientList = localStorage.getItem('patientList');
    if (patientList) {
        return JSON.parse(patientList) as PatientFormValues[];
    }
    return undefined;
}