const expect = require("chai").expect
const numbers = [1, 2, 3, 4, 5]
it("can get expect", () => {
    console.log(typeof expect)
    console.log(expect)
})

describe("介紹chai expect library", () => {
    it("numbers 的型態是 array", () => {
        expect(numbers).to.be.an("array")
    })
    it("numbers應該要包含2", () => {
        expect(numbers).includes(2)
    })
    it("numbers 的型態是 array,應該要包含2", () => {
        expect(numbers).to.be.an("array").that.includes(3)
    })
    it("numbers的長度應該是5", () => {
        //assert.lengthOf(numbers, 5, "numbers的長度應該是5")
        expect(numbers).to.have.lengthOf(5)
    })
})