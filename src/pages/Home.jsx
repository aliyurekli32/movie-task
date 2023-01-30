import { useDispatch, useSelector } from "react-redux"
import Cards from "../components/Cards"
import FormFilm from "../components/FormFilm"
import InputSearch from "../components/InputSearch"
import SearchSelect from "../components/SelectSearch"
import { uniqArr, uniqYear } from "../helper/functions"




const Home = () => {
    const dispatch=useDispatch()
    const {auth,movie,data}=useSelector(state=>state)
    const uniqGenre=uniqArr(data);
    const uniqYears=uniqYear(data)
  
    
    

   
  return (
    <div>
      <FormFilm/>
      <div>
        <InputSearch/>
        <SearchSelect uniqGenre={uniqGenre}/>
        <SearchSelect uniqYears={uniqYears}/>
      </div>
      <Cards/>
    </div>
  )
}

export default Home



   /* <button onClick={()=>dispatch(saveUser(user1))} >Veri gönder</button>
        <button onClick={()=>getMovie()} >Get Movie</button> */