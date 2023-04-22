function solution(arr) {
    arr.sort((a,b)=>a-b)
    
    for(let i = arr[1]; i <= arr[0]*arr[1]; i = i + arr[1]) {
        if(i % arr[0] === 0) {
            arr[1] = i
            arr.shift()
            i = arr[1]
        }
    }
    
    return arr[0]
}