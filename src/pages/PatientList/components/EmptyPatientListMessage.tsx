import EmptyStateMessage from "../../../containers/Messages/EmptyStateMessage"
import { PublicRoutes } from "../../../model/routes"

const EmptyPatientListMessage = () => {
  return (
    <>
        <EmptyStateMessage
            message="Actualmente no se encuentran pacientes registrados"
            routePath={PublicRoutes.ADD_PATIENT}
            buttonTitle="Registrar paciente"
        />
    </>
  )
}

export default EmptyPatientListMessage