function addEdge (adjList, fromV, toV) {
  if (fromV >= adjList.length || toV >= adjList.length || fromV < 0 || toV < 0) {
    console.log("Cannot add edge to list"); //use throw?
    return;
  }
  if (adjList[fromV].indexOf(toV) > -1) {
    console.log("Edge from " + fromV + " to " + toV + " already exists!");
    return;
  }
  // doesn't exist, so add it
  adjList[fromV].push(toV);
}

function removeEdge (adjList, fromV, toV) {
  if (fromV >= adjList.length || toV >= adjList.length || fromV < 0 || toV < 0) {
    console.log("Cannot remove edge to list"); //use throw?
    return;
  }
  var idx = adjList[fromV].indexOf(toV);
  adjList[fromV].splice(idx, 1);
}
