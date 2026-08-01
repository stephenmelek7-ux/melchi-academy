import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

// Public Pages
import Home from './pages/public/Home'
import About from './pages/public/About'
import Contact from './pages/public/Contact'
import VisionMission from './pages/public/VisionMission'
import CoreValues from './pages/public/CoreValues'
import History from './pages/public/History'
import ProprietorWelcome from './pages/public/ProprietorWelcome'
import PrincipalWelcome from './pages/public/PrincipalWelcome'
import AcademicProgrammes from './pages/public/AcademicProgrammes'
import Admissions from './pages/public/Admissions'
import Gallery from './pages/public/Gallery'
import NewsEvents from './pages/public/NewsEvents'
import Calendar from './pages/public/Calendar'
import FAQ from './pages/public/FAQ'
import Prospectus from './pages/public/Prospectus'

// Auth Pages
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ForgotPassword from './pages/auth/ForgotPassword'

// Admin Layout & Pages
import AdminLayout from './layouts/AdminLayout'
import AdminDashboard from './pages/admin/Dashboard'
import AdminContent from './pages/admin/AdminContent'
import AdminUsers from './pages/admin/AdminUsers'
import AdminApprovals from './pages/admin/AdminApprovals'
import AdminStudents from './pages/admin/AdminStudents'
import AdminTeachers from './pages/admin/AdminTeachers'
import AdminClasses from './pages/admin/AdminClasses'
import AdminSubjects from './pages/admin/AdminSubjects'
import AdminFees from './pages/admin/AdminFees'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/core-values" element={<CoreValues />} />
          <Route path="/history" element={<History />} />
          <Route path="/proprietor-welcome" element={<ProprietorWelcome />} />
          <Route path="/principal-welcome" element={<PrincipalWelcome />} />
          <Route path="/academic-programmes" element={<AcademicProgrammes />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/prospectus" element={<Prospectus />} />

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="content" element={<AdminContent />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="approvals" element={<AdminApprovals />} />
            <Route path="students" element={<AdminStudents />} />
            <Route path="teachers" element={<AdminTeachers />} />
            <Route path="classes" element={<AdminClasses />} />
            <Route path="subjects" element={<AdminSubjects />} />
            <Route path="fees" element={<AdminFees />} />
          </Route>
        </Routes>
        <Toaster position="top-right" />
      </div>
    </Router>
  )
}

export default App
