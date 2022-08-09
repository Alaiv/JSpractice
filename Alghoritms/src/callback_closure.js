function one(callback) {
    return callback ? callback(1) : 1;
}
function two(callback) {
    return callback ? callback(2) : 2;
}
function three(callback) {
    return callback ? callback(3) : 3;
}
function four(callback) {
    return callback ? callback(4) : 4;
}
function five(callback) {
    return callback ? callback(5) : 5;
}
function six(callback) {
    return callback ? callback(6) : 6;
}
function seven(callback) {
    return callback ? callback(7) : 7;
}
function eight(callback) {
    return callback ? callback(8) : 8;
}
function nine(callback) {
    return callback ? callback(9) : 9;
}

function plus(a) {
    return function (b) {
        return b + a
    }
}
function minus(a) {
    return function (b) {
        return b - a
    }
}
function divide(a) {
    return function (b) {
        return b / a
    }
}
function multi(a) {
    return function (b) {
        return b * a
    }
}

console.log(nine(multi(three())))