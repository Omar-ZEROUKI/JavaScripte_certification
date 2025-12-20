const sumAll  = (arr) =>{
  let [n,m] = arr
  if(m<n) {[m,n]=[n,m]}
  let total=0
  for(let i = n;i<=m;i++){
    total+=i
  }
  return total
}

console.log(sumAll([10,6]))
