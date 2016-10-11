function Graph () {
  this.vertices = [];
  this.edges = {};
}

Graph.prototype.addVertex = function(val) {
  this.vertices.push(val);
};

Graph.prototype.addEdge = function(edge) {
  if (!this.edges[edge.x]) {
    this.edges[edge.x] = [{'y': edge.y, 'weight': edge.weight}];
  } else {
    this.edges[edge.x].push({'y': edge.y, 'weight': edge.weight});
  }
  if (!this.edges[edge.y]) {
    this.edges[edge.y] = [{'y': edge.x, 'weight': edge.weight}];
  } else {
    this.edges[edge.y].push({'y': edge.x, 'weight': edge.weight});
  }
};

function Edge (x, y, weight) {
  this.x = x;
  this.y = y;
  this. weight = weight;
}

function dijkstrasAlgorithm2(graph, startNode, endNode) {
  // first step is to make all distances to nodes Infinity
  // set that we haven't put them in our tree
  // and set up that each node isn't connected to a parent yet

  var intree = {};
  var distance = {};
  var parent = {};

  for (var i = 0; i < graph.vertices.length; i++) {
    var ver = graph.vertices[i];
    intree[ver] = false;
    distance[ver] = Infinity;
    parent[ver] = -1;
  }

  distance[startNode] = 0;
  visiting = startNode;

  while (!intree[visiting]) {
    intree[visiting] = true;

    if (intree[endNode]) {
      break; // we break here because we've added our end node to our tree
      // and we don't want to calculate anymore edges
    }

    potentialEdges = graph.edges[visiting];
    // so here, graph has an edges object where it points to
    // the edge it connects to and the weight, denoted as
    // edges[visiting] => [[to,weight], [to1, weight1]... [toN, weightN]]
    for (var j = 0; j < potentialEdges.length; j++) {
      var possible = potentialEdges[j].y;
      var weight = potentialEdges[j].weight;
      if (distance[possible] > distance[visiting] + weight) {
        distance[possible] = distance[visiting] + weight;
        parent[possible] = visiting;
      }
    }

    var dist = Infinity;

    // check through all vertices and find the lowest value that
    // isn't in our tree yet
    for (var k = 0; k < graph.vertices.length; k++) {
      var idx = graph.vertices[k];
      // checks for smallest value at node
      if (!intree[idx] && dist > distance[idx]) {
        dist = distance[idx];
        visiting = idx;
      }
    }
  }
  // for now, return the parent object to see the paths from nodes leading to
  // the starting node;
  var pathWeight = " with a path weight of " + distance[endNode];

  var result = endNode;
  var end = endNode;
  while (parent[end] !== -1) {
    end = parent[end];
    result = end + " ---> " + result;
  }

  return "The shortest path from " + startNode + " to " + endNode + " is " + result + pathWeight;
}
