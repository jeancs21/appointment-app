export interface PatientFormValues {
    id?: string,
    firstName: string,
    lastName: string,
    identification?: string,
    birthday?: string,
    bloodType?: string,
    phone?: string,
    email: string,
    symptoms: string,
}

export const PatientEmptyState: PatientFormValues = {
    id: "",
    firstName: "",
    lastName: "",
    identification: "",
    birthday: "",
    bloodType: "",
    phone: "",
    email: "",
    symptoms: "",
}