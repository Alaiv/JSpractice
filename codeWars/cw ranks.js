class User {
    constructor() {
        this.ranks = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3 ,4, 5, 6, 7, 8]
        this.position = 0
        this.rank = this.ranks[this.position]
        this.progress = 0
    }

    incProgress(value) {
        if(value > 8 || value < -8 || value === 0) {
            throw new Error('ERROR')
        }

        let newPosition = this.ranks.indexOf(value);
        let previousPos = newPosition - this.position
        if (previousPos === 0) {
            this.progress += 3
        } else if (previousPos === -1) {
            this.progress += 1
        }else if (previousPos > 0) {
            this.progress += 10 * previousPos * previousPos;
        }

        let up = Math.floor(this.progress / 100);
        this.progress -= up * 100;
        this.position += up
        this.rank = this.ranks[this.position]
        this.progress = this.rank === 8 ? 0 : this.progress;
    }
}

const user = new User();

user.incProgress(6)
console.log(user.progress);
console.log(user.rank)

