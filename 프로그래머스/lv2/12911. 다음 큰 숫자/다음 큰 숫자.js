function solution(n) {
    const s = n.toString(2).split('').filter((e)=>e === '1').length
    let m = n + 1
    let t = m.toString(2).split('').filter((e)=>e === '1').length

    while(s !== t) {
        m += 1
        t = m.toString(2).split('').filter((e)=>e === '1').length
    }

    return m
}