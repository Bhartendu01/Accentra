import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useAuth } from './context/AuthContext';
import AppShell from './components/layout/AppShell';
import PublicLayout from './components/layout/PublicLayout';
import Home from './pages/public/Home';
import SimplePage from './pages/public/SimplePage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import OAuthSuccess from './pages/auth/OAuthSuccess';
import Dashboard from './pages/app/Dashboard';
import Courses from './pages/app/Courses';
import LessonPlayer from './pages/app/LessonPlayer';
import SpeakingPractice from './pages/app/SpeakingPractice';
import ProgressTracker from './pages/app/ProgressTracker';
import Profile from './pages/app/Profile';
import ChatbotTutor from './pages/app/ChatbotTutor';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserManagement from './pages/admin/UserManagement';
import CourseManagement from './pages/admin/CourseManagement';

function Protected({ children, admin = false }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (admin && user.role !== 'admin') return <Navigate to="/dashboard" replace />;
  return children;
}

export default function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<SimplePage title="About Accentra" kind="about" />} />
          <Route path="/features" element={<SimplePage title="Features" kind="features" />} />
          <Route path="/pricing" element={<SimplePage title="Pricing" kind="pricing" />} />
          <Route path="/contact" element={<SimplePage title="Contact" kind="contact" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/oauth/success" element={<OAuthSuccess />} />
        </Route>
        <Route element={<Protected><AppShell /></Protected>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/lessons/:id" element={<LessonPlayer />} />
          <Route path="/speaking" element={<SpeakingPractice />} />
          <Route path="/quiz" element={<LessonPlayer quizOnly />} />
          <Route path="/progress" element={<ProgressTracker />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tutor" element={<ChatbotTutor />} />
        </Route>
        <Route element={<Protected admin><AppShell admin /></Protected>}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/courses" element={<CourseManagement />} />
          <Route path="/admin/analytics" element={<AdminDashboard analytics />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
