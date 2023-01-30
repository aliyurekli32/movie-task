import Form from 'react-bootstrap/Form';

const SearchSelect=({uniqGenre,uniqYears})=> {
  return (<>
    <Form.Select className='my-2' aria-label="Search Select">
      {
        uniqGenre && 
        <>
      <option>Choose Genre</option>
      {uniqGenre?.map((item,index)=>{
        return(
         
          <option key={index} value={item}>{item}</option>
         
        )
      })}
      </>
      }

      {
        uniqYears && 
        <>
      <option>Choose Year</option>
      {uniqYears?.map((item,index)=>{
        return(
        
          <option key={index} value={item}>{item}</option>
          
        )
      })}
      </>
      }
      
    </Form.Select>
    </>
  );
}

export default SearchSelect;