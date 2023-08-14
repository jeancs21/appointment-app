import { createSlice } from "@reduxjs/toolkit";
import { PatientFormValues } from "../../model/patient.model";
import { v4 as uuidv4 } from 'uuid';
import { managePatientState, persisteDbPatientState } from "../../services/persist-data/patients/persist-patient-info.services";

export const PatientState: PatientFormValues[] = [];

export const patientSlice = createSlice({
    name: 'patient',
    initialState: PatientState,
    reducers: {
        addPatient: (state, action) => {
            const newPatient: PatientFormValues = {
                ...action.payload,
                id: uuidv4()
            };
            state.push(newPatient);
            managePatientState(newPatient);
        },
        updatePatient: (state, action) => {
            const updatedPatient = action.payload;
            const index = state.findIndex(patient => patient.id === updatedPatient.id);
            if (index !== -1) {
                state[index] = updatedPatient;
                persisteDbPatientState(state)
            };
        }
    }
})

export const { addPatient, updatePatient } = patientSlice.actions;

export default patientSlice.reducer;