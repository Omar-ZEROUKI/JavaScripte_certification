const getVowelCount = (sentence) =>{
  let total = 0

  for (const char of sentence){
    if(char.toUpperCase() === 'A' || char.toUpperCase() === 'O' || char.toUpperCase() === 'I' || char.toUpperCase() === 'U'|| char.toUpperCase() === 'E') {
      total+=1;
    }
  }
  return total;
}

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

const getConsonantCount = sentence => {
  let count = 0
  let vowel ="aeiou"
  for (const char of sentence){
    if (!vowel.includes(char.toLowerCase()) && char.toLowerCase().charCodeAt() > 96 && char.toLowerCase().charCodeAt() < 123) {
        count+=1
    }
  }
  return count
}

let consonantCount  = getConsonantCount ("Coding is fun")
console.log(`Consonant Count: ${consonantCount}`)

const getPunctuationCount = (sentence) =>{
   let letters = "bcdfghjklmnpqrstvwxyzaeiuo"
   let count = 0 
   for (const char of sentence){
     if(char !== " " && !letters.includes(char.toLowerCase())){
       count+=1
     }
   }
   return count

}

let punctuationCount  = getPunctuationCount ("WHAT?!?!?!?!?") 
console.log(`Punctuation Count: ${punctuationCount}`)

function getWordCount(sentence) {
  if (sentence.trim() === '') {
    return 0;
  }
  
  const words = sentence.trim().split(/\s+/);
  return words.length;
}

const wordCount = getWordCount("I love freeCodeCamp");

console.log(`Word Count: ${wordCount}`);
