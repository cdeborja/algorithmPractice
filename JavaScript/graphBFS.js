// function takes a graph matrix as a input
// a graph matrix takes the form of n x x where n is the number of nodes
// in our graph;

var graph1 = ([
  [0,1,1,0],
  [0,0,1,0],
  [1,0,0,1],
  [0,0,0,1]
]);

// should return [0,1,2,3]

var graph2 = ([
  [0,0,1,0,0,1],
  [1,0,0,0,0,0],
  [0,0,1,0,1,0],
  [0,0,1,0,0,0],
  [0,1,0,1,0,0],
  [0,0,0,0,0,0]
]);

// should return [0, 2, 5, 4, 1, 3]

var graph3 = ([
  [0,0,0,1,0,1,1,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,1,0],
  [0,1,0,0,0,0,0,0],
  [0,0,0,0,0,1,0,1],
  [0,0,0,0,1,0,0,0],
  [0,0,1,0,0,0,0,0],
  [0,0,1,0,1,0,0,0]
]);
// should return [0,3,5,6,1,4,2,7]

function graphBFS(graph) {
  var visited = new Array(graph.length);
  visited.fill(0);
  var queue = [];
  var result = [];

  // arbitrarily choose starting point, here we use 0
  var node = 0;

  // set up our queue with the first node we will use
  visited[node] = 1;
  result.push(node);
  queue.push(node);

  while (queue.length > 0) {
    node = queue.shift();
    for (var i = 0; i < graph.length; i++) {
      if (graph[node][i] === 1 && visited[i] === 0) {
        visited[i] = 1;
        result.push(i);
        queue.push(i);
      }
    }
  }
  return result;
}

// to use adjacency lists, consider it like a graph matrix but instead only care
// about the value in the arry, which instead of it being 1 to denote that it
// is a connection, instead just have the value of the traversal.

// var graph1 = ([
//   [0,1,1,0],
//   [0,0,1,0],
//   [1,0,0,1],
//   [0,0,0,1]
// ]);
// so the above graph 1 can be considered as

var adjacencyList1 = ([
  [1,2],
  [2],
  [0,3],
  [3]
]);
// should return [0,1,2,3]

// var graph2 = ([
//   [0,0,1,0,0,1],
//   [1,0,0,0,0,0],
//   [0,0,1,0,1,0],
//   [0,0,1,0,0,0],
//   [0,1,0,1,0,0],
//   [0,0,0,0,0,0]
// ]);

var adjacencyList2 = ([
  [2,5],
  [0],
  [2,4],
  [2],
  [1,3],
  [],
]);
// should return [0, 2, 5, 4, 1, 3]

// var graph3 = ([
//   [0,0,0,1,0,1,1,0],
//   [0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,1,0],
//   [0,1,0,0,0,0,0,0],
//   [0,0,0,0,0,1,0,1],
//   [0,0,0,0,1,0,0,0],
//   [0,0,1,0,0,0,0,0],
//   [0,0,1,0,1,0,0,0]
// ]);

var adjacencyList3 = ([
  [3,5,6],
  [],
  [6],
  [1],
  [5,7],
  [4],
  [2],
  [2,4]
]);
// should return [0,3,5,6,1,4,2,7]

function graphBFSadjList (adjList) {
  var visited = new Array(adjList.length);
  visited.fill(0);
  var queue = [];
  var result = [];

  //choose some arbitrary node
  var node = 0;
  visited[node] = 1;//denotes we visited it.
  result.push(node);
  queue.push(node);

  while (queue.length > 0) {
    node = queue.shift();
    var nodeEdges = adjList[node];

    for (var i = 0; i < nodeEdges.length; i++) {
      if (visited[nodeEdges[i]] === 0) {
        visited[nodeEdges[i]] = 1;
        result.push(nodeEdges[i]);
        queue.push(nodeEdges[i]);
      }
    }
  }

  return result;

}
