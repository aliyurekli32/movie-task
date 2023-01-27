import React from 'react'
import { Card } from 'react-bootstrap'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'

const SCard = ({item}) => {
const {Title,Poster,imdbRating,Year,Genre,Plot,imdbID}=item
const notFoundImg="https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131__340.png"
const arr_Rating=Array.from({length: Math.floor(Number(imdbRating))}, (_, i) => i + 1)
 const rest_Rating=Array.from({length: (10-(Number(imdbRating) % 1 === 0 ? arr_Rating.length : !(isNaN(Number(imdbRating) % 1)) ? arr_Rating.length+1  : 0 ))}, (_, i) => i + 1)
 console.log(Poster)
 return (
    <Card 
       className=' '>
      <Card.Img className='card-image-s' variant="top" src={Title ? (Poster==="N/A" ? "https://cdn.pixabay.com/photo/2016/04/14/07/50/film-1328405_960_720.jpg" : Poster ) : notFoundImg} />
      
      <Card.Body >
      <div>
        {arr_Rating.map((item)=>{
          return(
            <span><BsStarFill className='star'/></span>
          )
        })}
        {
          Number(imdbRating) % 1 !== 0 && !(isNaN(Number(imdbRating) % 1)) && <span><BsStarHalf className='star'/></span>
        }
        {
          rest_Rating.map((item)=>{
            return <span><BsStarFill/></span>
          })
        }
          
      </div>
        <Card.Title className='card-tit' >{Title}</Card.Title>
        <div className='ht'>
        <Card.Text >
         {Title ? Plot : "Movie is not Found please try different Film name to search"}
        </Card.Text>
        </div>
      </Card.Body>
    </Card>
  )
}

export default SCard