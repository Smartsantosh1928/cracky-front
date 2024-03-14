import React, { useEffect } from 'react'
import { Navbar, Footer, ShopNavbar } from '../../components'
import { Home, EditProfile, Profile, Product, Products } from '../../pages/user'
import { Routes, Route } from "react-router-dom"

export function Dashboard() {

  const [ path, setPath ] = React.useState('');
  const url = window.location.href;

  useEffect(() => {
    const path = url.split('/')[3];
    setPath(path);
  }, [url]);

  return (
    <>
        <Navbar />
        {/* Pages */}
        {path == "shop" && <ShopNavbar />}
        {/* Routes */}
        <Routes>
          {path == "user" && <>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/edit" element={<EditProfile />} />
          </>}
          {path == "shop" && <>
            <Route path="/products" element={<Products />} />
            <Route path="/product/:product_id" element={<Product />} />
          </>}
        </Routes>
        <Footer />
    </>
  )
}

export default Dashboard