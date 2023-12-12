function solution(bridge_length, weight, truck_weights) {
    const length = truck_weights.length
    const result = []
    const queue = []
    let sum = 0
    let count = 0
    
    while(result.length < length) {
        count++
        
        if(queue[0] && count - queue[0][1] === bridge_length) {
            sum -= queue[0][0]
            result.push(queue.shift())
        }
        
        if(queue.length <= bridge_length && sum + truck_weights[0] <= weight) {
            sum += truck_weights[0]
            queue.push([truck_weights.shift(), count])
        }
    }
    
    return count
}