function solution(n, left, right) {
    let result = []
    
    
    for(let i = left; i <= right; i++) {
        let j = Math.floor(i / n)
        let k = i % n
        
        if(j >= k) result.push(j+1)
        if(j < k) result.push(k+1)
    }
    
    return result
}


// n = 3, left = 2
// 1 2 3 
// 2 2 3
// 3 3 3

// n = 4, left = 7
// 1 2 3 4
// 2 2 3 4
// 3 3 3 4
// 4 4 4 4
