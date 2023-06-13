function solution(s) {
    let result = []
    let arr = s.slice(2, s.length-2).split('},{').sort((a,b)=>a.length - b.length).map((e)=>e.split(','))
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(!result.includes(Number(arr[i][j]))) result.push(Number(arr[i][j]))
        }
    }
    
    return result
}