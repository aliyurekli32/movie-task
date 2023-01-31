import { useDispatch } from "react-redux";
import { deleteMovie } from "../store/movieData-Slice";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const DeleteModal=({item,show,handleClose})=> {
    const dispatch=useDispatch()
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure to delete this movie !</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Go back
            </Button>
            <Button onClick={()=>{dispatch(deleteMovie(item));handleClose()}}  variant="primary" >
             Just Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default DeleteModal