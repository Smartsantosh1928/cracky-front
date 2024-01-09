import React from 'react'
import {SNavbar,SBanner,SContent} from "../components/seller"
import {Footer} from '../components'

export function SellerHome() {

  return (
    <div>
      <SNavbar/>
      <SBanner/>
      <SContent/>
      <Footer/>
    </div>
  )
}

export default SellerHome