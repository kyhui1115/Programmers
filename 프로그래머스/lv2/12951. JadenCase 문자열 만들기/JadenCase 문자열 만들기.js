
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
function solution(s) {
    let a = s.split(' ')
    let e = ''
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