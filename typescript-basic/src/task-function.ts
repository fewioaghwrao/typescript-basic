// 1) 型エイリアスを宣言
type Student = {
  name: string;
  score: number;
};

// 2) 関数の引数に型エイリアスを使う
const getResultMessage = (student: Student): string => {
  return student.score >= 60
    ? `${student.name}さんは合格です。`
    : `${student.name}さんは不合格です。`;
};

// 3) オブジェクト側にも同じ型を適用
const studentA: Student = {
  name: '侍太郎',
  score: 70, 
};

let resultMessage: string = getResultMessage(studentA);
console.log(resultMessage);
