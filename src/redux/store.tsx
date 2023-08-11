import { configureStore } from "@reduxjs/toolkit";
import { PatientFormValues } from "../model/patient.model";
import { patientSlice } from "./states/patient.state";

export interface AppStore {
    patient: PatientFormValues[];
}

export default configureStore<AppStore>({
    reducer: {
        patient: patientSlice.reducer
    }
})