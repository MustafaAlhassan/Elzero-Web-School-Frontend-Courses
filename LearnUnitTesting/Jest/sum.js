/*
  theSum Function
  [1] Return 0 If No Number Pass
  [2] Return the Number If Its Only The Number Passed
  [3] If theres 2 Numbers It Add Number 1 + 2
  [4] If theres 3 Numbers It Add Number 1 + 2 + 3
  [5] If You Have Any Number of Numbers It Will Summ All The Numbers
*/

const theSum = (...numbers) => numbers.reduce((prev, curr) => prev + curr, 0);

module.exports = theSum;
