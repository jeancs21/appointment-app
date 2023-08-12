import React, { Fragment, FunctionComponent } from 'react'
import { PatientFormValues } from '../../../model/patient.model'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/20/solid'

type Props = {
    isOpen: boolean,
    closeModal: () => void,
    selectedPatient: PatientFormValues
}

const PatientDetails:FunctionComponent<Props> = (props) => {
  return (
    <>
        <Transition appear show={props.isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={props.closeModal}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <div className='flex float-right cursor-pointer' onClick={props.closeModal}>
                            <XMarkIcon className='w-6 h-6' />
                        </div>
                        <Dialog.Title
                            as="h3"
                            className="text-xl sm:text-2xl font-semibold leading-6 text-gray-900 mb-8"
                        >
                            Datos del paciente
                        </Dialog.Title>
                        <div className='flex flex-col gap-6 text-center sm:text-left'>
                            <div className='flex flex-col gap-2'>
                                <label className='text-pink-400 font-medium'>Nombre completo</label>
                                <p>{`${props.selectedPatient.firstName} ${props.selectedPatient.lastName}`}</p>
                            </div>
                            <div className=''>
                                <label className='text-pink-400 font-medium'>Identificación</label>
                                <p>{props.selectedPatient.identification}</p>
                            </div>
                            <div className=''>
                                <label className='text-pink-400 font-medium'>Fecha de nacimiento</label>
                                <p>{props.selectedPatient.birthday}</p>
                            </div>
                            <div className=''>
                                <label className='text-pink-400 font-medium'>Síntomas</label>
                                <p>{props.selectedPatient.symptoms}</p>
                            </div>
                            <div className=''>
                                <label className='text-pink-400 font-medium'>Tipo de sangre</label>
                                <p>{props.selectedPatient.bloodType}</p>
                            </div>
                            <div className=''>
                                <label className='text-pink-400 font-medium'>Teléfono</label>
                                <p>{props.selectedPatient.phone}</p>
                            </div>
                            <div className=''>
                                <label className='text-pink-400 font-medium'>Correo electrónico</label>
                                <p>{props.selectedPatient.email}</p>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </Dialog>
        </Transition>
    </>
  )
}

export default PatientDetails