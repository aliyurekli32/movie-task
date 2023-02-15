

import { useEffect } from 'react';
import './App.css';
import AppRouter from './router/AppRouter';
import { useSelector } from 'react-redux';
import useAuth from './helper/zustand';

function App() {
  const {data,auth}=useSelector(state=>state)
  const {user,authZus} = useAuth(state=>state)

  useEffect(()=>{
    window.localStorage.setItem("data",JSON.stringify(data))
    window.localStorage.setItem("auth",JSON.stringify(auth))
    window.localStorage.setItem("user",JSON.stringify(user))
    window.localStorage.setItem("authZus",JSON.stringify(authZus))
    
   
  },[data,auth,user,authZus])


  return (<>
    <AppRouter/> 
    </>
  );
}

export default App;
