function palindrome(str) {
    let newWord = "";
    for(let i of str) {
        newWord = i + newWord;
    }

    if(str.toLowerCase().match(/[^\/)(,.\s_-]/gi).join("") ==
        newWord.toLowerCase().match(/[^\/)(,.\s_-]/gi).join(""))
    {
        return true;
    } else {
        return false;
    }
}

console.log(palindrome("0_0 (: /-\ :) 0-0"));
