import { createSlice } from "@reduxjs/toolkit";
import { PatientEmptyState, PatientFormValues } from "../../model/patient.model";
import pacientes from "../../mocks/patients";
import { v4 as uuidv4 } from 'uuid';

export const PatientState: PatientFormValues[] = pacientes;

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
        },
        updatePatient: (state, action) => {
            const updatedPatient = action.payload;
            const index = state.findIndex(patient => patient.id === updatedPatient.id);
            if (index !== -1) {
                state[index] = updatedPatient
            }
        }
    }
})

export const { addPatient, updatePatient } = patientSlice.actions;

export default patientSlice.reducer;