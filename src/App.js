import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Courses from './components/Courses';
import Pyqs from './components/Pyqs';
import ConductExam from './components/ConductExam';
import Pricing from './components/Pricing';
import ContactUs from './components/ContactUs';
import Results from './components/Results';
import ExamPage from './components/ExamPage';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';
import Ai from './components/Ai';
import Tasks from './components/Tasks';
import Pdfs from './components/Pdfs';

function App() {
  const location = useLocation();
  const isFullScreenPage = location.pathname.startsWith('/exam') || location.pathname === '/result' || location.pathname === '*';
  const isLoginOrSignupPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="flex">
      {!isFullScreenPage && !isLoginOrSignupPage && <Sidebar />}
      <div className={!isFullScreenPage ? 'flex-1 ml-64' : 'flex-1'}>
        {!isFullScreenPage && !isLoginOrSignupPage && <Navbar />}
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/quiz" element={<ConductExam />} />
            <Route path="/exam/:subject" element={<FullScreenWrapper><ExamPage /></FullScreenWrapper>} />
            <Route path="/result" element={<FullScreenWrapper><Results /></FullScreenWrapper>} />
            <Route path="/pdfs" element={<Pdfs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/ai" element={<Ai />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/login" element={<FullScreenWrapper><Login /></FullScreenWrapper>} />
            <Route path="/register" element={<FullScreenWrapper><Register /></FullScreenWrapper>} />
            <Route path="*" element={<FullScreenWrapper><NotFound /></FullScreenWrapper>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

const FullScreenWrapper = ({ children }) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default App;
