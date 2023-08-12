import React from 'react'
import EmptyPatientListMessage from './components/EmptyPatientListMessage'
import { AppStore } from '../../redux/store'
import { useSelector } from 'react-redux'
import PatientTable from './components/PatientTable'

const PatientList = () => {

  const patientList = useSelector((store: AppStore) => store.patient)

  return (
    <>
      <div className='flex flex-col my-12'>
        <div className='ml-8 text-3xl font-medium text-pink-400 mb-24'>Listado de pacientes</div>
        {patientList.length > 0 ?
          <div className='container self-center'>
            <PatientTable patients={patientList} />
          </div>
          :
          <div className='container self-center w-2/4'>
            <EmptyPatientListMessage />
          </div>
        }
      </div>
    </>
  )
}

export default PatientList