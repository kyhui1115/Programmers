function solution(people, limit) {
    let up = [...people].sort((a,b)=>b-a)
    let boat = []
    let max = 0
    let min = 0
    
        for(let i = 0; i < up.length; i++) {
            max = up[i]
            min = up[up.length - 1]
            
            if(max + min > limit) {
                boat.push(max)
            } else if(max + min <= limit) {
                boat.push(max + min)
                up.pop()
            }
        }
    
    
    return boat.length
}

// 최대 2명 이용가능 무게제한(limit)

// 무게가 큰 순으로 정렬