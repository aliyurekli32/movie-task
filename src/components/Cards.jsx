import { Col, Container, Row } from "react-bootstrap"
import MCard from "./MCard"
import { useSelector } from "react-redux"




const Cards = () => {
  const {data}=useSelector(state => state)

  console.log(data)
  return (
    <Container >
        <Row className="justify-content-center gap-2">
          {
            data.map((item)=>{
              return(
                <MCard item={item}/>
              )
            })
          }
          
        </Row>   
    </Container>
  )
}

export default Cards