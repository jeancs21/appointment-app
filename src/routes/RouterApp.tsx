import { Route, Routes } from 'react-router-dom';
import AppointmentList from '../pages/AppointmentList/AppointmentList';
import NotFound from '../pages/NotFound/NotFound';
import { PublicRoutes } from '../model/routes';
import PatientList from '../pages/PatientList/PatientList';
import AddPatient from '../pages/AddPatient/AddPatient';

const RouterApp = () => {
  return (
    <>
        <Routes>
            <Route path={"*"} element={<NotFound />} />
            <Route path={PublicRoutes.APPOINTMENTS} element={<AppointmentList />} />
            <Route path={PublicRoutes.PATIENTS} element={<PatientList />} />
            <Route path={PublicRoutes.ADD_PATIENT} element={<AddPatient />} />
        </Routes>
    </>
  )
}

export default RouterApp