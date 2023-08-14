import { configureStore } from "@reduxjs/toolkit";
import { PatientFormValues } from "../model/patient.model";
import { patientSlice } from "./states/patient.state";
import { AppointmentFormValues } from "../model/appointment.model";
import { appointmentSlice } from "./states/appointment.state";
import { loadDbPatientState } from "../services/persist-data/patients/persist-patient-info.services";
import { loadDbAppointmenttState } from "../services/persist-data/appointments/persist-appointment-info";

export interface AppStore {
    patient: PatientFormValues[];
    appointment: AppointmentFormValues[];
}

const initialState = {
    patient: loadDbPatientState() || [],
    appointment: loadDbAppointmenttState() || []
}

export default configureStore<AppStore>({
    reducer: {
        patient: patientSlice.reducer,
        appointment: appointmentSlice.reducer
    },
    preloadedState: initialState
})