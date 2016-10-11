function dijkstrasAlgorithm(graphMatrix, startNode) {
  // graphMatrix is a n*n matrix that contains a -1 if there is no edge between
  // the two points, and then a value > 0 denoting the edge weight between those
  // two points

  // THE PROBLEM WITH THIS SET UP IS WE DONT HAVE A PATH TO OUR NODE

  // set up that all distance to the nodes to Inifinity
  var dist =  new Array(graphMatrix.length);
  dist.fill(Infinity);

  // we have not visited any nodes yet, so set to false;
  var visited = new Array(graphMatrix.length);
  visited.fill(false);

  // begin with an initial node to start with
  dist[startNode] = 0;

  // next step is find the lowest potential node
  while (true) {
    var u = -1;
    var bestDist = Infinity;

    for (var i = 0; i < graphMatrix.length; i++) {
      if (!visited[i] && dist[i] < bestDist) {
        u = i;
        bestDist = dist[i];
      }
    }

    // we didn't find anymore nodes
    if (bestDist === Infinity) {
      break;
    }

    // update potential distances for adjacent nodes from the lowest node
    for (var v = 0; v < graphMatrix.length; v++) {
      if (!visted[v] && graphMatrix[u][v] !== -1) {
        if (dist[v] > dist[u] + graphMatrix[u][v]) {
          dist[v] = dist[u] + graphMatrix[u][v];
        }
      }
    }

    visited[u] = true;
  }
}
