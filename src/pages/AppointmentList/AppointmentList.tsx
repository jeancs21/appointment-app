import { useSelector } from "react-redux";
import AppointmentContainer from "./components/AppointmentContainer";
import EmptyAppointmentList from "./components/EmptyAppointmentList"
import { AppStore } from "../../redux/store";

const AppointmentList = () => {

  const appointmentList = useSelector((store: AppStore) => store.appointment)

  return (
    <>
      <div className="flex flex-col my-12">
        <div className="ml-8 text-3xl font-medium text-pink-400 mb-24">Listado de citas</div>
        {appointmentList.length > 0 ?
          <div className="container self-center">
            <AppointmentContainer appointments={appointmentList} />
          </div>
          :
          <div className="container self-center w-2/4">
            <EmptyAppointmentList />
          </div>
        }
      </div>
    </>
  )
}

export default AppointmentList