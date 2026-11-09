const should = require("chai").should()
const numbers = [1, 2, 3, 4, 5]
it("can get should", () => {
    console.log(typeof should)
    console.log(should)
})

describe("介紹chai should library", () => {
    it("numbers的型態是 array", () => {
        numbers.should.be.an('array');
    })
})