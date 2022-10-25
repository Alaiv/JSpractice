class Random {
  constructor(num) {
    this.num = num;
    this.next = 1;
  }

  getNext() {
    const next = this.next * 1103515245 + 12345;
    this.next++;
    return (next / 65536) % (this.num + 1);
  }

  reset() {
    this.next = 1;
  }
}

const r = new Random(100);

console.log(r.getNext());
console.log(r.getNext());
console.log(r.getNext());
console.log(r.getNext());
r.reset();
console.log(r.getNext())