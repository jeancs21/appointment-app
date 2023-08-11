import { FormProvider, useForm } from "react-hook-form";
import CustomInput from "../../containers/CustomInput"
import NavigateButton from "../../containers/NavigateButton"
import { yupResolver } from "@hookform/resolvers/yup"
import { PatientEmptyState, PatientFormValues } from "../../model/patient.model";
import { PatientFormSchema } from "./schemas/add-patient-form-schema";
import CustomButton from "../../containers/CustomButton";

const AddPatient = () => {

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


  return (
    <FormProvider {...methods}>
      <div className="flex flex-col my-12">
        <div className="mb-8 ml-4">
          <NavigateButton path="/patients" buttonText="< Volver al listado" />
        </div>

        <div className="ml-8 text-3xl font-medium">Registrar paciente</div>

        <div className="flex justify-center">
          <form className="flex flex-col gap-4 mt-20">
            <CustomInput type="text" name="firstName" label="Nombres" required={true} />
            <CustomInput type="text" name="lastName" label="Apellidos" required={true} />
            <CustomInput type="text" name="identification" label="Identificación" />
            <CustomInput type="date" name="birthday" label="Fecha de nacimiento" />
            <CustomInput type="text" name="bloodType" label="Tipo de sangre" />
            <CustomInput type="text" name="phone" label="Teléfono" />
            <CustomInput type="email" name="email" label="Correo electrónico" required={true} />
            <CustomInput type="textarea" name="symptoms" label="Síntomas" required={true} />
            <CustomButton isDirty={isDirty} isValid={isValid} children="Registrar" />
          </form>
        </div>
      </div>
    </FormProvider>
  )
}

export default AddPatient