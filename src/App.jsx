import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

export default function App() {
  return (
    <div className="p-4">
      <nav className="mb-4">
        <Link to="/" className="text-blue-600 hover:underline flex items-center gap-2">
          <FaHome /> Home
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1 className="text-2xl font-bold">Welcome to Media Literacy</h1>} />
      </Routes>
    </div>
  )
}
