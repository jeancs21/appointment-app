import { createSlice } from "@reduxjs/toolkit";
import { AppointmentFormValues } from "../../model/appointment.model";
import { v4 as uuidv4 } from 'uuid';
import appointments from "../../mocks/appointments";

export const AppointmentState: AppointmentFormValues[] = appointments;

export const appointmentSlice = createSlice({
    name: 'appointment',
    initialState: AppointmentState,
    reducers: {
        createAppointment: (state, action) => {
            const newAppointment: AppointmentFormValues = {
                ...action.payload,
                id: uuidv4()
            };
            state.push(newAppointment)
        }
    }
})

export const { createAppointment } = appointmentSlice.actions;

export default appointmentSlice.reducer