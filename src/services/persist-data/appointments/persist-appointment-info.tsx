import { AppointmentFormValues } from "../../../model/appointment.model";

export const persistDbAppointmentState = (appointmentList: AppointmentFormValues[]) => {
    localStorage.setItem('appointmentList', JSON.stringify(appointmentList));
}

export const clearDbAppointment = () => {
    localStorage.setItem('appointmentList', '');
};

export const manageAppointmentState = (appointmentList: AppointmentFormValues) => {
    const prevAppointmentList = localStorage.getItem('appointmentList');
    if (prevAppointmentList) {
        const result = JSON.parse(prevAppointmentList) as AppointmentFormValues[];
        persistDbAppointmentState([...result, appointmentList]);
    }
    else {
        persistDbAppointmentState([appointmentList]);
    }
}

export const loadDbAppointmenttState = (): AppointmentFormValues[] | undefined => {
    const appointmentList = localStorage.getItem('appointmentList');
    if (appointmentList) {
        return JSON.parse(appointmentList) as AppointmentFormValues[];
    }
    return undefined;
}

export const deleteDbAppointmentState = (appointmentId: string) => {
    const prevAppointmentList = localStorage.getItem('appointmentList');
    if (prevAppointmentList) {
        const result = JSON.parse(prevAppointmentList) as AppointmentFormValues[];
        const updatedAppointmentList = result.filter(appointment => appointment.id !== appointmentId);
        persistDbAppointmentState(updatedAppointmentList);
    }
}