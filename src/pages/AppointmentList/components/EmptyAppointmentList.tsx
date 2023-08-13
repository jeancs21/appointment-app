import EmptyStateMessage from "../../../containers/EmptyStateMessage"
import { PublicRoutes } from "../../../model/routes"

const EmptyAppointmentList = () => {
  return (
    <>
        <EmptyStateMessage
            message="Actualmente no se encuentran citas agendadas. Puedes agendar una ahora."
            routePath={PublicRoutes.ADD_APPOINTMENT}
            buttonTitle="Agendar cita"
        />
    </>
  )
}

export default EmptyAppointmentList