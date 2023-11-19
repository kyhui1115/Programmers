function solution(n, m, x, y, r, c, k) {
    let answer = ''
    let minimum = Math.abs(x-r)+Math.abs(y-c)
    let count = k
    
    if(k % 2 === 0) {
        if(minimum % 2 === 1) {
            return 'impossible'
        }
    } else {
        if(minimum % 2 === 0) {
            return 'impossible'
        }
    }
    
    if(minimum > k) {
        return 'impossible'
    }
    

    for(let i = 1; i <= k; i++) {
        if(count > minimum) {
            if(x < n) {
                answer += 'd'
                x++
            } else if(y > 1) {
                answer += 'l'
                y--
            } else if(y < m) {
                answer += 'r'
                y++
            } else if(x > 1) {
                answer += 'u'
                x--
            }
        } else {
            if(x < n && Math.abs(x-r+1)+Math.abs(y-c) <= count) {
                answer += 'd'
                x++
            } else if(y > 1 && Math.abs(x-r)+Math.abs(y-c-1) <= count) {
                answer += 'l'
                y--
            } else if(y < m && Math.abs(x-r)+Math.abs(y-c+1) <= count) {
                answer += 'r'
                y++
            } else if(x > 1 && Math.abs(x-r-1)+Math.abs(y-c) <= count) {
                answer += 'u'
                x--
            }
        }
        minimum = Math.abs(x-r)+Math.abs(y-c)
        count--
    }
    
    return answer
}