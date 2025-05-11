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

