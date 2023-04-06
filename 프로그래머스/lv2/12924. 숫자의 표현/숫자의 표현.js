function solution(n) {
    let result = 0
    let a = [1]

    if(n === 1) {
        return 1
    }
    
    for(let i = 2; i <= n; i++) {
        a.push(i)
        if(a[0] + a[1] > n) {
            if(a.length === 2) {
            result += 1
            break;
            }
        }

        
        if(a.reduce((a,b)=>a+b) >= n) {
            for(let j = 0; j < a.length; j++) {
                if(a.reduce((a,b)=>a+b) > n) {
                    a.shift()
                }
                
                if(a.reduce((a,b)=>a+b) < n) {
                    break;
                }

                if(a.reduce((a,b)=>a+b) === n) {
                    result += 1
                    a.shift()
                    break;
                }
            }
        }
    }

    return result
}