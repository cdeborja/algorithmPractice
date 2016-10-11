// still testing

function Neighbor(vnum, nbr) {
  this.vertexNum = vnum;
  this.next = nbr;
}

function Vertex (name, neighbors) {
  this.name = name;
  this.adjList = neighbors;
}

// visited is an array containing trues or false to determine if that node
// was visited or not
function dfs (vertex, visited) {
  visited[vertex] = true;
  console.log("Vertex " + vertex + " was visited");
  // what we want to do, is check for each neighbor until it is
  // an unvisited vertex.
  for (var nbr = adjList[vertex].first(); nbr !== null; nbr = nbr.next) {
    // with first(), I want to grab the first vertex in the list
    if (!visited[nbr]) {
      dfs(nbr, visited);
    }
  }
}
