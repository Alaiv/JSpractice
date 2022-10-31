var getIntersectionNode = function(headA, headB) {
  let first = headA;
  let second = headB;
  const obj = {};
  while(first) {
    if (!obj[first.val]) {
      obj[first.val] = first;
    }
    first = first.next;
  }

  while(second) {
    if (obj[second.val] === second) return second;
    second = second.next;
  }
  return null;
};