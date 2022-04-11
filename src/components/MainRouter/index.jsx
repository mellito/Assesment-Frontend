import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../../pages/Home"
import { HOME_ROUTER, PRODUCT_DETAILS, ABOUT } from "../../Constants/Routes"
import ProducDetails from "../../pages/ProducDetails"
import Navbar from "../Navbar"

function Mainrouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={HOME_ROUTER} element={<Home />} />
        <Route path={`${PRODUCT_DETAILS}/:id`} element={<ProducDetails />} />
        <Route path={ABOUT} element="{<CreatePerson />}" />
      </Routes>
    </BrowserRouter>
  )
}

export default Mainrouter
