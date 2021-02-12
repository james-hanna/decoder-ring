// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here

    //check for improper shift value
    if (!shift || shift == 0 || shift < -25 || shift > 25) return false;

    //check for encode or decode
    if (encode === false) {
      shift = shift * -1;
    }

    //change the input to lower case
    let littleInput = input.toLowerCase();
    console.log(littleInput);

    //define the output
    let output = "";

    for (char in littleInput) {
      const lowerA = 97;
      const lowerZ = 122;
      let shiftedChar = littleInput.charCodeAt(char);
      if (shiftedChar < 97 || shiftedChar > 122) {
        output += String.fromCharCode(shiftedChar);
      } else if (shiftedChar + shift < lowerA) {
        shiftedChar = shiftedChar + shift - lowerA + lowerZ + 1;
        output += String.fromCharCode(shiftedChar);
      } else if (shiftedChar + shift > lowerZ) {
        shiftedChar = shiftedChar + shift - lowerZ + lowerA - 1;
        output += String.fromCharCode(shiftedChar);
      } else {
        shiftedChar = shiftedChar + shift;
        output += String.fromCharCode(shiftedChar);
      }
    }
    return output;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
