class TrieNode {
  constructor() {
      this.children = {};
      this.end = false;
  }
}


class Trie {
constructor() {
  this.root = new TrieNode();
}

insert(word) {
  let cur = this.root;
    
  for (const c of word) {
      if (!cur.children[c]) {
          cur.children[c] = new TrieNode();
      }
      cur = cur.children[c];
  }

  cur.end = true;
}

search(word) {
  let cur = this.root;

  for (const c of word) {
    if (!cur.children[c]) return false;
    cur = cur.children[c];
  }

  return cur.end;
}

startsWith(prefix) {
  let cur = this.root;

  for (const c of prefix) {
    if (!cur.children[c]) return false;
    cur = cur.children[c];
  }

  return true;
 }
}