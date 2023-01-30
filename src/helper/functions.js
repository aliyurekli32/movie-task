

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