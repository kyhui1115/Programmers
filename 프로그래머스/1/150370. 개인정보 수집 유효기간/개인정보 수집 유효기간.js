function solution(today, terms, privacies) {
    const result = []
    
    const ty = Number(today.slice(0, 4))
    const tm = Number(today.slice(5, 7))
    const td = Number(today.slice(8, 10))
    
    for(let i = 0; i < privacies.length; i++) {
        const term = terms.find((e) => e[0] === privacies[i][privacies[i].length - 1])
        const t = Number(term.slice(2)) * 28
        const y = Number(privacies[i].slice(0, 4))
        const m = Number(privacies[i].slice(5, 7))
        const d = Number(privacies[i].slice(8, 10))
        
        const p = ((ty - y) * 12 * 28) + ((tm - m) * 28) + (td - d)
        if(p >= t) result.push(i+1)
    }
    
    return result
}


// 2020.01.01 - 2019.01.01
// Y = p - t * 12 * 28     > 12
// M = (p - t) * 28        > -7
// D = p - t               > -1

