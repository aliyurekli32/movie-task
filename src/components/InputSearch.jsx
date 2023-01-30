import Form from 'react-bootstrap/Form';

function InputSearch() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Search Movie DB</Form.Label>
        <Form.Control type="text" placeholder="ice age" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Search IMDB Rating </Form.Label>
        <Form.Control type="text" placeholder="6" />
      </Form.Group>
    </Form>
  );
}

export default InputSearch;