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
