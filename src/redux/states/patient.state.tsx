import { createSlice } from "@reduxjs/toolkit";
import { PatientEmptyState, PatientFormValues } from "../../model/patient.model";
import pacientes from "../../mocks/patients";

export const PatientState: PatientFormValues[] = pacientes;

export const patientSlice = createSlice({
    name: 'patient',
    initialState: PatientState,
    reducers: {
        addPatient: (state, action) => {
            state.push(action.payload)
        },
    }
})

export const { addPatient } = patientSlice.actions;

export default patientSlice.reducer;