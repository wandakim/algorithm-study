/* 
제곱수의 합
100000까지 들어올 수 있다. 
하나씩 줄여나가면서 루트를 씌워서 정수가 되는 수를 찾으면 되지 않을까 싶음. 
근데 여러 수를 사용해야 할 수도 있음. 
reculsive하게 찾는 방법으로 가보자고
*/

/* 틀린 풀이. 18의 경우 16 + 2로 계산이 되어서 정답이 되어야 하는 9 + 9가 되지 않는다.
너무 단순하게 생각했다.  */
/* {
  const n = Number(`18`.trim());
  let count = 0;
  counting(n);
  console.log(count);

  function counting(n) {
    for (let i = n; i > 0; i--) {
      if (i === 1) {
        count += n;
        break;
      }
      const sq = Math.sqrt(i);
      if (sq === Math.trunc(sq)) {
        count++;
        counting(n - i);
        break;
      }
    }
  }
} */

/* 
무조건 큰 수의 제곱수를 포함하면 적은 항이 될것이라 잘못 생각했었다. 
여러가지 경우를 비교해 봐야 한다. 
dp[n]은 n을 나타낼 수 있는 최소항 제곱수라고 정의 할 때 
dp[43]의 경우 dp[43- 1^2]부터 2^2 3^2 4^2 5^2 6^2까지 뺀 값을 비교하여 +1을 해주어 가장 
작은 제곱수의 합을 구할 수 있다. 
https://blog.naver.com/occidere/220792326120 
*/

const n = Number(`43`.trim());
const d = [];
for (i = 0; i <= n; i++) {
  d[i] = i;
}

for (i = 2; i <= n; i++) {
  for (j = 2; j * j <= i; j++) {
    d[i] = Math.min(d[i], d[i - j * j] + 1);
  }
}

console.log(d[n]);

/* 
i = 4, j = 2, 4, 0+1 
i = 5, j = 2, 5, 1+1 
i = 9, j = 3, 9-3^ + 1

Math.min(
d[43] = d[43-1^]+1 (초기화 해 준다.)
d[43-2^]+1 = d[39] + 1
d[43-3^]+1 = d[34] + 1
d[43-4^]+1 = d[27] + 1
d[43-5^]+1 = d[18] + 1
d[43-6^]+1 = d[7] + 1
)

d[0] = 0 
d[1] = 1 : 1
d[2] = 2 : 1 1
d[3] = 3 : 1 1 1
d[4] = 1 : 2
d[5] = 2 : 2 1
d[6] = 3 : 2 1 1
d[7] = 4 : 2 1 1 1



*/
