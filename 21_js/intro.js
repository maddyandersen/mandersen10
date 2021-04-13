/*
  Team SAM (Maddy Andersen and Saqif Abedin)
  SoftDev
  K21: Get Scripty — an introduction to JavaScript
  2021-04-12

  Notes:
  - We are not sure when to use semi-colons. Our functions still seem to run, even if we forget a couple of them.
  - The syntax is very similar to Java, though we defined our functions in a way that's similar to Scheme.
  - We included a handful of test cases in the comments after our functions.
*/

// factI(n) returns factorial of n, computed iteratively.
var factI = (n) => {
  ans = 1;
  while (n > 1){
    ans = ans * n;
    n = n - 1;
  }
  return ans;
};
// factI(0) --> 1
// factI(1) --> 1
// factI(2) --> 2
// factI(5) --> 120

// factR(n) returns factorial of n, computed recursively.
var factR = (n) => {
  if (n == 0){
    return 1;
  }
  return n * factR(n-1);
};
// factR(0) --> 1
// factR(1) --> 1
// factR(2) --> 2
// factR(5) --> 120

// fibI(n) returns the nth Fibonacci number, computed iteratively.
var fibI = (n) => {
  var last = 1;
  var now = 1;
  for (i = 3; i <= n; i++){
    var temp = now;
    now = now + last;
    last = temp;
  }
  return now;
};
// fibI(1) --> 1
// fibI(2) --> 1
// fibI(3) --> 2
// fibI(4) --> 3

// fibR(n) returns the nth Fibonacci number, computed recursively.
var fibR = (n) => {
  if (n <= 0)
    return 0;
  if (n == 1)
    return 1;
  return fibR(n-1) + fibR(n-2);
};
// fibR(1) --> 1
// fibR(2) --> 1
// fibR(3) --> 2
// fibR(4) --> 3
