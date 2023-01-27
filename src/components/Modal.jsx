import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateMovie } from '../store/movieData-Slice';

const Modals = (props) => {
    
    const dispatch=useDispatch()
    const [upData,setUpData]=useState({
        Title: props.modalData.Title,
        imdbRating: props.modalData.imdbRating,
        imdbID: props.modalData.imdbId,
    })

    useEffect(() => {
     setUpData(props.modalData)
      
    }, [props.modalData.imdbID])
    
    
    const handleUpdate=()=>{
            dispatch(updateMovie(upData))
    }
    console.log(upData)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          UPDATE FILM TITLE-IMDB RATING
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Title</InputGroup.Text>
        <Form.Control
        onChange={(e)=>{ setUpData({...upData,Title:e.target.value})}}
        value={upData.Title}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Rating</InputGroup.Text>
        <Form.Control
        onChange={(e)=>{ setUpData({...upData,imdbRating:e.target.value})}}
        value={upData.imdbRating}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button  onClick={()=>{props.onHide();handleUpdate()}}>Save</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modals