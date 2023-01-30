import { useDispatch, useSelector } from "react-redux"
import Cards from "../components/Cards"
import FormFilm from "../components/FormFilm"
import InputSearch from "../components/InputSearch"
import SearchSelect from "../components/SelectSearch"
import { uniqArr, uniqYear } from "../helper/functions"
import { useState } from "react"




const Home = () => {
    const dispatch=useDispatch()
    const {auth,movie,data}=useSelector(state=>state)
    const [filterData,setFilterData]=useState({
      imdbRating:"",
      Title:"",
      Year:"",
      Genre:"",
    })
    const uniqGenre=uniqArr(data);
    const uniqYears=uniqYear(data)
  
    
    

   
  return (
    <div>
      <FormFilm/>
      <div>
        <InputSearch filterData={filterData} setFilterData={setFilterData}/>
        <SearchSelect filterData={filterData} setFilterData={setFilterData} uniqGenre={uniqGenre}/>
        <SearchSelect filterData={filterData} setFilterData={setFilterData} uniqYears={uniqYears}/>
      </div>
      <Cards/>
    </div>
  )
}

export default Home



   /* <button onClick={()=>dispatch(saveUser(user1))} >Veri gönder</button>
        <button onClick={()=>getMovie()} >Get Movie</button> */