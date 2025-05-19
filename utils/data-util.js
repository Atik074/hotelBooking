export const replaceMongoIdArray = (array)=>{
  const mappedArray = array.map(item =>{
       return {
        id:item._id.toString() ,
        ...item
       }
   }).map(({_id , ...rest})=>rest) ;


   return mappedArray
}



export const replaceMongoIdObj =(obj)=>{
  const {_id ,... updatedObj} = {...obj , id:obj._id.toString()}

  return updatedObj ;

} 


export const isDateInBweeten  = (date, from, to) => {
    return (new Date(date).getTime() >= new Date(from).getTime() && new Date(date).getTime() <= new Date(to).getTime());
  }

  export const getDayDifferenceInBweeten = (from, to)=>{
    return( (new Date(to).getTime() - new Date(from).getTime())/(24*60*60*1000) ) + 1

  }
