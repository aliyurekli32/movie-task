import Form from 'react-bootstrap/Form';

const SearchSelect=({uniqGenre,uniqYears,filterData,setFilterData})=> {
  const handleSelect=(e)=>{
    if(uniqGenre){
      setFilterData({...filterData,Genre: e.target.value})
    }else if(uniqYears){
      setFilterData({...filterData,Year: e.target.value})
    }
  }
  return (<>
    <Form.Select onChange={(e)=>handleSelect(e)}  className='my-2' aria-label="Search Select">
      {
        uniqGenre && 
        <>
      <option value="">Choose Genre</option>
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
      <option value="">Choose Year</option>
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