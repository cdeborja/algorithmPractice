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

// should return [0, 2, 4, 1, 3, 5]


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

// should return [0,3,1,5,4,7,2,6];

function graphDFS(graph) {
  var visited = new Array(graph.length);
  visited.fill(0);
  var stack = [];
  var result = [];

  //arbitrarily choose first node
  var node = 0;

  //set up first iteration with stack
  visited[node] = 1;
  result.push(node);
  stack.push(node);

  while (stack.length > 0) {

    node = stack[stack.length - 1]; // similar to "peek" the top of the stack
    var idx = 0;
    var found = false;

    while (idx < graph.length && !found) {
      if (graph[node][idx] === 1 && visited[idx] === 0) {
        visited[idx] = 1;
        result.push(idx);
        stack.push(idx);
        // stop searching, so we move over to that node to continue DFS
        found = true;
      }
      idx++;
    }
    // if we didn't find a new node to traverse to, that means
    // this node is a leaf and has no more nodes
    if (!found) {
      stack.pop();
    }
  }
  return result;
}

// for adjacecny lists we need to only list the edges between two vertices

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
// should return [0, 2, 4, 1, 3, 5]

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
// should return [0,3,1,5,4,7,2,6];

function graphDFSadjList (adjList) {
  var visited = new Array(adjList.length);
  visited.fill(0);
  var result = [];
  var stack = [];

  // choose arbitrary starting node
  var node = 0;

  // say we haved visited it
  visited[node] = 1;

  result.push(node);
  stack.push(node);


  while (stack.length > 0) {
    node = stack[stack.length - 1]; //peek at it, but dont remove it yet
    var idx = 0;
    var found = false;

    while (idx < adjList[node].length && !found) {
      var posVer = adjList[node][idx];
      if (visited[posVer] === 0) {
        visited[posVer] = 1;
        result.push(posVer);
        stack.push(posVer);
        found = true;
      } else { //denotes that it has been visited
        idx++;
      }
    }
    if (!found) {
      stack.pop();
    }
  }
  return result;
}
