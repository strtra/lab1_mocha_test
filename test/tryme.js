describe("測試章節1==>npm run test的mocha行為", () => {
    beforeEach(() => {
        console.log("111111111 START 11111111111")
    })
    afterEach(() => {
        console.log("1111111111111 END 111111111111")
    })
    it("env check for mocha", () => {
        console.log("第一個測試1")
        console.log("第一個測試2")
    })

    it("another check for mocha", () => {
        console.log("another test1")
        console.log("another test2")
    })
})
describe("測試章節2", () => {
    it("another check for mocha!!", () => {
        console.log("[chapter2]another test1")
        console.log("[chapter2]another test2")
    })
})

context("測試章節3", () => {
    beforeEach(() => {
        console.log("3333333333 START 3333333333")
    })
    afterEach(() => {
        console.log("333333333333 END 333333333333333")
    })
    it("yet another check for mocha!!!!", () => {
        console.log("[chapter3]another test1")
        console.log("[chapter3]another test2")
    })
})