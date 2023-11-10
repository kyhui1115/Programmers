function solution(n, stations, w) {
    let c = 0
    let m = 0
    const size = w * 2 + 1
    for (const s of stations) {
        c += Math.ceil((s - w - m - 1) / size)
        m = s + w
    }
    c += Math.ceil((n - m) / size)
    return c
}