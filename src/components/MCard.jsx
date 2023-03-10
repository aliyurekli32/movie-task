import {Button,Card} from 'react-bootstrap';
import { BsStarFill,BsStarHalf } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import DeleteModal from './DeleteModal';
import { useState } from 'react';







const MCard = ({item,setModalShow,setModalData}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 const {Title,Poster,imdbRating,Year,Genre,Plot,imdbID}=item



const arr_Rating=Array.from({length: Math.floor(Number(imdbRating))}, (_, i) => i + 1)

 const rest_Rating=Array.from({length: (10-(Number(imdbRating) % 1 === 0 ? arr_Rating.length : !(isNaN(Number(imdbRating) % 1)) ? arr_Rating.length+1  : 0 ))}, (_, i) => i + 1)
  return (
    
     <Card
       className='h-100 col-sm-12 col-md-4 col-lg-3 link'>
        <Link to={`/details/${imdbID}`} state={{item}}>
        <Card.Img className='card-image' variant="top" src={Poster==="N/A" ? "https://cdn.pixabay.com/photo/2016/04/14/07/50/film-1328405_960_720.jpg" : Poster} />
        </Link>
      
      
      <Card.Body >
      <div>
        {arr_Rating.map((item,index)=>{
          return(
            <span key={index}><BsStarFill className='star'/></span>
          )
        })}
        {
          Number(imdbRating) % 1 !== 0 && !(isNaN(Number(imdbRating) % 1)) && <span><BsStarHalf className='star'/></span>
        }
        {
          rest_Rating.map((item,index)=>{
            return <span key={index}><BsStarFill/></span>
          })
        }
          
      </div>
        <Card.Title className='card-tit' >{Title}</Card.Title>
        <div className='ht'>
        <Card.Text >
         {Plot==="N/A" ? "This film doesn't have any description sorry.." : Plot}
        </Card.Text>
        </div>
        
        <div className='d-flex justify-content-center gap-1' >
        <Button  onClick={() => {setModalShow(true);setModalData({Title,imdbRating,imdbID})}} variant="primary">Update</Button>
        <Button onClick={()=>{handleShow()}} variant="danger">Delete</Button>
        </div>
        
      </Card.Body>
      <DeleteModal show={show} handleClose={handleClose} item={item.imdbID}/>
    </Card>


   
  
   
  )
}

export default MCard



