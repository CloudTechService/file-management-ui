import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from "../pages/Dashboard/Dashboard"
import SignIn from '../pages/Authentication/SignIn'
import DataSetLogs from '../pages/DataSetLogs/DataSetLog'

export default function routes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/dataset-logs" element={<DataSetLogs />} />

        </Routes>
    </div>
  )
}