var detectCycle = function (head) {
    if (!head) return null;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            break;
        };
    }
    if (!fast || !fast.next) return null;

    while (slow !== head) {
        console.log(slow.val)
        slow = slow.next;
        head = head.next;
    }
    return head;
};