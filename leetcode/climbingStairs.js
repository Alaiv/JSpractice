const climbStairs = (num) => {
    const F = []
    F[0] = 0
    F[1] = 1
    F[2] = 2
    for (let i = 3; i <= num; i++) {
        F[i] = F[i - 1] + F[i - 2] + F[i - 3];
    }
    return F[num]
}

console.log(climbStairs(10))
