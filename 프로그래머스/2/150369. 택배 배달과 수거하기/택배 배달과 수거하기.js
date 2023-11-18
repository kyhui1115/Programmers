
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let [dIndex, pIndex] = [n - 1, n - 1];

  while (dIndex >= 0 || pIndex >= 0) {
    while (deliveries[dIndex] === 0 && dIndex >= 0) dIndex -= 1;
    while (pickups[pIndex] === 0 && pIndex >= 0) pIndex -= 1;
    let [dCap, pCap] = [cap, cap];
    answer += Math.max(dIndex + 1, pIndex + 1) * 2;
    while (dCap > 0 && dIndex >= 0) {
      if (deliveries[dIndex] > 0) {
        deliveries[dIndex] -= 1;
        dCap -= 1;
      } else {
        dIndex -= 1;
      }
    }
    while (pCap > 0 && pIndex >= 0) {
      if (pickups[pIndex] > 0) {
        pickups[pIndex] -= 1;
        pCap -= 1;
      } else {
        pIndex -= 1;
      }
    }
  }
  return answer;
}