var g = new Graph();

g.addVertex('San Francisco');
g.addVertex('Austin');
g.addVertex('Reno');
g.addVertex('Seattle');
g.addVertex('New York');
g.addVertex('Tokyo');

var e1 = new Edge('San Francisco','Reno', 1);
g.addEdge(e1);
e1 = new Edge('San Francisco','Austin', 3);
g.addEdge(e1);
e1 = new Edge('San Francisco','Seattle', 3);
g.addEdge(e1);
e1 = new Edge('Austin','New York', 2);
g.addEdge(e1);
e1 = new Edge('Reno','New York', 4);
g.addEdge(e1);
e1 = new Edge('Seattle','New York', 2);
g.addEdge(e1);
e1 = new Edge('Austin','Tokyo', 6);
g.addEdge(e1);
e1 = new Edge('New York','Tokyo', 5);
g.addEdge(e1);
