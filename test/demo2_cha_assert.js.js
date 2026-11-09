const assert = require("chai").assert
//const numbers = 12345
const numbers = [1, 2, 3, 4, 5]
//const numbers = [1, 22, 3, 4, 5]
//const numbers = { "a": 1 }
it("can get assert", () => {
    //console.log(typeof assert)
    //console.log(assert)
})
describe("介紹chai assert library", () => {
    it("numbers 的型態是 array", () => {
        assert.isArray(numbers, "numbers should be an array")
    })
    it("numbers應該要包含2", () => {
        assert.include(numbers, 2, "numbers應該要包含2")
    })
    it("numbers的長度應該是5", () => {
        assert.lengthOf(numbers, 5, "numbers的長度應該是5")
    })
})