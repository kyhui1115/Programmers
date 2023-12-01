function solution(n, s, a, b, fares) {
    var arr = []
    for(var i = 1; i <= n; i++){
        arr[i] = []
        for(var j = 1; j <= n; j++){
            arr[i][j] = i==j ? 0 : Number.MAX_SAFE_INTEGER;
        }
    }

    fares.forEach(([v1, v2, distance])=>{
        arr[v1][v2] = distance;
        arr[v2][v1] = distance;
    })

    for (var k = 1; k <= n; k++) {
        for (var i = 1; i <= n; i++) {
            for (var j = 1; j <= n; j++) {
                if(arr[i][j] > arr[i][k]+arr[k][j]) {
                    arr[i][j] = arr[i][k]+arr[k][j];
                }
            }
        }
    }

    var min = Number.MAX_SAFE_INTEGER
    for (var i = 1; i <= n; i++) {
        var price = arr[s][i] + arr[i][a] + arr[i][b];
        min = Math.min(min, price);
    }

    return min;
}