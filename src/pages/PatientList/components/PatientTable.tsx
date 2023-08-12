import React, { FunctionComponent, useState } from 'react'
import { PatientEmptyState, PatientFormValues } from '../../../model/patient.model'
import { EyeIcon, PencilSquareIcon } from '@heroicons/react/20/solid';
import { TrashIcon } from '@heroicons/react/24/solid';
import PatientDetails from '../Dialog/PatientDetails';

type Props = {
  patients: PatientFormValues[];
}

const PatientTable:FunctionComponent<Props> = (props) => {

  const [selectedPatient, setSelectedPatient] = useState<PatientFormValues>(PatientEmptyState);

  const [isOpen, setOpen] = useState(false);

  const handleClick = (patient: PatientFormValues) => {
    setSelectedPatient(patient)
    setOpen(true)
    console.log("paciente", patient)
  }

  const closeModal = () => {
    setOpen(false)
  }

  return (
    <>
      <table className='w-full border-4 border-pink-100 text-left'>
        <thead className='bg-pink-400'>
          <tr className='text-white'>
            <th className='border-2 py-4 px-4'>ID</th>
            <th className='border-2 px-4'>Nombres</th>
            <th className='border-2 px-4'>Apellidos</th>
            <th className='border-2 px-4'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {props.patients.map((patient) => (
            <tr key={patient.id} className='border-2 cursor-pointer hover:bg-slate-100 hover:font-medium'>
              <td className=' py-4 px-4 border-2'>{patient.id}</td>
              <td className='border-2 px-4'>{patient.firstName}</td>
              <td className='border-2 px-4'>{patient.lastName}</td>
              <td className='border-2 px-4'>
                <div className='flex gap-8'>
                  <EyeIcon className='w-8 h-8 m-0 fill-pink-400 cursor-pointer hover:fill-pink-600 duration-300' onClick={() => handleClick(patient)} />
                  <PencilSquareIcon className='w-8 h-8 m-0 fill-pink-400 cursor-pointer hover:fill-pink-600 duration-300'/>
                  <TrashIcon className='w-8 h-8 m-0 fill-pink-400 cursor-pointer hover:fill-pink-600 duration-300' />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <PatientDetails isOpen={isOpen} closeModal={closeModal} selectedPatient={selectedPatient} />
    </>
  )
}

export default PatientTable