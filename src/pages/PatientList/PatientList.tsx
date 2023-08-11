import React from 'react'
import EmptyPatientListMessage from './components/EmptyPatientListMessage'

const PatientList = () => {
  return (
    <>
      <div className='flex flex-col'>
        <div>Listado de pacientes</div>
        <div className='container self-center w-2/4'>
          <EmptyPatientListMessage />
        </div>
      </div>
    </>
  )
}

export default PatientList