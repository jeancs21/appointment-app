import { PatientFormValues } from "../model/patient.model";

const pacientes: PatientFormValues[] = [
    {
        id: "1",
        firstName: "Juan",
        lastName: "Pérez",
        identification: "123456789",
        birthday: "1990-05-15",
        bloodType: "O+",
        phone: "123-456-7890",
        email: "juan.perez@example.com",
        symptoms: "Fiebre, tos persistente",
    },
    {
        id: "2",
        firstName: "María",
        lastName: "Gómez",
        identification: "987654321",
        birthday: "1985-10-20",
        bloodType: "A-",
        phone: "987-654-3210",
        email: "maria.gomez@example.com",
        symptoms: "Dolor de garganta, fatiga",
    },
];

export default pacientes;