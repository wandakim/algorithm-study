/* 
그래프를 검색하는 방법에는 대표적으로 BFS와 DFS가 있다.
DFS는 Stack을 이용해서 구현하고 bfs는 Queue를 이용해서 구현한다.
https://www.youtube.com/watch?v=_hxFgg7TLZQ 
*/

// DFS
// 1. 시작 노드를 스택에 넣는다.
// 2. 현재 스택의 노드를 빼서 방문한다.
// 3. 현재 방문한 노드와 인접한 노드 중 방문하지 않은 노드를 스택에 넣는다.
// 4. 스택이 빌 때까지 반복한다.
// BFS
// 1. 시작 노드를 큐에 넣는다.
// 2. 현재 큐의 노드를 빼서 방문한다.
// 3. 현재 방문한 노드와 인접한 노드 중 방문하지 않은 노드를 큐에 넣는다.
// 4. 큐가 빌 때까지 반복한다.
