import React from 'react'
import { SNavbar } from '../../components/seller'
import { Routes } from 'react-router-dom'
import {SellerHome} from '../../pages/seller'
import { Footer } from '../../components'

export function SDashboard() {
  return (<>
    <SNavbar/>
    <SellerHome/>
    <Footer/>
    </>
  )
}

export default SDashboard