import { FunctionComponent, useState } from 'react'
import { PatientEmptyState, PatientFormValues } from '../../../model/patient.model'
import { EyeIcon, PencilSquareIcon } from '@heroicons/react/20/solid';
import { TrashIcon } from '@heroicons/react/24/solid';
import PatientDetails from '../Dialog/PatientDetails';
import NavigateButton from '../../../containers/Buttons/NavigateButton';
import { PublicRoutes } from '../../../model/routes';
import { Link } from 'react-router-dom';
import ConfirmationModal from '../../../containers/Modals/ConfirmationModal';
import { useDispatch } from 'react-redux';
import { deletePatient } from '../../../redux/states/patient.state';
import { deleteDbPatientState } from '../../../services/persist-data/patients/persist-patient-info.services';

type Props = {
  patients: PatientFormValues[];
}

const PatientTable:FunctionComponent<Props> = (props) => {

  const dispatch = useDispatch();

  const [selectedPatient, setSelectedPatient] = useState<PatientFormValues>(PatientEmptyState);

  const [isOpen, setOpen] = useState(false);
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const handleClick = (patient: PatientFormValues) => {
    setSelectedPatient(patient)
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  const handleConfirmationModal = (patient: PatientFormValues) => {
    setSelectedPatient(patient)
    setConfirmationModalOpen(true)
  }

  const handleDelete = () => {
    try {
      if (selectedPatient.id) {

        dispatch(deletePatient(selectedPatient.id))

        deleteDbPatientState(selectedPatient.id)

        setConfirmationModalOpen(false)

        setTimeout(() => {
          alert("Paciente eliminado")
        }, 500)
      }
    }
    catch (error) {
      console.log('Error deleting patient', error)
    }
  }

  return (
    <>
      <div className='flex w-full justify-end mb-6'>
        <NavigateButton path={PublicRoutes.ADD_PATIENT} buttonText='Registrar paciente' />
      </div>
      <table className='w-full border-4 border-pink-100 text-left'>
        <thead className='bg-pink-400'>
          <tr className='text-white'>
            <th className='border-2 px-4 py-4'>Nombres</th>
            <th className='border-2 px-4'>Apellidos</th>
            <th className='border-2 px-4'>Correo electrónico</th>
            <th className='border-2 px-4'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {props.patients.map((patient) => (
            <tr key={patient.id} className='border-2 cursor-pointer hover:bg-slate-100 hover:font-medium'>
              <td className='border-2 px-4 py-4'>{patient.firstName}</td>
              <td className='border-2 px-4'>{patient.lastName}</td>
              <td className='px-4 border-2'>{patient.email}</td>
              <td className='border-2 px-4'>
                <div className='flex gap-8'>
                  <EyeIcon
                    className='w-8 h-8 m-0 fill-pink-400 cursor-pointer hover:fill-pink-600 duration-300'
                    onClick={() => handleClick(patient)}
                  />
                  <Link to={`/edit-patient/${patient.id}`}>
                    <PencilSquareIcon className='w-8 h-8 m-0 fill-pink-400 cursor-pointer hover:fill-pink-600 duration-300'/>
                  </Link>
                  <TrashIcon className='w-8 h-8 m-0 fill-pink-400 cursor-pointer hover:fill-pink-600 duration-300' onClick={() => handleConfirmationModal(patient)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <PatientDetails isOpen={isOpen} closeModal={closeModal} selectedPatient={selectedPatient} />
      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        closeModal={setConfirmationModalOpen}
        handleSubmitButton={handleDelete}
        label='Está seguro de borrar este paciente?'
        confirmButtonText='Sí, borrar'
        confirmButtonStyle='bg-red-500 hover:bg-red-600 text-white'
        cancelButtonText='No'
        cancelButtonStyle='bg-slate-300 hover:bg-slate-400'
        showDetails={true}
        item={`${selectedPatient.firstName} ${selectedPatient.lastName}`}
      />
    </>
  )
}

export default PatientTable