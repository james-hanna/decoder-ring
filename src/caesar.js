const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!shift || shift == 0 || shift < -25 || shift > 25) return false;

    if (encode === false) {
      shift = shift * -1;
    }

    let littleInput = input.toLowerCase();

    let output = "";

    for (char in littleInput) {
      const lowerA = 97;
      const lowerZ = 122;
      let charToShift = littleInput.charCodeAt(char);
      if (charToShift < 97 || charToShift > 122) {
        output += String.fromCharCode(charToShift);
      } else if (charToShift + shift < lowerA) {
        charToShift = charToShift + shift + 26;
        output += String.fromCharCode(charToShift);
      } else if (charToShift + shift > lowerZ) {
        charToShift = charToShift + shift - 26;
        output += String.fromCharCode(charToShift);
      } else {
        output += String.fromCharCode(charToShift+ shift);
      }
    }

    return output;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
