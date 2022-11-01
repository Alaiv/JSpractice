var removeNthFromEnd = function(head, n) {
  if (!head.next && n === 1) head = null;
  let length = 0;
  let lHead = head;
  let resHead = head;

  while(lHead) {
    lHead = lHead.next;
    length++;
  }

  if (length === n) {
    head = head.next;
  } else {
    while(resHead) {
      if (length === n + 1) {
        resHead.next = resHead.next.next;
        return head;
      }
      resHead = resHead.next;
      length--;
    }
  }

  return head;
};