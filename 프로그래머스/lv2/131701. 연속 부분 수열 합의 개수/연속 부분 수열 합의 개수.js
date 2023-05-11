function solution(elements) {
    let result = [...elements]
    
    for(let i = 1; i < elements.length; i++) {
        let c = elements.concat(elements.slice(0, i))
        for(let j = 0; j < c.length - i; j++) {
            result.push(c.slice(j, j+i+1).reduce((a,b)=>a+b))
        }
    }
    
    
    return [...new Set(result)].length
}