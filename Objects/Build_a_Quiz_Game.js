let questions =[
  {category: "social",
   question: "what does company mean?",
   choices: ["a","b","c"],
   answer: "a",},
   {category: "social",
   question: "what doesv company mean?",
   choices: ["a","b","v"],
   answer: "v",},
   {category: "social",
   question: "what does company mean?",
   choices: ["a","b","c"],
   answer: "a",},
   {category: "social",
   question: "what does company mean?",
   choices: ["a","b","c"],
   answer: "a",},
   {category: "social",
   question: "what does company mean?",
   choices: ["a","b","c"],
   answer: "a",}

]

const getRandomQuestion = questions => questions[Math.floor(Math.random()*questions.length)]

const getRandomComputerChoice = choices => choices[Math.floor(Math.random()*choices.length)]

const getResults  = (questionObject, computerChoices) => questionObject.answer == computerChoices ? "The computer's choice is correct!" : `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`
