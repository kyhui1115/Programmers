function solution(routes) {
    let highway = routes.map((e)=>e.sort((a,b)=>a-b)).sort((a,b)=>a[1]-b[1])
    let n = 0
    
    for(let i = 1; i < highway.length; i++) {
        if(highway[n][1] >= highway[i][0]) {
            highway.splice(i, 1)
            i -= 1
        } else {
            n = i
        }
    }
    
    return highway.length
}