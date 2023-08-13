import { FormProvider, useForm } from "react-hook-form";
import { PatientEmptyState, PatientFormValues } from "../../../model/patient.model";
import { yupResolver } from "@hookform/resolvers/yup";
import { PatientFormSchema } from "../schemas/add-patient-form-schema";
import NavigateButton from "../../../containers/Buttons/NavigateButton";
import CustomInput from "../../../containers/InputForm/CustomInput";
import CustomButton from "../../../containers/Buttons/CustomButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPatient } from "../../../redux/states/patient.state";
import { PublicRoutes } from "../../../model/routes";


const AddPatientForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setError] = useState(false);

    const methods = useForm<PatientFormValues>({
        defaultValues:  PatientEmptyState,
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
            setIsLoading(true)
            await dispatch(addPatient(data))
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
                    <NavigateButton path={PublicRoutes.PATIENTS} buttonText="< Volver al listado" />
                </div>

                <div className="ml-8 text-3xl font-medium text-pink-400">Registrar paciente</div>

                <div className="flex justify-center container self-center">
                    <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-6 mt-20 sm:w-8/12 p-8 sm:p-4">
                        <div className="flex flex-col sm:flex-row gap-8">
                            <CustomInput type="text" name="firstName" label="Nombres *" required={true} />
                            <CustomInput type="text" name="lastName" label="Apellidos *" required={true} />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-8">
                            <CustomInput type="text" name="identification" label="Identificación" />
                            <CustomInput type="date" name="birthday" label="Fecha de nacimiento" />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-8">
                            <CustomInput type="text" name="bloodType" label="Tipo de sangre" />
                            <CustomInput type="text" name="phone" label="Teléfono" />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-8">
                            <CustomInput type="email" name="email" label="Correo electrónico *" required={true} />
                        </div>
                        <CustomInput type="textarea" name="symptoms" label="Síntomas *" required={true} />
                        <CustomButton isDirty={isDirty} isValid={isValid} children={isLoading ? "Procesando..." : "Registrar"} />
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

export default AddPatientForm