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
it("normal exception", () => {
    //failSync() //會直接趨動錯誤
})
it("async exception", () => {
    failAsync() //抓不住例外(async)
})

it("async exception with await", async () => {
    await failAsync() //抓不住例外(async)
})