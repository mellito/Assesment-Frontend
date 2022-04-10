import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HOME_ROUTER, PRODUCT_DETAILS, ABOUT } from "../../Constants/Routes"
import Navbar from "../Navbar"

function Mainrouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={HOME_ROUTER} element="{<Home />}" />
        <Route path={PRODUCT_DETAILS} element="{<CreatePerson />}" />
        <Route path={ABOUT} element="{<CreatePerson />}" />
        <Route path="invoices" element="" />
      </Routes>
    </BrowserRouter>
  )
}

export default Mainrouter
