import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import Overview from './pages/Dashboard/views/Overview'
import StudentsView from './pages/Dashboard/views/StudentsView'
import CoursesView from './pages/Dashboard/views/CoursesView'
import AttendanceView from './pages/Dashboard/views/AttendanceView'
import ResultsView from './pages/Dashboard/views/ResultsView'
import NotificationsView from './pages/Dashboard/views/NotificationsView'
import SettingsView from './pages/Dashboard/views/SettingsView'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route path="students" element={<StudentsView />} />
          <Route path="courses" element={<CoursesView />} />
          <Route path="attendance" element={<AttendanceView />} />
          <Route path="results" element={<ResultsView />} />
          <Route path="notifications" element={<NotificationsView />} />
          <Route path="settings" element={<SettingsView />} />
          {/* Fallback for unknown dashboard routes */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
