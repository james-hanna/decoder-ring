const expect = require("chai").expect;
const polybiusModule = require("../src/polybius.js");


describe("polybiusModule", () => {
    describe("while encoding", () => {
        it("should output a string", () => {
            const expected = "4211235134";
            const actual = polybiusModule("james");
            expect(actual).to.equal(expected);
        })
        it("should maintain spacing in the message", () => {
            const expected = "4211 2351 34";
            const actual = polybiusModule("ja me s");
            expect(actual).to.equal(expected);
        })
    })
    describe("while decoding", () => {
        it("should maintain spacing in the message", () => {
            const expected = "(i/j)a me s"
            const actual = polybiusModule("4211 2351 34", encode = false)
            expect(actual).to.equal(expected)
        })
        it("should return false if given an odd number of digits", () => {
            const actual = polybiusModule("4211 2351 3", encode = false)
            expect(actual).to.be.false
        })
    })
})
