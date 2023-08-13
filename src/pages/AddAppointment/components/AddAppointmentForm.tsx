import { FormProvider, useForm } from "react-hook-form"
import { AppointmentEmptyState, AppointmentFormValues } from "../../../model/appointment.model"
import { yupResolver } from "@hookform/resolvers/yup"
import { AppointmentFormSchema } from "../schemas/create-appointment-form-schema"
import NavigateButton from "../../../containers/Buttons/NavigateButton"
import { PublicRoutes } from "../../../model/routes"
import CustomInput from "../../../containers/InputForm/CustomInput"
import CustomButton from "../../../containers/Buttons/CustomButton"
import { useState } from "react"
import { useSelector } from "react-redux"
import { AppStore } from "../../../redux/store"
import CustomSelect from "./InputForm/CustomSelect"

const AddAppointmentForm = () => {

  const patientList = useSelector((store: AppStore) => store.patient)

  const [isError, setError] = useState(false)

  const methods = useForm<AppointmentFormValues>({
    defaultValues:  AppointmentEmptyState,
    mode: "onChange",
    //resolver: yupResolver(AppointmentFormSchema)
});

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset
  } = methods

  const submit = async (data: AppointmentFormValues) => {
    try {
      console.log(data)
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <FormProvider {...methods}>
        <div className="flex flex-col my-12">
          <div className="mb-8 ml-4">
            <NavigateButton path={PublicRoutes.APPOINTMENTS} buttonText="< Volver al listado" />
          </div>

          <div className="ml-8 text-3xl font-medium text-pink-400">Agendar cita</div>

          <div className="flex justify-center container self-center">
            <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-6 mt-20 sm:w-8/12 p-8 sm:p-4">
              <div className="flex flex-col sm:flex-row gap-8">
                <CustomInput type="datetime-local" name="appointmentDate" label="Fecha *" required={true} />
                <CustomSelect name="patient" label="Paciente *" required={true} items={patientList} />
              </div>
              <CustomButton isDirty={isDirty} isValid={isValid} children={"Agendar"} />
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

export default AddAppointmentForm