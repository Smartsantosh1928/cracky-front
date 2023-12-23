import { Home } from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
