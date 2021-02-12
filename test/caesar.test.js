const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar", () => {
  describe("while encoding", () => {
    it("should return false if invalid shift values are passed", () => {
      const expected = false;
      const actual = caesar("james", 0);
      expect(actual).to.equal(expected);
    });
    it("should recognize spaces and symbols and return them in the output", () => {
      const expected = "ymnx nx f yjxy!";
      const actual = caesar("this is a test!", 5);
      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      const expected = "ymnx nx f yjxy!";
      const actual = caesar("THIS IS A TEST!", 5);
      expect(actual).to.equal(expected);
    });
    it("should wrap around to the front of the alphabet", () => {
      const expected = "c";
      const actual = caesar("z", 3);
      expect(actual).to.equal(expected);
    });
    it("should wrap around to the back of the alphabet", () => {
        const expected = "z";
        const actual = caesar("c", 3, encode = false);
    })
    it("should return Zebra Magazine with a shift of 3 as cheud pdjdclqh", () => {
        const expected = "cheud pdjdclqh"
        const actual = caesar("Zebra Magazine", 3)
        expect(actual).to.equal(expected);
    })
  });
  describe("while decoding", () => {
      it("should return false if invalid shift values are passed", () =>{
          const expected = false;
          const actual = caesar("ymnx nx f yjxy!", 42, encode = false);
          expect(actual).to.equal(expected);
      })
      it("should recognize spaces and symbols and return them in the output", () => {
          const expected = "this is a test!";
          const actual = caesar("ymnx nx f yjxy!", 5, encode = false)
          expect(actual).to.equal(expected);
      })
  })
});
