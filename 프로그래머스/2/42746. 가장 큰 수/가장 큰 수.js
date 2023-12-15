function solution(numbers) {
    const a = numbers.map(v=>String(v))
    // console.log(a);
    const b = a.sort((a,b) => (b+a) - (a+b))
    // console.log(b);
    const c = b.join('');

    return c[0]==='0'?'0':c;
}