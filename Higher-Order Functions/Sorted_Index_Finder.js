const getIndexToIns = (arr, number) => {
  arr.sort((number1, number2)=>number1-number2)
  let index = arr.findIndex((element)=> element>=number)
  return index == -1 ? arr.length : index
}
console.log(getIndexToIns([5, 3, 20, 3], 5))
