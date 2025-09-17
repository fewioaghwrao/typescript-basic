const getResultMessage = (student: { name: string; score: number }): string => {
  if (student.score >= 60) {
    return `${student.name}さんは合格です。`;
  } else {
    return `${student.name}さんは不合格です。`;
  }
};

const studentA = {
  name: '侍太郎',
  score: 70, 
};

let resultMessage: string = getResultMessage(studentA);
console.log(resultMessage);