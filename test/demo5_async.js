function async1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(50)
        }, 5000)
    })
}
function sync2() {
    return 50
}
async function async2() {
    return 50
}
describe("非同步的傳回測試", () => {
    it("async2非同步的呼叫傳回", () => {
        console.log("....")
        async2().then(r => {
            console.log("經過then, async2 result=", r)
        })
        console.log("....")
    })
    it("async1 非同步的呼叫傳回", () => {
        console.log("oooo")
        async1().then(r => {
            console.log("經過then, async1 result=", r)
        })
        console.log("oooo")
    })
})

describe("非同步的呼叫測試", () => {
    it("promise確定可以呼叫", function () {
        console.log("開始async")
        const r1 = async1()
        console.log("結束async, r1=", r1)
    })
    it("同步的呼叫", () => {
        const r1 = sync2()
        console.log("sync2 result=", r1)
    })
    it("非同步的呼叫", () => {
        const r1 = async2()
        console.log("async2 result=", r1)
    })

})

describe("非同步用async/await", () => {
    it("async2非同步的呼叫傳回", async () => {
        console.log("非同步測試開始")
        const result = await async2()
        console.log("非同步測試結束", result)
    })
    it("async1非同步的呼叫傳回", async () => {
        console.log("非同步測試開始")
        const result = await async1()
        console.log("非同步測試結束", result)
    })
})