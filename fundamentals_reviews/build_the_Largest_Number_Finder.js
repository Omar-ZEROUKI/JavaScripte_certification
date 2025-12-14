const largestOfAll = (array) =>{
  let result = []
  for(const subArray of array){
    //calculate max
    if(subArray.length === 0){
      continue
    }else {
      let max = subArray[0]
      for (let i=0; i<subArray.length; i++){
        if (max<subArray[i]){
          max = subArray[i]
        }
      }
      result.push(max)
    }
  }
  return result
}
 
largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
