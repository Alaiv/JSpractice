class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    delete(value) {
        if (this.head === null) {
            return null;
        } else if (this.head.next === null && this.head.value === value) {
            this.head = null;
            this.tail = null;
        }

        let deletedNode = null;

        while (this.head && this.head.value === value) {
            deletedNode = this.head;
            this.head = this.head.next;
            this.head.next.prev = this.head;
        }

        let node = this.head;

        if (node !== null) {
            while (node.next) {
                if (node.next.value === value) {
                    deletedNode = node.next;
                    node.next = node.next.next;
                    node.next.prev = node;
                } else {
                    node = node.next;
                }
            }
        }

        if (this.tail && this.tail.next === value) {
            this.tail = node;
        }

        return deletedNode;
    }

    prepend(value) {
        const node = new LinkedListNode(value);
        if (this.head === null) {
            this.head = node;
            if (this.tail === null) {
                this.tail = node;
                this.tail.prev = this.head;
            }
        } else {
            let temp = this.head;
            temp.prev = node;
            this.head = node
            this.head.next = temp;
        }
        return this;
    }

    append(value) {
        const node = new LinkedListNode(value)
        if (this.tail === null) {
            this.tail = node;
            if (this.head === null) {
                this.head = node;
                this.tail.prev = this.head;
            }
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        return this;
    }

    find(value) {
        if (this.head === null) {
            return null;
        }
        let node = this.head;
        let looking = true
        while (looking) {
            if (node.value === value) {
                looking = false;
                return node;
            } else if (!node.value.next) {
                return null;
            }
            node = node.next;
        }
    }
}


class Stack extends LinkedList {

    pop() {
        if(this.tail) {
            const deleted = this.tail;
            if (this.head && this.head !== this.tail) {
                this.tail = this.tail.prev;
                this.tail.next = null;
            } else {
                this.tail = null;
                this.head = null;
            }
            return deleted.value;
        }
        return null;
    }

    peek() {
        if (this.tail) return this.tail.value;
        return this.tail;
    }

    push(value) {
        super.append(value)
    }

    isEmpty() {
        if(!this.peek()) return true
        return false
    }
}


const stack = new Stack();
stack.push(1);
stack.push('cat');
stack.push('dog');

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())

