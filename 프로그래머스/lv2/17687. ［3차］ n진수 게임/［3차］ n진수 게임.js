function solution(n, t, m, p) {
    let s = []
    let result = []
    
    for(let i = 0; i <= t*m; i++) {
        let num = i.toString(n)
        for(let j = 0; j < num.length; j++) {
            if(s.length < t * m) s.push(num[j])
        }
    }
    
    for(let j = p-1; j < t*m; j = j + m) {
        result.push(s[j].toUpperCase())
    }

    
    return result.join('')
}