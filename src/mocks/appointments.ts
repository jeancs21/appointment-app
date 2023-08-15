import { AppointmentFormValues } from "../model/appointment.model";
import { AppointmentStatusEnum } from "../model/enums/appointmentStatus.enum";

const appointments: AppointmentFormValues[] = [
    {
        id: "1",
        patientId: "haf783i2a",
        patient: "Dany Santos",
        appointmentDate: "28 junio 2023 - 10:00 A.M",
        status: AppointmentStatusEnum.Activa
    },
    {
        id: "2",
        patientId: "af782yrf",
        patient: "Ramona Santos",
        appointmentDate: "28 junio 2023 - 11:00 A.M",
        status: AppointmentStatusEnum.Cancelado
    },
];

export default appointments;