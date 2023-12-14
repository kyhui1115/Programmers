function solution(operations) {
    let arr = operations.map((e)=>{
        if(e[0] === 'I') {
            return e = Number(e.slice(2))
        } else {
            return e = e.slice(2)
        }
    })

    let queue = []

    for(let i = 0; i < operations.length; i++) {
        if(typeof arr[i] === 'number') {
            queue.push(arr[i])
        } else if(arr[i] === '1') {
            if(queue.length) {
                let index = queue.indexOf(Math.max(...queue))
                queue.splice(index, 1)
            }
        } else if(arr[i] === '-1') {
            if(queue.length) {
                let index = queue.indexOf(Math.min(...queue))
                queue.splice(index, 1)
            }
        }
    }
    if(queue.length) { 
        return [Math.max(...queue), Math.min(...queue)]
    } else {
        return [0, 0]
    }
}