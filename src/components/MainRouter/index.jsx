import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../../pages/Home"
import { HOME_ROUTER, PRODUCT_DETAILS, ABOUT } from "../../Constants/Routes"
import ProducDetails from "../../pages/ProducDetails"
import Navbar from "../Navbar"
import About from "../../pages/About"

function Mainrouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={HOME_ROUTER} element={<Home />} />
        <Route path={`${PRODUCT_DETAILS}/:id`} element={<ProducDetails />} />
        <Route path={ABOUT} element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Mainrouter
