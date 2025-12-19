const bouncer = (array) => {
  let newArray = new Array()
  for (let element of array){
    if(element){
      newArray.push(element)
    }
  }
  return newArray
}

console.log(bouncer([7, "ate", "", false, 9]))
