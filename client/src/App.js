
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgotPassword from './components/auth/Patient/ForgotPassword';
import Otp from './components/Signup-Login-Pages/Otp';
import Dashboard from './components/Dashboard/Dashboard';
import DoctorDashboard from './components/Dashboard/DoctorDashboard';
import PatientDashboard from './components/Dashboard/PatientDashboard';
import DoctorManagement from './components/Dashboard/DoctorManagement';
import AddDoctor from './components/Dashboard/AddDoctor';
import UserProfile from './components/profile/UserProfile';
import ProfileChnagepassword from './components/profile/ProfileChnagepassword';
import TermsAndCondition from './components/profile/TermsAndCondition';
import PrivacyPolicy from './components/profile/PrivacyPolicy';
import AdminLogin from './components/auth/Admin/AdminLogin';
import PatientSignup from './components/auth/Patient/PatientSignup';
import DoctorLogin from './components/auth/Doctor/DoctorLogin';
import AdminSignup from './components/auth/Admin/AdminSignup';
import PatientLogin from './components/auth/Patient/PatientLogin';
import CreateBillForm from './components/Dashboard/CreateBillForm';
import ChangeInvoiceForm from './components/Dashboard/ChangeInvoiceForm';
import InsuranceClaimsTable from './components/Dashboard/InsuranceClaimsTable';
import BillingDetailsTable from './components/Dashboard/BillingDetailsTable';
import { ReportingDashboard } from './components/Dashboard/ReportingDashboard';
import FormAddDoctor from './components/Dashboard/FormAddDoctor';
import DoctureAppointmentManagement from './components/DoctorPanel/DoctureAppointmentManagement';
import DoctureChat from './components/DoctorPanel/DoctureChat';
import DoctorTeleconsultation from './components/DoctorPanel/DoctorTeleconsultation';
import DoctorPatientRecord from './components/DoctorPanel/DoctorPatientRecord';
import Doctorprescriptiontools from './components/DoctorPanel/Doctorprescriptiontools';
import PrescriptionToolsManage from './components/DoctorPanel/PrescriptionToolsManage';
import PatientHelthRecord from './components/PatientPanel/PatientHelthRecord';
import PatientChat from './components/PatientPanel/PatientChat';
import PatientAppointmentBooking from './components/PatientPanel/PatientAppointmentBooking';
import PationTeleconsultation from './components/PatientPanel/PationTeleconsultation';
import PationBill from './components/PatientPanel/PationBill';
import PrescriptionAccess from './components/PatientPanel/PrescriptionAccess';
import PaymentProcess from './components/Dashboard/PaymentProcess';
import Reportingandanalytics from './components/Dashboard/Reportingandanalytics';
import MonitorBilling from './components/Dashboard/MonitorBilling';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          {/* Auth */}
          <Route path='/' Component={AdminLogin} />
          <Route path="/patient/signup" element={<PatientSignup />} />
          <Route path="/patient/login" element={<PatientLogin />} />

          <Route path="/doctor/login" element={<DoctorLogin />} />

          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/signup" element={<AdminSignup />} />

          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp-verification" element={<Otp />} />
          {/* --- END --- */}

          {/* Profile */}
          <Route path='/userprofile' Component={UserProfile} />
          <Route path='/Profile/chnagepassword' Component={ProfileChnagepassword} />
          <Route path='/Profile/termsandconditions' Component={TermsAndCondition} />
          <Route path='/Profile/privacypolicy' Component={PrivacyPolicy} />
          {/* --- END --- */}

          {/* Admin  Dashboard */}
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/doctordashboard' Component={DoctorDashboard} />
          <Route path='/patientdashboard' Component={PatientDashboard} />
          <Route path='/doctormanagement' Component={DoctorManagement} />
          <Route path='/adddoctor' Component={AddDoctor} />
          <Route path='/createbillform' Component={CreateBillForm} />
          <Route path='/monitorbilling' Component={MonitorBilling} />
          <Route path='/changeinvoiceform' Component={ChangeInvoiceForm} />
          <Route path='/insuranceclaims' Component={InsuranceClaimsTable} />
          <Route path='/billingdetailstable' Component={BillingDetailsTable} />
          <Route path='/reportingandanalytics' Component={Reportingandanalytics} />
          <Route path='/paymentprocess' Component={PaymentProcess} />

          {/* --- END --- */}

          {/* Docture  Dashboard */}
          {/* <Route path='/doctor/dashboard' element={<DoctorsDashboard />} /> */}
          <Route path='/doctor/dashboard' element={<DoctureAppointmentManagement />} />
          <Route path='/doctor/dashboard/appointment/management' element={<DoctureAppointmentManagement />} />
          <Route path='/doctor/chat' element={<DoctureChat />} />
          <Route path='/doctor/teleconsultation' element={<DoctorTeleconsultation />} />
          <Route path='/doctor/patient/record' element={<DoctorPatientRecord />} />
          <Route path='/doctor/prescription/tools' element={<Doctorprescriptiontools />} />
          <Route path='/doctor/prescription/tools/manage' element={<PrescriptionToolsManage />} />
          {/* --- END --- */}

          {/* Patient Dashboard */}
          <Route path='/patient/helth/record/dashboard' element={<PatientHelthRecord />} />
          <Route path='/patient/chat' element={<PatientChat />} />
          <Route path='/patient/appointment/booking' element={<PatientAppointmentBooking />} />
          <Route path='/patient/teleconsultation' element={<PationTeleconsultation /> }/>
          <Route path='/patient/bills' element={<PationBill />} />
          <Route path='/patient/access' element={<PrescriptionAccess />} />
          {/* --- END --- */}


        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
