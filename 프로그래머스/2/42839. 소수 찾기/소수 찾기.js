function solution(numbers) {
    const numArr = numbers.split('')
    let result = []
    
    permutation([], numArr, result, numbers.length)
    
    result.shift()
    result = [...new Set(result)]
    
    result = result.filter((r) => chkPrime(r))
    
    return result.length
}

function chkPrime(num) {
    if(num < 2) return false
    if(num === 2) return true
    
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false
    }
    
    return true
}

function permutation(cur, rests, output, maxLength) {
    output.push(Number(cur.join('')))
    if(cur.length === maxLength) return
    
    rests.forEach((item, idx) => {
        const rest = [...rests.slice(0, idx), ...rests.slice(idx + 1)]
        
        permutation([...cur, item], rest, output, maxLength)
    })
}