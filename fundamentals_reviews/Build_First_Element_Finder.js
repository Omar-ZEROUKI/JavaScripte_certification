const findElement  = (array,func ) => {
  for(let element of array){
    if (func(element)=== true){
      return element
    }
  }
  return undefined
}
