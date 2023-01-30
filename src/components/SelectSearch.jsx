import Form from 'react-bootstrap/Form';

const SearchSelect=({uniqGenre})=> {
  
  return (<>
    <Form.Select aria-label="Search Select">
    <option>Choose Genre</option>
      {uniqGenre?.map((item)=>{
        return(
          <>
          <option value={item}>{item}</option>
          </>
        )
      })}
      
    </Form.Select>
    </>
  );
}

export default SearchSelect;