import { useDispatch, useSelector } from "react-redux"
import Cards from "../components/Cards"
import { saveUser } from "../store/auth-slice"
import { useEffect } from "react"
import FormFilm from "../components/FormFilm"
import {addMovie} from "../store/movieData-Slice"




const Home = () => {
    const dispatch=useDispatch()
    const {auth,movie,data}=useSelector(state=>state)

    const getMovie=async()=>{
        // const res=await fetch("http://www.omdbapi.com/?i=tt0113375&plot=full&apikey=7d5a0125").then(res=>res.json()).then(data=>console.log(data))
        const res=await fetch("http://www.omdbapi.com/?t=matrix&plot=full&apikey=7d5a0125").then(res=>res.json()).then(data=>console.log(data))
    }

    useEffect(() => {
      
    }, [])
    

    console.log(data)
  return (
    <div>
        <Cards/>
        <FormFilm/>
        <button onClick={()=>{dispatch(addMovie(movie.movie))}} >addMovie</button>
        {/* <button onClick={()=>dispatch(saveUser(user1))} >Veri gönder</button>
        <button onClick={()=>getMovie()} >Get Movie</button> */}
    </div>
  )
}

export default Home