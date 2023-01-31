import { useLocation, useParams } from "react-router-dom"
import { Card, Row } from "react-bootstrap";

const Details = () => {
  const {id}=useParams();
  const location=useLocation();
  const{Actors,Awards,BoxOffice,
    Country,DVD,Director,Genre,
    Language,Metascore,Plot,Poster,
    Production,Rated,Released,Response,
    Runtime,Title,Type,Website,Writer,Year,
    imdbID,imdbRating,
    imdbVotes
  }=location.state.item


  return (<>
    <Row className="">
    <Card className=" text-white col-8 h-75 mx-auto poster">
      
      <Card.Img className="poster"  src={Poster} alt="Card image" />
    <Card.ImgOverlay className="poster d-flex flex-column">
      <div className="col-6 w-100 h-25">

      </div>
      <div className="mt-5 col-6">
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in
        to additional content. This content is a little bit longer.
      </Card.Text>
      <Card.Text>Last updated 3 mins ago</Card.Text>
      </div>
      
    </Card.ImgOverlay>
     
    
  </Card>
    </Row>
     
  </>
    
  )
}

export default Details