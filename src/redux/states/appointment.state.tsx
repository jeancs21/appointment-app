import { createSlice } from "@reduxjs/toolkit";
import { AppointmentFormValues } from "../../model/appointment.model";
import { v4 as uuidv4 } from 'uuid';
import appointments from "../../mocks/appointments";
import { AppointmentStatusEnum } from "../../model/enums/appointmentStatus.enum";

export const AppointmentState: AppointmentFormValues[] = appointments;

export const appointmentSlice = createSlice({
    name: 'appointment',
    initialState: AppointmentState,
    reducers: {
        createAppointment: (state, action) => {
            const newAppointment: AppointmentFormValues = {
                ...action.payload,
                id: uuidv4(),
                status: AppointmentStatusEnum.Activa
            };
            state.push(newAppointment)
        }
    }
})

export const { createAppointment } = appointmentSlice.actions;

export default appointmentSlice.reducer