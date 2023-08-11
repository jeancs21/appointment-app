import React, { FunctionComponent } from 'react'
import { PatientFormValues } from '../../../model/patient.model'
import { PencilSquareIcon } from '@heroicons/react/20/solid';
import { TrashIcon } from '@heroicons/react/24/solid';

type Props = {
  patients: PatientFormValues[];
}

const PatientTable:FunctionComponent<Props> = (props) => {
  return (
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
          <tr key={patient.id} className='border-2'>
            <td className=' py-4 px-4 border-2'>{patient.id}</td>
            <td className='border-2 px-4'>{patient.firstName}</td>
            <td className='border-2 px-4'>{patient.lastName}</td>
            <td className='border-2 px-4'>
              <div className='flex gap-8'>
                <PencilSquareIcon className='w-8 h-8 m-0 fill-pink-400 cursor-pointer'/>
                <TrashIcon className='w-8 h-8 m-0 fill-pink-400 cursor-pointer' />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PatientTable