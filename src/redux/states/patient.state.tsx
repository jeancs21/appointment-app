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
    }
})

export const { addPatient } = patientSlice.actions;

export default patientSlice.reducer;