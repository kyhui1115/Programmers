function solution(N, road, K) {
    const arr = [];

    for (let i = 1; i <= N; i++) {
        arr[i] = [];
    }

    road.forEach(([v1, v2, dist]) => {
        arr[v1].push({ to: v2, dist });
        arr[v2].push({ to: v1, dist });
    });

    const dist = Array(N + 1).fill(Infinity);
    dist[1] = 0;

    const queue = [{ to: 1, dist: 0 }];

    while (queue.length) {
        const { to, dist: currentDist } = queue.shift();

        if (currentDist > dist[to]) continue;

        for (let next of arr[to]) {
            const newDist = currentDist + next.dist;

            if (newDist < dist[next.to]) {
                dist[next.to] = newDist;
                queue.push({ to: next.to, dist: newDist });
            }
        }
    }

    return dist.filter((d) => d <= K).length;
}