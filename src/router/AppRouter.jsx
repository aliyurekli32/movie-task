import {  Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PrivateRouter from "./PrivateRouter"
import Home from "../pages/Home"
import Details from "../pages/Details"
import Login from "../pages/Login"
import Register from "../pages/Register"


const AppRouter = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Home/>} >
            <Route path="/details" element={<PrivateRouter/>} >
                <Route path="" element={<Details/>} /> 
            </Route>
        </Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default AppRouter