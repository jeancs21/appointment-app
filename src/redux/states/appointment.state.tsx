import { createSlice } from "@reduxjs/toolkit";
import { AppointmentFormValues } from "../../model/appointment.model";
import { v4 as uuidv4 } from 'uuid';
import appointments from "../../mocks/appointments";
import { AppointmentStatusEnum } from "../../model/enums/appointmentStatus.enum";
import { manageAppointmentState, persistDbAppointmentState } from "../../services/persist-data/appointments/persist-appointment-info";

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
            manageAppointmentState(newAppointment)
        },
        updateAppointment: (state, action) => {
            const updatedAppointment = action.payload;
            const index = state.findIndex(appointment => appointment.id === updatedAppointment.id)
            if (index !== -1) {
                state[index] = updatedAppointment;
                persistDbAppointmentState(state)
            }
        },
        deleteAppointment: (state, action) => {
            const deletedAppointment = action.payload;
            return state.filter(appointment => appointment.id !== deletedAppointment)
        }
    }
})

export const { createAppointment, updateAppointment, deleteAppointment } = appointmentSlice.actions;

export default appointmentSlice.reducer