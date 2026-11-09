beforeEach(() => {
    console.log("---------準備測試--------------")
})

afterEach(() => {
    console.log("------------清理收尾----------------")
})
it("介紹其它功能", () => {
    console.log("haha")
})

before(() => {
    console.log("一次性的啟動")
})
after(() => {
    console.log("一次性的收尾")
})
beforeEach(() => {
    console.log("---------準備測試--------------")
})

afterEach(() => {
    console.log("------------清理收尾----------------")
})
it("介紹其它功能", () => {
    console.log("haha")
})