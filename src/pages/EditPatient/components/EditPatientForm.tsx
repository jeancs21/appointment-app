import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { PatientFormValues } from "../../../model/patient.model";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PatientFormSchema } from "../../AddPatient/schemas/add-patient-form-schema";
import NavigateButton from "../../../containers/NavigateButton";
import CustomInput from "../../../containers/CustomInput";
import CustomButton from "../../../containers/CustomButton";
import { AppStore } from "../../../redux/store";
import { updatePatient } from "../../../redux/states/patient.state";

const EditPatientForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = useParams();
    
    const patients = useSelector((store: AppStore) => store.patient)

    const filteredPatient = patients.filter(patient => patient.id === id ?? "")

    const patientValue = filteredPatient[0]

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setError] = useState(false);

    const methods = useForm<PatientFormValues>({
        defaultValues: patientValue,
        mode: "onChange",
        resolver: yupResolver(PatientFormSchema)
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
        reset
    } = methods

    const submit = async (data: PatientFormValues) => {
        try {
            const updatedPatientData = {...data, id: patientValue.id}
            setIsLoading(true)
            await dispatch(updatePatient(updatedPatientData))
            reset()
            setIsLoading(false)
            setTimeout(() => {
                navigate("/patients")
            }, 500)

        }
        catch (error) {
            console.log(error)
            setIsLoading(false)
            setError(true)
        }
    }

  return (
    <>
        <FormProvider {...methods}>
            <div className="flex flex-col my-12">
                <div className="mb-8 ml-4">
                <NavigateButton path="/patients" buttonText="< Volver al listado" />
                </div>

                <div className="ml-8 text-3xl font-medium text-pink-400">Editar datos del paciente</div>

                <div className="flex justify-center container self-center">
                <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-6 mt-20 sm:w-8/12 p-8 sm:p-4">
                    <div className="flex flex-col sm:flex-row gap-8">
                        <CustomInput type="text" name="firstName" label="Nombres *" defaultValues={patientValue.firstName} required={true} />
                        <CustomInput type="text" name="lastName" label="Apellidos *" defaultValues={patientValue.lastName} required={true} />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-8">
                        <CustomInput type="text" name="identification" label="Identificación" defaultValues={patientValue.identification} />
                        <CustomInput type="date" name="birthday" label="Fecha de nacimiento" defaultValues={patientValue.birthday} />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-8">
                        <CustomInput type="text" name="bloodType" label="Tipo de sangre" defaultValues={patientValue.bloodType} />
                        <CustomInput type="text" name="phone" label="Teléfono" defaultValues={patientValue.phone} />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-8">
                        <CustomInput type="email" name="email" label="Correo electrónico *" defaultValues={patientValue.email} required={true} />
                    </div>
                    <CustomInput type="textarea" name="symptoms" label="Síntomas *" defaultValues={patientValue.symptoms} required={true} />
                    <CustomButton isDirty={isDirty} isValid={isValid} children={isLoading ? "Procesando..." : "Guardar cambios"} />
                    <div className="self-center text-center">
                        {isError || isDirty && (
                            <p className="text-red-500">Datos no validados</p>
                        )}
                    </div>
                </form>
                </div>
            </div>
        </FormProvider>
    </>
  )
}

export default EditPatientForm