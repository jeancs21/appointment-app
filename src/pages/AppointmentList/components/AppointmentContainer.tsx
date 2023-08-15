import { FunctionComponent, useState } from "react"
import { AppointmentEmptyState, AppointmentFormValues } from "../../../model/appointment.model"
import { PublicRoutes } from "../../../model/routes";
import NavigateButton from "../../../containers/Buttons/NavigateButton";
import { Link } from "react-router-dom";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/20/solid";
import { AppointmentStatusEnum } from "../../../model/enums/appointmentStatus.enum";
import ConfirmationModal from "../../../containers/Modals/ConfirmationModal";
import { deleteAppointment } from "../../../redux/states/appointment.state";
import { useDispatch } from "react-redux";
import { deleteDbAppointmentState } from "../../../services/persist-data/appointments/persist-appointment-info";

type Props = {
    appointments: AppointmentFormValues[];
}

const AppointmentContainer:FunctionComponent<Props> = (props) => {

    const dispatch = useDispatch();

    const [selectedAppointment, setSelectedAppointment] = useState<AppointmentFormValues>(AppointmentEmptyState);

    const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);

    const handleConfirmationModal = (appointment: AppointmentFormValues) => {
        setSelectedAppointment(appointment)
        setConfirmationModalOpen(true)
    }

    const handleDelete = () => {
        try {
          if (selectedAppointment.id) {
            console.log(selectedAppointment.id)

            if (selectedAppointment.status === AppointmentStatusEnum.Cancelado) {
                dispatch(deleteAppointment(selectedAppointment.id))
                deleteDbAppointmentState(selectedAppointment.id)
                setConfirmationModalOpen(false)
                setTimeout(() => {
                  alert("Cita eliminada")
                }, 500)
            }
            else {
                alert("Debes primero cancelar la cita!")
                setConfirmationModalOpen(false)
            }
          }
        }
        catch (error) {
          console.log('Error deleting appointment', error)
        }
    }

  return (
    <>
        <div className="flex container justify-end mb-6">
            <NavigateButton path={PublicRoutes.ADD_APPOINTMENT} buttonText="Agendar cita" />
        </div>
        <div className='flex flex-col justify-center container w-full'>
            {
                props.appointments.map((appointment) => {
                    return (
                        <div
                            key={appointment.id}
                            className="self-center flex flex-col sm:flex-row sm:justify-evenly gap-12 sm:gap-24 w-64 sm:w-full bg-slate-100 p-4 m-4 border border-pink-500 rounded-md drop-shadow-xl hover:scale-105 duration-300 cursor-pointer items-center"
                        >
                            <p className="text-pink-600">{appointment.patient}</p>
                            <p className="text-pink-600">{appointment.appointmentDate}</p>
                            <p className={`p-1 rounded-xl text-white w-24 text-center ${appointment.status === AppointmentStatusEnum.Cancelado ? 'bg-red-500' : 'bg-green-500'}`}>{appointment.status}</p>
                            <div className='flex gap-8'>
                                <Link to={`/edit-appointment/${appointment.id}`}>
                                    <PencilSquareIcon className='w-8 h-8 m-0 fill-pink-500 cursor-pointer hover:fill-pink-300 duration-300'/>
                                </Link>
                                <TrashIcon
                                    className='w-8 h-8 m-0 fill-pink-500 cursor-pointer hover:fill-pink-300 duration-300'
                                    onClick={() => handleConfirmationModal(appointment)}
                                />
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <ConfirmationModal
            isOpen={isConfirmationModalOpen}
            closeModal={setConfirmationModalOpen}
            handleSubmitButton={handleDelete}
            label="Está seguro de borrar esta cita?"
            confirmButtonText="Sí, borrar"
            confirmButtonStyle="bg-red-500 hover:bg-red-600 text-white"
            cancelButtonText="No"
            cancelButtonStyle="bg-slate-300 hover:bg-slate-400"
            showDetails={true}
            item={`Cita con: ${selectedAppointment.patient}`}
        />
    </>
  )
}

export default AppointmentContainer