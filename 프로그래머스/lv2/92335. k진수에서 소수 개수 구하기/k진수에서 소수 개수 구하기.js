function solution(n, k) {
    let c = n.toString(k)
    let p = c.split('0').map((e)=>e=Number(e))
    let filteredP = p.filter((e)=>{
        if(e === 1 || e === 0) return false
        for(let i = 2; i <= Math.sqrt(e); i++) {
            if (e % i === 0) return false;
        }
        return true
    })
    
    return filteredP.length
}