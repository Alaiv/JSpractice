class Node {
  constructor(value = null, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  getKey() {
    if (!this.value) return null;
    return this.value;
  }

  getLeft() {
    return this.left;
  }

  getRight() {
    return this.right;
  }

  insert(value) {
    if (!this.value) {
      this.value = value;
    } else {
      this._insert(value, this)
    }
  }

  _insert(value, node) {

    if (value < node.value) {
      if (!node.left) {
        node.left = new Node(value);
      } else {
        this._insert(value, node.left);
      }
    }

    if (value > node.value) {
      if (!node.right) {
        node.right = new Node(value);
      } else {
        this._insert(value, node.right);
      }
    }
  }

  search(value) {
    if (this.value === value) {
      return this
    }
    if (value > this.value) {
      if (this.right) {
        return this.right.search(value);
      }
    }
    if (value < this.value){
      if (this.left) {
        return this.left.search(value);
      }
    }
    return null;
  }
}

const tree = new Node();

console.log(tree.getKey())
console.log(tree.getLeft())
console.log()