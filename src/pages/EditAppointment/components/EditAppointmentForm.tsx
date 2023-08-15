import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppStore } from "../../../redux/store";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { AppointmentFormValues } from "../../../model/appointment.model";
import { PublicRoutes } from "../../../model/routes";
import NavigateButton from "../../../containers/Buttons/NavigateButton";
import CustomInput from "../../../containers/InputForm/CustomInput";
import CustomSelect from "../../AddAppointment/components/InputForm/CustomSelect";
import CustomButton from "../../../containers/Buttons/CustomButton";
import { updateAppointment } from "../../../redux/states/appointment.state";
import CancelAppointment from "./CancelAppointment";
import { AppointmentStatusEnum } from "../../../model/enums/appointmentStatus.enum";
import ConfirmationModal from "../../../containers/Modals/ConfirmationModal";

const EditAppointmentForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const appointments = useSelector((store: AppStore) => store.appointment)

  const filteredAppointment = appointments.filter(appointment => appointment.id === id ?? "")

  const appointmentValue = filteredAppointment[0]


  const patientList = useSelector((store: AppStore) => store.patient)

  const [isError, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [openModal, setOpenModal] = useState(false)
  const [isCancel, setCancel] = useState(false)

  const handleModal = () => {
    setOpenModal(true)
  }

  const handleCancel = () => {
    setCancel(true)
  }

  const methods = useForm<AppointmentFormValues>({
    defaultValues:  appointmentValue,
    mode: "onChange",
    //resolver: yupResolver(AppointmentFormSchema)
});

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = methods

  const submit = async (data: AppointmentFormValues) => {
    try {
        setIsLoading(true);

        let updatedAppointment = { ...appointmentValue };

        if (isCancel) {
            updatedAppointment.status = AppointmentStatusEnum.Cancelado;
        } else {
            if (data.patient) {
                const selectedPatient = patientList.find(patient => patient.id === data.patient);
                if (selectedPatient) {
                    const newAppointmentData = {
                        patient: `${selectedPatient.firstName} ${selectedPatient.lastName}`
                    };
                    updatedAppointment = { ...updatedAppointment, ...newAppointmentData };
                }
            }

            if (data.appointmentDate) {
                updatedAppointment.appointmentDate = data.appointmentDate;
            }
        }

        await dispatch(updateAppointment(updatedAppointment));
        setIsLoading(false);

        setTimeout(() => {
            navigate(PublicRoutes.APPOINTMENTS);
        }, 500);
    } catch (error) {
        console.log(error);
        setError(true);
    }
};


  return (
    <>
      <FormProvider {...methods}>
        <div className="flex flex-col my-12">
          <div className="mb-8 ml-4">
            <NavigateButton path={PublicRoutes.APPOINTMENTS} buttonText="< Volver al listado" />
          </div>

          <div className="ml-8 text-3xl font-medium text-pink-400">Editar datos de la cita</div>

          <div className="flex justify-center container self-center">
            <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-6 mt-20 sm:w-8/12 p-8 sm:p-4" id="appointment-edit-form">
              <div className="flex flex-col sm:flex-row gap-8">
                <CustomInput type="datetime-local" name="appointmentDate" label="Fecha *" required={true} defaultValues={appointmentValue.appointmentDate} disabled={appointmentValue.status === AppointmentStatusEnum.Cancelado} />
                <CustomSelect name="patient" label="Paciente *" required={true} patients={patientList} defaultValue={appointmentValue.patient} isEditing={true} isCancelled={appointmentValue.status === AppointmentStatusEnum.Cancelado}  />
              </div>
              <CancelAppointment status={appointmentValue.status} handleModal={handleModal} isCancelled={appointmentValue.status === AppointmentStatusEnum.Cancelado} />
              <CustomButton isDirty={isDirty} isValid={isValid} children={isLoading ? "Procesando..." : "Guardar cambios"} isCancelled={appointmentValue.status === AppointmentStatusEnum.Cancelado} />
              <ConfirmationModal
                isOpen={openModal}
                closeModal={setOpenModal}
                handleSubmitButton={handleCancel}
                form={"appointment-edit-form"}
                label="Está seguro de cancelar esta cita?"
                confirmButtonText="Sí, cancelar"
                confirmButtonStyle="bg-red-500 hover:bg-red-600 text-white"
                cancelButtonText="No"
                cancelButtonStyle="bg-slate-300 hover:bg-slate-400"
              />
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

export default EditAppointmentForm