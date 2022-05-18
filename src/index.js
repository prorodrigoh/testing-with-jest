// function sum(a, b) {
//     if (typeof(a) !== "number" || typeof(b) !== "number")
//       return 'Bad input'
//     return a + b;
// }
// export default sum;

// change the function to return the sum if a>b or the difference otherwise
export function sum(a, b) {
  if (typeof(a) !== "number" || typeof(b) !== "number")
    return 'Bad input'

  if (a < b){
    return (b - a)
  }

  return (a + b)
}

// write a function that raise a number to the third power
export function numToPower3(a){
  if (typeof(a) !== "number")
    return 'Bad input'
  return a**3
}

// create an object to combine both functions from the module to be imported as default
// and referenced in the test 
const mathService = {
  sum,
  numToPower3
}
export default mathService