/* Rather than using regular expression */

function isAlphaNumeric(char) {
  let code = char.charCodeAt();
  if (
    !(code > 47 && code < 58) && // numeric(0-9)
    !(code > 64 && code < 91) && // upper alpha(A-Z)
    !(code > 96 && code < 123) // lower alpha(A-Z)
  ) {
    // lower alpha(a-z)
    return false;
  }
  return true;
}

console.log(isAlphaNumeric("E")); //true
console.log(isAlphaNumeric("2")); //true
console.log(isAlphaNumeric("!")); //false
