import { AppointmentStatusEnum } from "./enums/appointmentStatus.enum";

export interface AppointmentFormValues {
    id?: string,
    patientId?: string,
    patient: string,
    appointmentDate: string,
    status: AppointmentStatusEnum,
}

export const AppointmentEmptyState: AppointmentFormValues = {
    id: "",
    patientId: "",
    patient: "",
    appointmentDate: "",
    status: AppointmentStatusEnum.Initial,
}