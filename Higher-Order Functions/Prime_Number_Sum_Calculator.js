//isPrimeFunction

function isPrime(number){
  if(number<2) return false;
  for(let i=2;i<=Math.sqrt(number);i++){
    if(number%i==0) return false
    
  }
  return true
}


const sumPrimes =(number) => number<2?0:Array.from({ length: number - 1 }, (_, i) => i + 2).filter(isPrime).reduce(((sum,n)=>sum+n),0)

