import * as yup from 'yup';

export const AppointmentFormSchema = yup.object({
    appointmentDate: yup.string().required('La fecha de cita es requerido'),
    patient: yup.string().required('Debes seleccionar un paciente')
})