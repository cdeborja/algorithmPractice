// used to sort a linked list

function merge_sort(head) {
    if (head === null || head.next === null) { return head; }
    var middle = getMiddle(head);      //get the middle of the list
    var right = middle.next;
    middle.next = null;   //split the list into two halfs

    return merge(merge_sort(head),merge_sort(right));  //recurse on that
}

//Merge subroutine to merge two sorted lists
function merge(a, b) {
    var curr = null;
    while(a !== null && b !== null) {
        if (a.val < b.val) {
          if (curr === null) {
            curr = a;
          } else {
            curr.next = a;
            curr = curr.next;
          }
          a = a.next;
        } else {
          if (curr === null) {
            curr = b;
          } else {
            curr.next = b;
            curr = curr.next;
          }
            b = b.next;
        }
    }
    curr.next = (a === null) ? b : a;
    return curr;
}

//Finding the middle element of the list for splitting
function getMiddle (head) {
    if (head === null) { return head; }
    var slow = head;
    var fast = head;
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next; fast = fast.next.next;
    }
    return slow;
}
