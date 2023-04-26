function solution(s) {
    let a = s.split(' ')
    return a.map((b)=>{
        let e = ''
        for(let i = 0; i < b.length; i++) {
            if(i === 0) {
                e +=b[i].toUpperCase()
            } else {
                e +=b[i].toLowerCase()
            }
        }
        return e
    }).join(' ')
}