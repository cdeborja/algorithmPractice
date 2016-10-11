// this is a certain example to be tested

function DisjointSet () {
  this.parent = {};
  this.rank = {};
  var universe = ["a","b","c","d","e"];
  universe.forEach ( function (el) {
    this.parent[el] = el;
    this.rank[el] = 0;
  }.bind(this));
  this.parent["d"] = "b";
  this.rank["b"]++;
}

// to generalize DisjointSets, we pass in a universe as an argument, which
// initiates everything as being a subset of itself
//
// function DisjointSet (universe) {
//   this.parent = {};
//   this.rank = {};
//
//   universe.forEach ( function (el) {
//     this.parent[el] = el;
//     this.rank[el] = 0;
//   }.bind(this));
// }

DisjointSet.prototype.find = function(node) {
  if (this.parent[node] === node) {
    return node;
  } else {
    // // without path compression
    // return this.find(this.parent[node]);

    // with path compression
    var result = this.find(this.parent[node]);
    this.parent[node] = result;
    return result;
  }
};


// it's important to note, that you need to find the head of the set if you want
// to union them together (ie have the parent of the set point to the new set)
DisjointSet.prototype.union = function(pointA, pointB) {
  var setA = this.find(pointA);
  var setB = this.find(pointB);

  if (setA !== setB) {
    if (this.rank[setA] > this.rank[setB]) {
      this.parent[setB] = setA;
    } else if (this.rank[setB] > this.rank[setA]) {
      this.parent[setA] = setB;
    } else { //the case that they are both of equal rank;
      //arbitrarily set setA to set B and need to increate rank of that new root
      this.parent[setB] = setA;
      this.rank[setA]++;
    }
  }
};
