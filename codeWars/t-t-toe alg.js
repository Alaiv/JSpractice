function isSolved(board) {



    if (board[0][0] === 1 && board[0][1] === 1 && board[0][2] === 1) {
        return 1
    } else if (board[0][0] === 2 && board[0][1] === 2 && board[0][2] === 2) {
        return 2
    }

    if (board[0][0] === 1 && board[1][0] === 1 && board[2][0] === 1) {
        return 1
    } else if (board[0][0] === 2 && board[1][0] === 2 && board[2][0] === 2) {
        return 2
    }

    if (board[0][1] === 1 && board[1][1] === 1 && board[2][1] === 1) {
        return 1
    } else if (board[0][1] === 2 && board[1][1] === 2 && board[2][1] === 2) {
        return 2
    }

    if (board[0][2] === 1 && board[1][2] === 1 && board[2][2] === 1) {
        return 1
    } else if (board[0][2] === 2 && board[1][2] === 2 && board[2][2] === 2) {
        return 2
    }

    if (board[1][0] === 1 && board[1][1] === 1 && board[1][2] === 1) {
        return 1
    } else if (board[1][0] === 2 && board[1][1] === 2 && board[1][2] === 2) {
        return 2
    }

    if (board[2][0] === 1 && board[2][1] === 1 && board[2][2] === 1) {
        return 1
    } else if (board[2][0] === 2 && board[2][1] === 2 && board[2][2] === 2) {
        return 2
    }

    if (board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1) {
        return 1
    } else if (board[0][0] === 2 && board[1][1] === 2 && board[2][2] === 2) {
        return 2
    }

    if (board[0][2] === 1 && board[1][1] === 1 && board[2][0] === 1) {
        return 1
    } else if (board[0][2] === 2 && board[1][1] === 2 && board[2][0] === 2) {
        return 2
    }

    if(board.join().includes(0)) {
        return -1
    } else {
        return 0
    }
}


console.log(isSolved([
    [1, 2, 1],
    [1, 1, 2],
    [1, 2, 3]
]))

//=====regex==============
// function isSolved(board) {
//     board = board.join('-').replace(/,/g,'');
//     console.log(board)
//     if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
//     if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
//     if(/0/.test(board)) return -1;
//     return 0;
// }
//
// console.log(isSolved([
//     [0, 0, 1],
//     [0, 1, 2],
//     [1, 2, 3]
// ]))