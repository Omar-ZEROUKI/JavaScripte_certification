const findLongestWordLength  = (string) =>{
    let arr = string.trim().split(/\s+/)
    if(arr.length==0){
      return 0
    }else{
      
      let maxele = arr[0]
      for(let i=1; i<arr.length; i++){
        if(arr[i].length>maxele.length){
          maxele =arr[i]
        }
      }
    return maxele.length
    }
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog") )
