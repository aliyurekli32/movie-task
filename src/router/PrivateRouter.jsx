import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../helper/zustand";



const PrivateRouter = () => {
  const auth=useAuth(state=>state.authZus)
  
  return auth ? <Outlet/> : <Navigate to="/" />  
   
  
}

export default PrivateRouter