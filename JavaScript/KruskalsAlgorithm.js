
  function DisjointSet(universe) {
    this.parent =  {};
    this.rank = {};

    universe.forEach( function(el) {
      this.parent[el] = el;
      this.rank[el] = 0;
    }.bind(this));
  }

  DisjointSet.prototype.find = function(point) {
    if (this.parent[point] === point) {
      return point;
    } else {
      // // without path compression
      // return this.find(this.parent[point]);

      // with path compression
      var result = this.find(this.parent[point]);
      this.parent[point] = result;
      return result;
    }
  };

  DisjointSet.prototype.union = function(pointA, pointB) {
    var setA = this.find(pointA);
    var setB = this.find(pointB);

    // need to ensure that points are not from the same set
    if (setA !== setB) {
      if (this.rank[setA] < this.rank[setB]) {
        this.parent[setA] = setB;
      } else if (this.rank[setB] < this.rank[setA]) {
        this.parent[setB] = setA;
      } else {
        this.parent[setB] = setA;
        this.rank[setA]++;
      }
    }
  };

  // Graph has a set of vertices and the edges they have
  function Graph () {
    this.vertices = [];
    this.edges = [];
  }

  function Edge (v1, v2, weight) {
    this.v1 = v1;
    this.v2 = v2;
    this.weight = weight;
  }
  // array of edges (v1, v2, weight)

  // set up edges
  var graph = new Graph();
  var vertices = ['a','b','c','d','e','f'];
  graph.vertices = vertices;
  graph.edges.push( new Edge('a','b',4));
  graph.edges.push( new Edge('a','f',2));
  graph.edges.push( new Edge('f','b',5));
  graph.edges.push( new Edge('c','b',6));
  graph.edges.push( new Edge('c','f',1));
  graph.edges.push( new Edge('f','e',4));
  graph.edges.push( new Edge('d','e',2));
  graph.edges.push( new Edge('d','c',3));

  function edgeQuicksort(arr) {
    sortHelper(arr, 0, arr.length - 1);
  }

  function sortHelper (arr, front, back) {
    if (back - front <= 0) {
      return;
    }

    var r = front;
    var w = back;
    var pivotVal = arr[r].weight;

    while (r < w) {
      if (arr[r].weight >= pivotVal) {
        var temp = arr[r];
        arr[r] = arr[w];
        arr[w] = temp;
        w--;
      } else {
        r++;
      }
    }

    if (arr[r].weight > pivotVal) {
      r--;
    }

    sortHelper (arr, front, r);
    sortHelper (arr, r + 1, back);

  }

  function Kruskal(graph) {
    var result = [];

    var disjointSets = new DisjointSet(graph.vertices);
    edgeQuicksort(graph.edges);

    for (var i = 0; i < graph.edges.length && result.length < graph.vertices.length - 1; i++) {
      var ver1 = graph.edges[i].v1;
      var ver2 = graph.edges[i].v2;
      var root1 = disjointSets.find(ver1);
      var root2 = disjointSets.find(ver2);
      if (root1 !== root2) {
        result.push(graph.edges[i]);
        disjointSets.union(root1,root2);
      }
    }

    return result;
  }
