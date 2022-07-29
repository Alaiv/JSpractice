const textArea = document.querySelector('#quote');
let count = 0

const url = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random'


async function getQuote() {
    try {
        let response = await fetch(url);
        let data = await response.json();
        setInterval(() => {
            if (count < data.message.length) {
                textArea.innerHTML += data.message[count]
                count++
            }
        }, 75)

        setInterval(() => {
            location.reload()
        }, 20000)
    }
    catch (err) {
        console.error(err)
    }


}


window.addEventListener('load', getQuote)


//====================================second=======================
// let quoteArr = [];
// let index = 0;
// let textPosition = 0;
// let check = true;
//
// let textArea = document.querySelector('#quote');
//
//
// function loadQuote() {
//     const url = 'https://api.quotable.io/random'
//
//     fetch(url)
//         .then(response => {
//             return response.json()
//         })
//         .then(data => {
//             quoteArr[index] = data.content
//        } )
//         .catch(error => console.error(error))
// }
//
//
// console.log(quoteArr)
//
// typer = () => {
//     if (check) {
//         loadQuote();
//         quoteArr[index] += '';
//         check = false;
//     }
//
//     textArea.innerHTML = quoteArr[index].substring(0, textPosition);
//
//     if (textPosition++ !== quoteArr[index].length) {
//         setTimeout('typer()', 100);
//     }
//     else {
//         quoteArr[index] = ' ';
//         setTimeout('typer()', 4000);
//         textPosition = 0;
//         check = true;
//     }
// }

// window.addEventListener('load', typer);


