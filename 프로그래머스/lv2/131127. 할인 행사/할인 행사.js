function solution(want, number, discount) {
    let result = 0
    let o = 0
    for(let i = 0; i <= discount.length - 10; i++) {
        let d = discount.slice(i, 10 + i)
        for(let j = 0; j < want.length; j++) {
            let filteredD = d.filter(e => e === want[j])
            if(filteredD.length === number[j]) {
                o = o + 1
            }
        }
        if(o === want.length) {
            result += 1
        }
        o = 0
    }
    
    return result

}