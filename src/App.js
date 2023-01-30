

import { useEffect } from 'react';
import './App.css';
import AppRouter from './router/AppRouter';
import { useSelector } from 'react-redux';

function App() {
  const {data}=useSelector(state=>state)

  useEffect(()=>{
    window.localStorage.setItem("data",JSON.stringify(data))
   
  },[data])
  
  return (<>
    <AppRouter/> 
    </>
  );
}

export default App;
