function fibRec(n) {
  if (n < 0) {
    return null;
  } else if (n === 0 ) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  return fibRec(n - 1) + fibRec(n - 2);
}

function fibRecList(n) {
  if (n < 0) {
    return null;
  } else if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0,1];
  }
  var first = fibRecList(n-1);
  var second = fibRecList(n-2);

  first.push(first[first.length - 1] + second[second.length - 1]);
  return first;
}
