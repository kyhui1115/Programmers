function solution(nums) {
    let newNums = [...new Set(nums)]
    
    
    if(newNums.length < nums.length / 2) return newNums.length
    else return nums.length / 2
    
}