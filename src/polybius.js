const polybiusModule = (function () {
  const alpha = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "(i/j)", "k"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z"],
  ];

  function polybius(input, encode = true) {
    let output = "";
    if (encode) {
      const littleInput = input.toLowerCase();
      for (char of littleInput) {
        if (char == "i" || char == "j") {
          output += `42`;
        } else if (char == " ") {
          output += char;
        } else {
          let groups = alpha.find((group) => group.includes(char));
          let row = alpha.indexOf(groups) + 1;
          let column = groups.indexOf(char) + 1;

          output += `${column}${row}`;
        }
      }
    } else {
      const numInput = input.split(" ").join("");
      if (numInput.length % 2 != 0) return false;
      for (let i = 0; i < input.length; i += 2) {
        if (input[i] !== " ") {
          let var1 = input[i];
          let var2 = input[i + 1];
          output += alpha[var2 - 1][var1 - 1];
        } else {
          output += input[i];
          i -= 1;
        }
      }
    }
    return output;
  }
  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
