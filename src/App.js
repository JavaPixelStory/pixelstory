import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Portfolio from './pages/portfolio/Portfolio'
import Dashboard from './pages/dashboard/Dashboard'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
