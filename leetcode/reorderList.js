const reverse = (start) => {
  let prev = null;
  let curr = start.next;
  let next = null;
  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
    return prev;
}

var reorderList = function(head) {
    let check = head;
    let slow = check;
    let fast = check.next;
    
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let s = reverse(slow);
    slow.next = null;
    let next;
    while(s) {
        next = s.next;
        s.next = check.next; 
        check.next = s;
        s = next;
        check = check.next.next;
    }
};
