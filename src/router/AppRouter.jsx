import {  Route, Routes } from "react-router-dom"
import NavbarR from "../components/Navbar"
import Footer from "../components/Footer"
import PrivateRouter from "./PrivateRouter"
import Home from "../pages/Home"
import Details from "../pages/Details"
import Login from "../pages/Login"
import Register from "../pages/Register"
import { Container } from "react-bootstrap"


const AppRouter = () => {
  return (
    <>
    <NavbarR/>
    <div className="container p-1">

    
    <Routes>
     
      
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/details/:id" element={<PrivateRouter/>} >
                <Route path="" element={<Details/>} /> 
        </Route>  
       
    </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default AppRouter