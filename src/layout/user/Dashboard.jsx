import React from 'react'
import { Navbar, Footer } from '../../components'
import { Home, EditProfile, Profile } from '../../pages/user'
import { Routes, Route } from "react-router-dom"

export function Dashboard() {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<EditProfile />} />
        </Routes>
        <Footer />
    </>
  )
}

export default Dashboard