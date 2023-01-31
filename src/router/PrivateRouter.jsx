import { Navigate, Outlet } from "react-router-dom";



const PrivateRouter = () => {
  let auth=true;
  
  return auth ? <Outlet/> : <Navigate to="/" />  
   
  
}

export default PrivateRouter