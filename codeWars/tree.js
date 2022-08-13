const tree = [
    {
        v: 5,
        c: [
            {
                v: 5
            },
            {
                v: 10,
                c: [
                    {
                        v: 11,
                    }
                ]
            },
            {
                v: 11,
                c: [
                    {
                        v: 12,
                        c: [
                            {
                                v: 5
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        v: 5,
        c: [
            {
                v: 7
            },
            {
                v: 12,
                c: [
                    {
                        v: 11,
                    }
                ]
            },
            {
                v: 14,
            },
        ]
    }
]

function resursiveTree(tr) {
    if(!tr.length) {
        return 0;
    }
    let sum = 0
    let stack = []

    tr.forEach(val => stack.push(val))
    console.log(stack)
    while (stack.length) {
        let node = stack.pop()
        sum += node.v
        if(node.c) {
            node.c.forEach(val => stack.push(val))
        }
    }
    return sum
}


console.log(resursiveTree(tree))