const substitutionModule = (function () {
  const alpha = [
    "a","b","c","d","e",
    "f","g","h","i","j",
    "k","l","m","n","o",
    "p","q","r","s","t",
    "u","v","w","x","y",
    "z",
  ];

  function substitution(input, alphabet, encode = true) {
    let output = "";
    if (!alphabet) return false;
    lowerInput = input.toLowerCase();
    const noRepeatAlphabet = new Set(alphabet);
    if (noRepeatAlphabet.size !== 26) return false;
    for (char of lowerInput) {
      if (char == " ") {
        output += char;
      } else {
        if (encode) {
          output += alphabet[alpha.indexOf(char)];
        } else {
          output += alpha[alphabet.indexOf(char)];
        }
      }
    }
    return output;
  }
  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
