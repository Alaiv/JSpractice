class Goods2 extends Goods {
    constructor(name, amount, image, count, out, sales) {
        super(name, amount, image, count, out);
        this.sales = true;
    }

    draw() {
        if(this.sales == true) {
            document.querySelector(this.out).innerHTML = "Sales ON!"
        } else {
            document.querySelector(this.out).innerHTML = "Sales Off!"
        }
    }
}