import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home/Home"
import SignIn from '../pages/Authentication/SignIn'

export default function routes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
        </Routes>
    </div>
  )
}