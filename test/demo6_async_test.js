const assert = require("assert")
function async1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(50)
        }, 1000)
    })
}
describe("async test", () => {
    it("compare promise and value should fail", () => {
        //assert.strictEqual(50, async1())
    })
    it("要比要在callback比", () => {
        return async1().then(r => assert.strictEqual(r, 50))
    })
    it("要比要在callback比(錯誤)", () => {
        //return async1().then(r => assert.strictEqual(r, 49))
    })
    it("[async]要比要在callback比", async () => {
        return async1().then(r => assert.strictEqual(r, 50))
    })
    // it("[async]要比要在callback比(wrong)", async () => {
    //     return async1().then(r => assert.strictEqual(r, 49))
    // })

})
describe("這是不對的", () => {
    it("[async without return ]在callback比但沒有return", async () => {
        console.log("...")
        return async1().then(r => assert.strictEqual(r, 50))
        // async1().then(r => assert.strictEqual(r, 49))
        console.log("...")
    })
})