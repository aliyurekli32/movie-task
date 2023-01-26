import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovie } from '../store/get-Movie'
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';
import { addMovie } from '../store/movieData-Slice';

const FormFilm = () => {
  const {movie}=useSelector(state=>state)
   const [sFilm,setSfilm]=useState("")
   const dispatch=useDispatch()
   const handleFilm=(e)=>{
    e.preventDefault()
     dispatch(getMovie(sFilm))
   } 
  return (
    


<div  className="py-2 w-25">
<Form onSubmit={handleFilm} >
<Form.Label htmlFor="search-film">Search Film: </Form.Label>
<Form.Control
 name='search'
  type="text"
  id="search-film"
  onChange={(e)=>setSfilm(e.target.value)} value={sFilm}

  
/>
<Button className='btn btn-info ms-2 mt-2' type='submit'>Search Film</Button>
<Button onClick={()=>dispatch(addMovie(movie.movie))} className='btn btn-success ms-2 mt-2' type='button'>Add Film</Button>
</Form>
</div>

   
  )
}

export default FormFilm





