const titleCase = (sentence) => {
  let arrayWords = sentence.split(" ")
  for (let i=0; i<arrayWords.length; i++){
    arrayWords[i] = arrayWords[i][0].toUpperCase() + arrayWords[i].slice(1,arrayWords[i].length).toLowerCase()
  }
  return (arrayWords.join(" "))

}
console.log(titleCase("sHoRt AnD sToUt") )
