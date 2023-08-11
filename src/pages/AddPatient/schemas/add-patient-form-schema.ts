import * as yup from 'yup';

export const PatientFormSchema = yup.object({
    firstName: yup.string().required('El nombre es requerido'),
    lastName: yup.string().required('El apellido es requerido'),
    email: yup.string().required('El correo electrónico es requerido'),
    symptoms: yup.string().required('Los síntomas son requeridos'),
})