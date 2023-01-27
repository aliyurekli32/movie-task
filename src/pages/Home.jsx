import { useDispatch, useSelector } from "react-redux"
import Cards from "../components/Cards"
import { saveUser } from "../store/auth-slice"
import { useEffect } from "react"
import FormFilm from "../components/FormFilm"
import {addMovie} from "../store/movieData-Slice"




const Home = () => {
    const dispatch=useDispatch()
    const {auth,movie,data}=useSelector(state=>state)

    
    

   
  return (
    <div>
      <FormFilm/>
      <Cards/>
    </div>
  )
}

export default Home



   /* <button onClick={()=>dispatch(saveUser(user1))} >Veri gönder</button>
        <button onClick={()=>getMovie()} >Get Movie</button> */