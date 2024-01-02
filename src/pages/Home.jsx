import React from 'react'
import { Navbar,Banner,ShopCards,Footer } from '../components'

export function Home() {

  return (
    <div>
      <Navbar />
      <Banner />
      <ShopCards/>
      <Footer />
    </div>
  )
}

export default Home