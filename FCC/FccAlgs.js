
function translatePigLatin(str) {
    let consot = (/^[^aeiou]+/);
    let cons = str.match(consot);
    if(cons === null) {
        return str + "way"
    }
    if(!cons) {
        return str + "way";
    } else{
        return str.replace(consot, "") + cons + "ay";
    }

}

console.log(translatePigLatin("qweoodsadaso"));


function myReplace(str, before, after) {
    let newAfter = '';
    if(before[0] === before[0].toUpperCase()) {
        newAfter = after[0].toUpperCase() + after.slice(1, after.length);
    } else if(before[0] === before[0].toLowerCase()) {
        newAfter = after[0].toLowerCase() + after.slice(1, after.length);
    } else {
        newAfter = after;
    }
    return str.replace(before, newAfter);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped"));;