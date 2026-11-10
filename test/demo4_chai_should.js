const should = require("chai").should()
const numbers = [1, 2, 3, 4, 5]
it("can get should", () => {
    console.log(typeof should)
    console.log(should)
})

describe("介紹chai should library", () => {
    it("numbers的型態是 array", () => {
        numbers.should.be.an('array')
    })
    it("numbers應該要包含2", () => {
        numbers.should.includes(3)
    })
    it("numbers 的型態是 array,應該要包含2", () => {
        numbers.should.be.an('array').that.includes(2)
    })
    it("numbers的長度應該是5", () => {
        numbers.should.have.lengthOf(5)
    })
})