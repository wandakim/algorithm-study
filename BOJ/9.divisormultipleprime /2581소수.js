/* 수가 주어지면 소인수분해 */
// 2부터 시작
// 재귀함수로 만들면 어떨까 싶네
// let num = 주어진수
// 나누는수 2부터 시작 2로 나눠지면 나누고 정답배열에 넣고 재귀. 나눠지면 또 재귀.
// 안나눠지면 넘어가고++
// num =1이 될때까지 반복
//${require('fs').readFileSync('dev/stdin')}
const input = `100`.trim();
let num = Number(input);
let divNum = 2;
const answerArr = [];

while (num !== 1) {
  Divide(num, divNum);
  divNum++;
  console.log(divNum);
}

function Divide(num, divide) {
  if (num % divide === 0) {
    num = num / divide;
    answerArr.push(divide);
    if (num !== 1) {
      Divide(num, divide);
    }
  }
}

answerArr.length !== 0 && console.log(answerArr.join('\n'));
