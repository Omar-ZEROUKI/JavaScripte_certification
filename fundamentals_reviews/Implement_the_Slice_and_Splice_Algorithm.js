const frankenSplice  = (array1, array2, index) => {
  let result = array2.slice()
  result.splice(index,0,...array1)
  return result
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1))
