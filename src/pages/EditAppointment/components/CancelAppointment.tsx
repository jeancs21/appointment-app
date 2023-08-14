import React, { FunctionComponent } from 'react'
import { AppointmentStatusEnum } from '../../../model/enums/appointmentStatus.enum'

type Props = {
    status: AppointmentStatusEnum,
    handleModal: () => void,
    isCancelled?: boolean
}

const CancelAppointment:FunctionComponent<Props> = (props) => {
  return (
    <>
        <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row justify-between mb-8">
            <div className="flex flex-col gap-2">
                <label className="font-medium text-pink-400">Estatus</label>
                <p className="font-medium">{props.status}</p>
            </div>
            <button
                type='button'
                className={`self-center flex items-center justify-center w-36 p-2 border text-center text-base rounded-full bg-red-500 text-white ${!props.isCancelled ? "hover:bg-red-400" : "opacity-30"}  duration-300 cursor-pointer`}
                onClick={() => props.handleModal()}
                disabled={props.isCancelled}
            >
                {props.isCancelled ? "Cancelada" : "Cancelar"}
            </button>
        </div>
    </>
  )
}

export default CancelAppointment