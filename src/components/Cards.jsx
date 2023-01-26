import { Col, Container, Row } from "react-bootstrap"
import MCard from "./MCard"
import { useSelector } from "react-redux"
import Modals from "./Modal"
import { useState } from "react"




const Cards = () => {
  const {data}=useSelector(state => state)
  const [modalShow, setModalShow] = useState(false);
  const [modalData,setModalData]=useState({
    Title: "",
    imdbRating: "",
    imdbID: "",
  })

  console.log(modalData)
  return (
    <Container >
        <Row className="justify-content-center gap-2">
          {
            data.map((item)=>{
              return(
                <MCard setModalData={setModalData} setModalShow={setModalShow} item={item}/>
              )
            })
          }
          
        </Row>
        <Modals
        modalData={modalData}
        setModalData={setModalData}
         show={modalShow}
         onHide={() => setModalShow(false)}
        />  
    </Container>
  )
}

export default Cards