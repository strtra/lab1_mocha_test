const chai = require('chai')
const chaiAsPromised = require('chai-as-promised').default
const assert = chai.assert
const expect = chai.expect
const should = chai.should()
chai.use(chaiAsPromised)
function failAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("HAHA"))
        }, 1000)
    })
}
function failSync() {
    throw new Error("HAHA")
}
describe("非happy path的處理", () => {
    it("直接執行會有exception", () => {
        try {
            failSync()
        } catch (e) {
            console.log("error happened!")
            //assert.ifError(e, "在這 有顯示出錯誤")
        }
    })
    it("assert", async () => {
        try {
            await failAsync()
        } catch (e) {
            console.log("非同步的error happened!")
        }
        //return failAsync().catch(e => assert.ifError(e, "HAHA"))
    })
    it("expect", async () => {
        return expect(failAsync()).to.be.rejectedWith("HAHA")
    })
    it("should", async () => {
        return failAsync().should.be.rejectedWith("HAHA")
    })
})