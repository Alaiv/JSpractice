var deleteDuplicates = function(head) {
  let val = head;

  while(val !== null) {
    if (val.next !== null && val.val === val.next.val) {
      val.next = val.next.next || null;
    }
    if (val.next === null || val.val !== val.next.val) {
      val = val.next;
    }
  }

  return head;
};