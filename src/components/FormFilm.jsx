import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getMovie } from '../store/get-Movie'

const FormFilm = () => {
   const [sFilm,setSfilm]=useState("")
   const dispatch=useDispatch()
   const handleFilm=(e)=>{
    e.preventDefault()
     dispatch(getMovie(sFilm))
   } 
  return (
    <div>
        <form onSubmit={handleFilm} action="">
            <label htmlFor="search-film">Search Film</label>
            <input onChange={(e)=>setSfilm(e.target.value)} id='search-film' name='search-film' value={sFilm}  type="text"/>
            <button type='submit'>Search Film</button>
        </form>
    </div>
  )
}

export default FormFilm