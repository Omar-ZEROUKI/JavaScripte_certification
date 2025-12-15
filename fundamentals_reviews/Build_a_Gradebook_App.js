const getAverage = (testScores) => {
  if(testScores.length===0){
    return 0
  }
  let total = 0
  for(let score of testScores){
    total+=score
  }
  return total/testScores.length
}

const getGrade  = (studentScore) => {
  if(studentScore == 100){
    return "A+"
  }else if(studentScore>=90){
    return "A"
  }else if(studentScore>=80){
    return "B"
  }else if(studentScore>=70){
    return "C"
  }else if(studentScore>=60){
    return "D"
  }else {
    return "F"
  }
}

const hasPassingGrade = (score) => {
  return (getGrade(score)==='F'? false :true)
}

const studentMsg = (scores, studentScore) => {
  const average = getAverage(scores);
  const grade = getGrade(studentScore);
  const passed = hasPassingGrade(studentScore);

  if (passed) {
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
};
