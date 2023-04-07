//  Числа фибоначи
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/improving-efficiency-of-recursive-functions

let memo1 = [];


function fibonac(n) {
  if (n == 0 || n == 1)
    return n;
   if (!memo1[n]) {
		memo1[n] = fibonac(n-1) + fibonac(n-2) ;
    } ;

    return memo1[n];
}


//  Вычисление количества разбиений числа на слагаемые
// https://www.codewars.com/kata/52ec24228a515e620b0005ef/javascript
let memo = [];

function sum(n, m = n) {
    if (n == 0) return 1;
    if (n < 0 || m == 0) return 0;
    if (!memo[n]) {
        memo[n] = [];
    }
    if (!memo[n][m]) {
      memo[n][m] = sum(n, m - 1) + sum(n - m, m);
    } ;

    return memo[n][m]
}