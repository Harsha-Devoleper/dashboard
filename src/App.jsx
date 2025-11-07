import React from 'react'
import LandingPage from './vendorDashboard/pages/LandingPage.jsx'
import NotFound from './vendorDashboard/components/NotFound.jsx'
import { Routes, Route } from 'react-router-dom'

import "./App.css"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default App