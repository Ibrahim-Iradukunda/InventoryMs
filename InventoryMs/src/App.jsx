import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import Dashboard from './pages/Dashboard';
import Attendance from './pages/Attendance';
import Reports from './pages/Reports';
import Students from './pages/Students';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Login and Register are outside the main layout */}
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

        {/* Main layout wraps protected routes */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/students" element={<Students />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;