function solution(s) {
    let word = ''
    let result = []
    
    for(let k = 1; k <= s.length/2 + 1; k++) {
        let result_word = []
        let result_count = []
        let zip = []

        for(let i = 0; i < s.length; i = i + k) {
            let w = ''
            
            for(let j = i; j < i + k; j++) {
                if(s[j]) w += s[j]
            }
            
            zip.push(w)
        }

        for(let i = 0; i < zip.length; i++) {
            if(i === 0) {
                result_word.push(zip[i])
                result_count.push(1)
            }
            else {
                if(result_word[result_word.length - 1] === zip[i]) {
                    result_count[result_count.length - 1]++;
                } else {
                    result_word.push(zip[i])
                    result_count.push(1)
                }
            }
        }

        for(let i = 0; i < result_word.length; i++) {
            if(result_count[i] === 1) {
                word += result_word[i]
            } else word += result_count[i]+result_word[i]
        }

        result.push(word.length)
        word = ''
    }

    return Math.min(...result)
}