function solution(places) {
    let result = [1, 1, 1, 1, 1]
    
    for(let i = 0; i < places.length; i++) {
        for(let j = 0; j < places.length; j++) {
            for(let k = 0; k < places.length; k++) {
                if(places[i][j][k] === 'P') {
                    if(places[i][j][k+1] === 'P') {
                        result[i] = 0
                        break
                    } 
                    
                    if(places[i][j][k+2] === 'P') {
                        if(places[i][j][k+1] !== 'X') {
                            result[i] = 0
                            break
                        }
                    }
                    
                    if(places[i][j+1] && places[i][j+1][k] === 'P') {
                        result[i] = 0
                        break
                    }
                    
                    if(places[i][j+1] && places[i][j+1][k+1] === 'P') {
                        if(places[i][j][k+1] !== 'X' || places[i][j+1][k] !== 'X') {
                            result[i] = 0
                            break   
                        }
                    }
                    
                   if(places[i][j+1] && places[i][j+1][k-1] === 'P') {
                        if(places[i][j][k-1] !== 'X' || places[i][j+1][k] !== 'X') {
                            result[i] = 0
                            break   
                        }
                    }
                    
                    if(places[i][j+2] && places[i][j+2][k] === 'P') {
                        if(places[i][j+1][k] !== 'X') {
                            result[i] = 0
                            break
                        }
                    }
                }
            }
            if(result[i] === 0) break
        }
    }
    
    return result
}


// ["POOOP", 
//  "OXXOX", 
//  "OPXPX", 
//  "OOXOX", 
//  "POXXP"]


// ["POOPX", 
//  "OXPXP", 
//  "PXXXO", 
//  "OXXXO", 
//  "OOOPP"]

// 같은 x축에선 2칸, y축에선 2칸과 대각선까지만 안됨


// 1. p를 찾는다
// 2. p의 왼쪽이 있을 경우 p의 왼쪽 두칸