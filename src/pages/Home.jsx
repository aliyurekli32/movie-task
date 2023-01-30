import { useDispatch, useSelector } from "react-redux"
import Cards from "../components/Cards"
import FormFilm from "../components/FormFilm"
import InputSearch from "../components/InputSearch"
import SearchSelect from "../components/SelectSearch"
import { filterMovie, uniqArr, uniqYear } from "../helper/functions"
import { useState } from "react"
import { Button } from "react-bootstrap"




const Home = () => {
  const initiaValues={
    imdbRating:"",
    Title:"",
    Year:"",
    Genre:"",
  }
    const dispatch=useDispatch()
    const {auth,movie,data}=useSelector(state=>state)
    const [filterData,setFilterData]=useState(initiaValues)
    const uniqGenre=uniqArr(data);
    const uniqYears=uniqYear(data)
    const filteredData=filterMovie(filterData,data);
    
    
    

 
  return (
    <div>
      <FormFilm/>
      <div>
        <InputSearch filterData={filterData} setFilterData={setFilterData}/>
        <SearchSelect filterData={filterData} setFilterData={setFilterData} uniqGenre={uniqGenre}/>
        <SearchSelect filterData={filterData} setFilterData={setFilterData} uniqYears={uniqYears}/>
      </div>
      <div>
      <Button onClick={()=>setFilterData(initiaValues)} style={{color:"red"}} variant="light">Clear Filter</Button>
      </div>
      <Cards filteredData={filteredData}/>
    </div>
  )
}

export default Home



   /* <button onClick={()=>dispatch(saveUser(user1))} >Veri gönder</button>
        <button onClick={()=>getMovie()} >Get Movie</button> */