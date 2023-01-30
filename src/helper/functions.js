

export const uniqArr=(data)=>{
    let arrUniq=[]

    data.map(item=>{
        let arr = item.Genre.split(", ")
        for(let i=0; i<arr.length;i++){
          if(!arrUniq.includes(arr[i])){
            arrUniq.push(arr[i])
          }
        }
        
        
      }
      )
    return arrUniq
}

export const uniqYear=(data)=>{
  let arrUniq=[]

  data.map(item=>{
    let arr = item.Year
   
      
         if(!arrUniq.includes(arr)){
         arrUniq.push(arr)
         }  
    }
    )
  return arrUniq
}

export const filterMovie =(filter,data)=>{
  console.log(filter)
  console.log(data)
  const data1 = data.filter((item)=> filter.Year ? item.Year==filter.Year : item)
  const data2 = data1.filter((item)=> filter.imdbRating ? Math.floor(Number(item.imdbRating))==filter.imdbRating : item)
  const data3 = data2.filter((item)=> filter.Title ? item.Title==filter.Title : item)
  const data4 = data3.filter((item)=> {
    if(item.Genre.includes(filter.Genre)){
      return item
    }else{
      return
    }

  })
  return data4
}