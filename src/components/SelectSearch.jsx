import Form from 'react-bootstrap/Form';

const SearchSelect=({uniqGenre,uniqYears})=> {
  console.log(uniqGenre)
  console.log(uniqYears)
  return (<>
    <Form.Select className='my-2' aria-label="Search Select">
      {
        uniqGenre && 
        <>
      <option>Choose Genre</option>
      {uniqGenre?.map((item)=>{
        return(
          <>
          <option value={item}>{item}</option>
          </>
        )
      })}
      </>
      }
      
      {
        uniqYears && 
        <>
      <option>Choose Year</option>
      {uniqYears?.map((item)=>{
        return(
          <>
          <option value={item}>{item}</option>
          </>
        )
      })}
      </>
      }
      
    </Form.Select>
    </>
  );
}

export default SearchSelect;