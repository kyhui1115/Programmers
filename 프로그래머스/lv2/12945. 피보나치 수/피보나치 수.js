function solution(n) {
  let prev = 0, current = 1;

  for (let i = 2; i <= n; i++) {
    const next = (prev + current) % 1234567;
    prev = current;
    current = next;
  }

  return current;
}