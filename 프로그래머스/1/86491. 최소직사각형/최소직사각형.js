function solution(sizes) {
    let s1 = []
    let s2 = []
    
    sizes = sizes.forEach(([w, h]) => {
        if(w < h) {
            s1.push(w)
            s2.push(h)
        } else {
            s1.push(h)
            s2.push(w)
        }
    })
    
    return Math.max(...s1) * Math.max(...s2)
}