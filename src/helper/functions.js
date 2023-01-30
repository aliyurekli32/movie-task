

export const uniqArr=(data)=>{
    let arrUniq=[]

    data.map(item=>{
        let arr = item.Genre.split(", ")
        for(let i=0; i<arr.length;i++){
          if(!arrUniq.push(arr[i])){
            arrUniq.push(arr[i])
          }
        }
        
        
      }
      )
    return arrUniq
}