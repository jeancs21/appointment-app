import { Route, Routes } from 'react-router-dom';
import AppointmentList from '../pages/AppointmentList/AppointmentList';
import NotFound from '../pages/NotFound/NotFound';
import { PublicRoutes } from '../model/routes';
import PatientList from '../pages/PatientList/PatientList';
import AddPatient from '../pages/AddPatient/AddPatient';
import Menu from '../containers/Menu/Menu';
import { menuItems } from '../model/menu';
import EditPatient from '../pages/EditPatient/EditPatient';
import AddAppointment from '../pages/AddAppointment/AddAppointment';
import EditAppointment from '../pages/EditAppointment/EditAppointment';

const RouterApp = () => {
  return (
    <>
        <Menu items={menuItems} />
        <Routes>
            <Route path={"*"} element={<NotFound />} />
            <Route path={PublicRoutes.APPOINTMENTS} element={<AppointmentList />} />
            <Route path={PublicRoutes.ADD_APPOINTMENT} element={<AddAppointment />} />
            <Route path={PublicRoutes.EDIT_APPOINTMENT} element={<EditAppointment />} />
            <Route path={PublicRoutes.PATIENTS} element={<PatientList />} />
            <Route path={PublicRoutes.ADD_PATIENT} element={<AddPatient />} />
            <Route path={PublicRoutes.EDIT_PATIENT} element={<EditPatient />} />
        </Routes>
    </>
  )
}

export default RouterApp