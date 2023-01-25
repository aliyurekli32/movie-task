import {Button,Card} from 'react-bootstrap';
import { BsStarFill,BsStarHalf } from 'react-icons/bs';







const MCard = ({item}) => {
 const {Title,Poster,imdbRating,Year,Genre,Plot}=item



const arr_Rating=Array.from({length: Math.floor(Number(imdbRating))}, (_, i) => i + 1)

 const rest_Rating=Array.from({length: (10-(Number(imdbRating) % 1 === 0 ? arr_Rating.length : !(isNaN(Number(imdbRating) % 1)) ? arr_Rating.length+1  : 0 ))}, (_, i) => i + 1)
  return (
    <>
     <Card 
       className='h-100 col-sm-12 col-md-6 col-lg-4 p-1'>
      <Card.Img className='card-image' variant="top" src={Poster} />
      
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
         {Plot}
        </Card.Text>
        </div>
        
        <div >
        <Button variant="primary">Update</Button>
        <Button variant="danger">Delete</Button>
        </div>
        
      </Card.Body>
    </Card>


    </>
  )
}

export default MCard



