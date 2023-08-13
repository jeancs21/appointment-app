import { configureStore } from "@reduxjs/toolkit";
import { PatientFormValues } from "../model/patient.model";
import { patientSlice } from "./states/patient.state";
import { AppointmentFormValues } from "../model/appointment.model";
import { appointmentSlice } from "./states/appointment.state";

export interface AppStore {
    patient: PatientFormValues[];
    appointment: AppointmentFormValues[];
}

export default configureStore<AppStore>({
    reducer: {
        patient: patientSlice.reducer,
        appointment: appointmentSlice.reducer
    }
})