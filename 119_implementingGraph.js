class Graph {
  constructor(data) {
    this.data = data;
    this.neighbors = [];
  }
  addNeighbors(...neighborVertices) {
    for (let i = 0; i < neighborVertices.length; i++) {
      if (!this.isNeighbor(neighborVertices[i])) {
        this.neighbors.push(neighborVertices[i]);
      }
    }
  }
  isNeighbor(candidateNode) {
    for (let i = 0; i < this.neighbors.length; i++) {
      if (this.neighbors[i] === candidateNode) {
        return true;
      }
    }
    return false;
  }
}
let a = new Graph("A");
let b = new Graph("B");
let c = new Graph("C");
let d = new Graph("D");
let x = new Graph("X");

a.addNeighbors(b, x, d);
b.addNeighbors(a, c, x);
c.addNeighbors(b, d);
d.addNeighbors(x, a, b, c);
x.addNeighbors(a, b, d);

function dfs(vertex, visited = new Set()) {
  console.log(vertex.data);
  visited.add(vertex);
  for (let i = 0; i < vertex.neighbors.length; i++) {
    if (!visited.has(vertex.neighbors[i])) {
      dfs(vertex.neighbors[i], visited);
    }
  }
}

dfs(x);
console.log();
dfs(a);
console.log();

function bfs(vertex) {
  let q = [];
  let visited = new Set();
  q.push(vertex);
  while (q.length != 0) {
    let deq = q.shift();
    if (!visited.has(deq)) {
      console.log(deq.data);
      visited.add(deq);
      for (let i = 0; i < deq.neighbors.length; i++) {
        q.push(deq.neighbors[i]);
      }
    }
  }
}

bfs(x);
console.log();
bfs(a);

function cloneGraph(vertex, visited = new Set()) {
  let q = [];
  let deq;
  let clonedVertex;
  q.push(vertex);
  while (q.length != 0) {
    deq = q.shift();
    if (!visited.has(deq)) {
      clonedVertex = new Graph(deq.data);
      clonedVertex.neighbors = deq.neighbors;
      visited.add(deq);
      for (let i = 0; i < deq.neighbors.length; i++) {
        q.push(deq.neighbors[i]);
      }
    }
  }
  return deq;
}
console.log();
let clonedA = cloneGraph(a);
console.log();
bfs(clonedA);
console.log();
bfs(a);
console.log();
dfs(a);
console.log();
dfs(clonedA);
