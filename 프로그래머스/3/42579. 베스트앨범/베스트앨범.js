function solution(genres, plays) {
    let result = []
    let obj = {}
    let arr = []
    
    genres.forEach((g, i) => {
        if(obj[g] === undefined) {
            obj[g] = [[i, plays[i]]]
        } else {
            obj[g].push([i, plays[i]])
        }
    })
    
    for(let key in obj) {
        obj[key].sort((a, b) => b[1] - a[1])
        arr.push([key, obj[key].reduce((a,c) => a + c[1], 0)])
    }
    
    arr.sort((a, b) => b[1] - a[1])
    
    arr.forEach((g) => {
        result.push(obj[g[0]][0][0])
        if(obj[g[0]][1]) result.push(obj[g[0]][1][0])
    })
    
    return result
}


