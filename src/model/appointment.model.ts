import { AppointmentStatusEnum } from "./enums/appointmentStatus.enum";

export interface AppointmentFormValues {
    id?: string,
    patientId?: string,
    appointmentDate: string,
    status: AppointmentStatusEnum,
}

export const AppointmentEmptyState: AppointmentFormValues = {
    id: "",
    patientId: "",
    appointmentDate: "",
    status: AppointmentStatusEnum.Initial,
}