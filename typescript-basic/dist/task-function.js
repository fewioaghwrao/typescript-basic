"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 2) 関数の引数に型エイリアスを使う
const getResultMessage = (student) => {
    return student.score >= 60
        ? `${student.name}さんは合格です。`
        : `${student.name}さんは不合格です。`;
};
// 3) オブジェクト側にも同じ型を適用
const studentA = {
    name: '侍太郎',
    score: 70,
};
let resultMessage = getResultMessage(studentA);
console.log(resultMessage);
//# sourceMappingURL=task-function.js.map