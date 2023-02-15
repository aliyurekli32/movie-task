import { Col, Container, Row } from "react-bootstrap"
import MCard from "./MCard"
import { useSelector } from "react-redux"
import Modals from "./Modal"
import { useState } from "react"




const Cards = ({filteredData}) => {
  const {data}=useSelector(state => state)
  const [modalShow, setModalShow] = useState(false);
  const [modalData,setModalData]=useState({
    Title: "",
    imdbRating: "",
    imdbID: "",
  })

  
  return (
    <Container >
        <Row className="justify-content-center gap-2 mt-2">
          {
            filteredData?.map((item,index)=>{
              return(
                <MCard key={index} setModalData={setModalData} setModalShow={setModalShow} item={item}/>
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