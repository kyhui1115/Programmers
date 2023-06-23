function solution(record) {
    let uidCheck = {}
    let r = record.map((e)=>{
        let splE = e.split(' ')
        if(splE[0] === 'Enter' || splE[0] === 'Change') {
            uidCheck[splE[1]] = splE[2]
        }
        return splE
    })
    let result = []
    
    for(let i = 0; i < record.length; i++) {
        if(r[i][0] === "Enter") {
            result.push([r[i][1], "님이 들어왔습니다."])
        } else if(r[i][0] === "Leave") {
            result.push([r[i][1], "님이 나갔습니다."])
        }
    }
    
    return result.map((e)=>{
        return uidCheck[e[0]] + e[1]
    })
}