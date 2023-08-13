import { FunctionComponent } from "react"
import { AppointmentFormValues } from "../../../model/appointment.model"
import { PublicRoutes } from "../../../model/routes";
import NavigateButton from "../../../containers/Buttons/NavigateButton";
import { Link } from "react-router-dom";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/20/solid";

type Props = {
    appointments: AppointmentFormValues[];
}

const AppointmentContainer:FunctionComponent<Props> = (props) => {
  return (
    <>
        <div className="flex w-full justify-end mb-6">
            <NavigateButton path={PublicRoutes.ADD_APPOINTMENT} buttonText="Agendar cita" />
        </div>
        <div className='flex flex-col justify-center container w-full'>
            {
                props.appointments.map((appointment) => {
                    return (
                        <div
                            key={appointment.id}
                            className="flex justify-evenly gap-24 bg-pink-400 p-4 m-4 rounded-md drop-shadow-xl hover:scale-105 duration-300 cursor-pointer items-center"
                        >
                            <p className="text-white">{appointment.id}</p>
                            <p className="text-white">{appointment.appointmentDate}</p>
                            <p className="text-white">{appointment.status}</p>
                            <div className='flex gap-8'>
                                <Link to={`#`}>
                                    <PencilSquareIcon className='w-8 h-8 m-0 fill-white cursor-pointer hover:fill-slate-300 duration-300'/>
                                </Link>
                                <TrashIcon className='w-8 h-8 m-0 fill-white cursor-pointer hover:fill-slate-300 duration-300' />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default AppointmentContainer