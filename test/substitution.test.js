const substitution = require("../src/substitution");
const expect = require("chai").expect;
const badAlpha = ["a", "b", "c", "d", "e"];
const goodAlpha = [
  "q","w","e","r","t","y","u","i","o","p",
    "a","s","d","f","g","h","j","k","l",
      "z","x","c","v","b","n","m",
];

describe("substitution", () => {
  describe("in general", () => {
    it("should return false if the given alphabet length is not 26", () => {
      const actual = substitution("james was here", badAlpha);
      expect(actual).to.be.false;
    });
    it("should return false if not given an alphabet", () => {
      const actual = substitution("james was here");
      expect(actual).to.be.false;
    });
  });
  describe("while encoding", () => {
    it("should ignore spacing and capital letters while encoding", () => {
      const expected = "pqdtl vql itkt";
      const actual = substitution("james was here", goodAlpha);
      expect(actual).to.equal(expected);
    });
  });
  describe("while decoding", () => {
    it("should ignore spacing and capital letters while decoding", () => {
      const expected = "james was here";
      const actual = substitution("pqdtl vql itkt", goodAlpha, encode = false);
      expect(actual).to.equal(expected);
    });
  });
});
