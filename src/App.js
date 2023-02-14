

import { useEffect } from 'react';
import './App.css';
import AppRouter from './router/AppRouter';
import { useSelector } from 'react-redux';

function App() {
  const {data,auth}=useSelector(state=>state)

  useEffect(()=>{
    window.localStorage.setItem("data",JSON.stringify(data))
    window.localStorage.setItem("auth",JSON.stringify(auth))
    
   
  },[data,auth])


  return (<>
    <AppRouter/> 
    </>
  );
}

export default App;
