//If done with merge sort first, will take O(nlogn) + (to remove duplicates) O(n) ==> O(nlogn)
// after merge sorting:
// var deleteDuplicates = function(head) {
//     if (head === null) return null;
//
//     var node = head;
//
//     while (node !== null) {
//         while (node.next !== null && node.val === node.next.val) {
//             node.next = node.next.next;
//         }
//         node = node.next;
//     }
//     return head;
// };


//
function removeDupsLinkedList (head) {
  var node1 = head;

  while (node1 !== null && node1.next !== null) {
    var node2 = node1;

    while (node2.next !== null) {
      if (node1.val === node2.next.val) {
        node2.next = node2.next.next;
      }
      node2 = node2.next;
    }
  node1 = node1.next;
  }
}
// this takes O(n^2)
