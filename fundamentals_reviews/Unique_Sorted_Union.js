const uniteUnique = (...args) =>{
  if(args.length == 0 || args.length ==1){
    return []
  }else{
    let result = []
    for(let i=0;i<args.length;i++){
      console.log(i)
      for(let ele of args[i]){
        if(!result.includes(ele)){
          result.push(ele)
        }
      }
    
    }
    return result;
  }
}

console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]))
