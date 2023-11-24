function solution(numbers, hand) {
    const key_pad = [[1, 4, 7, '*'],
                     [2, 5, 8, 0],
                     [3, 6, 9, '#']]
    
    let left = [0, 3]
    let right = [2, 3]
    
    const result = numbers.map((e)=>{
        if(key_pad[0].includes(e)) {
            left = [0, key_pad[0].indexOf(e)]
            return 'L'
        }
        
        if(key_pad[2].includes(e)) {
            right = [2, key_pad[2].indexOf(e)]
            return 'R'
        }
        
        if(key_pad[1].includes(e)) {
                        if(Math.abs(left[0] - 1) + Math.abs(left[1] - key_pad[1].indexOf(e)) 
               < Math.abs(right[0] - 1) + Math.abs(right[1] - key_pad[1].indexOf(e)) ) {
                left = [1, key_pad[1].indexOf(e)]
                return 'L'
            } else if (Math.abs(left[0] - 1) + Math.abs(left[1] - key_pad[1].indexOf(e))
               > Math.abs(right[0] - 1) + Math.abs(right[1] - key_pad[1].indexOf(e)) ) {
                right = [1, key_pad[1].indexOf(e)]
                return 'R'
            } else {
                if(hand === 'left') {
                    left = [1, key_pad[1].indexOf(e)]
                    return 'L'
                } else {
                    right = [1, key_pad[1].indexOf(e)]
                    return 'R'
                }
            }
        }
    })
    
    return result.join('')
}