function solution(new_id) {
    if(new_id.length === 0) return 'aaa'
    let result = ''
    let dup = ''
    const allow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '_', '.']
    
    new_id = new_id.toLowerCase()
    
    for(let i = 0; i < new_id.length; i++) {
        if(allow.includes(new_id[i])) result += new_id[i]
    }
    
    for(let i = 0; i < result.length; i++) {
        if(result[i] === '.' && dup[dup.length-1] === '.') continue;
        dup += result[i]
    }
    result = dup
    
    if(result[0] === '.') result = result.substring(1, result.length)
    if(result[result.length - 1] === '.') result = result.substring(0, result.length)
    if(result.length === 0) result = 'a'
    if(result.length >= 16) result = result.substring(0, 15)
    if(result[result.length - 1] === '.') result = result.substring(0, result.length - 1)
    if(result.length <= 2) result = result + result[result.length - 1].repeat(3 - result.length)
    
    return result
}