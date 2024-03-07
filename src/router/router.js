import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from "../pages/Dashboard/Dashboard"
import SignIn from '../pages/Authentication/SignIn'

export default function routes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sign-in" element={<SignIn />} />
        </Routes>/
    </div>
  )
}