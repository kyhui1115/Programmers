function solution(number, k) {
    let stack = [];

    let arr = number.split('').reverse();

    while(arr.length && k>0){
        stack.push(arr.pop())
        while(stack[stack.length-1] < arr[arr.length-1] && k>0) {
            stack.pop();
            k = k-1;
        }
    }

    if(k !== 0) stack = stack.slice(0, -k) 

    return stack.join('') + arr.reverse().join('')
}

// 9294 2

// number를 돌면서 i 번째 값이 i+1번째 값보다 작으면 지워주고 break 하는 것을 k번 반복했습니다.
// 10번 케이스가 조금 아슬아슬하긴 했지만 적당한 조건을 더 붙여주면 더 빠르게 할 수 있을 것 같습니다.

// 굳이 문자열을 옮기지 않고, 매번 시작점을 가리키는 변수를 유지하시면 매우 빠르게 해결가능합니다.
// 가장 빠른 방법은 number 문자열을 건드리지 않고 index 로만 접근하는 방법인 것 같네요.
// 제 풀이로 스택 쓴 풀이보다 3배정도 빠르게 나왔습니다.
// 추가적으로 9가 나오면 멈추는 최적화정도는 필수입니다.
// 그 외 잡다한 최적화는 전혀 필요없어요

