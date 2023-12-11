function solution(participant, completion) {
    const obj = {}
    
    completion.forEach((c) => {
        if(obj[c] === undefined) obj[c] = 1
        else obj[c]++
    })
    
    for(let i = 0; i < participant.length; i++) {
        if(obj[participant[i]] === undefined) return participant[i]
        else obj[participant[i]]--
        
        if(obj[participant[i]] === 0) delete obj[participant[i]]
    }
}