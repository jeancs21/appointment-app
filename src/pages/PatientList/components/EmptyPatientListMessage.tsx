import EmptyStateMessage from "../../../containers/EmptyStateMessage"

const EmptyPatientListMessage = () => {
  return (
    <>
        <EmptyStateMessage
            message="Actualmente no se encuentran pacientes registrados"
            routePath="/add-patient"
            buttonTitle="Registrar paciente"
        />
    </>
  )
}

export default EmptyPatientListMessage