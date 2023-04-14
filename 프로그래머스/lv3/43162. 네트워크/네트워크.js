function solution(n, computers) {
    let answer = 0;
    let visited = Array(n).fill(false); // 방문 여부를 체크할 배열
    
    const dfs = (start) => { // 깊이 우선 탐색 함수
        visited[start] = true; // 시작 노드를 방문했다고 체크
        for(let i = 0; i < n; i++) {
            if(computers[start][i] === 1 && !visited[i]) {
                // 연결되어 있고 방문하지 않았다면
                dfs(i); // 해당 노드를 방문
            }
        }
    }
    
    for(let i=0; i<n; i++) { // 모든 노드를 순회하면서 방문하지 않은 노드를 찾음
        if(!visited[i]) { // 방문하지 않은 노드라면
            dfs(i); // 해당 노드를 시작으로 dfs 수행
            answer++; // dfs가 종료되면 한 개의 네트워크가 완성된 것이므로 answer 증가
        }
    }
    
    return answer;
}
