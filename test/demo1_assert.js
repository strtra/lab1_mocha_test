var assert = require('assert')
describe("array, strict equals", () => {
    it("when element not found, should return -1", () => {
        const array1 = [1, 2, 3]
        assert.strictEqual(array1.indexOf(4), -1)
    })
    it("exaplain type conversion", () => {
        const array1 = [1, 2, 3]
        // you can try "-1", -1.0
        //
        assert.equal(array1.indexOf(4), new Number(-1))
    })
})