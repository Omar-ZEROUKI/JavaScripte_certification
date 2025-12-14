const pyramid = (patternCharacter, rowsNumber, bool)=> {
  let result = "\n"
  if(bool==false){
    for(let i=1; i<=rowsNumber; i++) {
      result = result+ " ".repeat((rowsNumber*2-1-2*i+1)/2) + patternCharacter.repeat(2*i-1)+"\n"
    }
    return result
  }else{
    for(let i=rowsNumber; i>0; i--){
      result = result+ " ".repeat((rowsNumber*2-1-2*i+1)/2) + patternCharacter.repeat(2*i-1)+"\n"
    }
    return result
  }
  
}
console.log(pyramid("o", 4, false) )
