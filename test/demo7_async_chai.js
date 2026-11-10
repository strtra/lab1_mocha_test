const chai = require('chai')
const chaiAsPromised = require('chai-as-promised').default
const expect = chai.expect
const should = chai.should()
chai.use(chaiAsPromised)
function async1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(50)
        }, 1000)
    })
}
it("make sure env is OK", () => {
    // console.log("chai=", chai)
    // console.log("expect=", chai)
    // console.log("should=", should)
})
describe("async test using expect", () => {
    it("return一個then, 在裡面去比", async () => {
        return async1().then(r => expect(r).to.equal(50))
    })
    it("await一個非同步函數再比", async () => {
        const result = await async1();
        expect(result).to.equal(50)
    })
    it("await一個非同步函數再比(v2)", async () => {
        expect(await async1()).to.equal(50)
    })
    it("使用chai as promised", async () => {
        return expect(async1()).eventually.equal(50)
    })
})
describe("async test using should", () => {
    it("return一個then, 在裡面去比", async () => {
        return async1().then(r => r.should.equal(50))
    })
    it("await一個非同步函數再比", async () => {
        const result = await async1();
        result.should.equal(50)
    })
    it("await一個非同步函數再比(v2)", async () => {
        (await async1()).should.equal(50)
    })
    it("使用chai as promised", async () => {
        return async1().should.eventually.equal(50)
    })
})