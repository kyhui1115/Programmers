function solution(N, road, K) {
    const arr = []
    
    for(let i = 1; i <= N; i++) {
        arr[i] = []
        
        for(let j = 1; j <= N; j++) {
            arr[i][j] = i === j ? 0 : Infinity
        }
    }
    
    road.forEach(([v1, v2, dist]) => {
        arr[v1][v2] = arr[v1][v2] > dist ? dist : arr[v1][v2]
        arr[v2][v1] = arr[v2][v1] > dist ? dist : arr[v2][v1]
    })
    
    for(let k = 1; k <= N; k++) {
        for(let i = 1; i <= N; i++) {
            for(let j = 1; j <= N; j++) {
                if(arr[i][j] > arr[i][k] + arr[k][j]) {
                    arr[i][j] = arr[i][k] + arr[k][j]
                }
            }
        }
    }
    
    return arr[1].filter((dist)=> dist <= K).length
}