var middleNode = function(head) {
    if (!head) return head;
    let first = head;
    let second = head;
    let count = 1;
    
    while(first.next) {
        first = first.next;
        count++;
    };
    
    const condition = count % 2 === 0 ? Math.floor(count / 2) : Math.ceil(count / 2);
    
    while(count > condition) {
        second = second.next;
        count--;
    }
    return second;
};