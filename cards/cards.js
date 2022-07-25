const addBtn = document.querySelector(".header__btn-add");
const deleteBtn = document.querySelector(".header__btn-del");
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const saveBtn = document.querySelector(".save");
const closeBtn = document.querySelector(".close");
const addWindow = document.querySelector(".add-card-window")
const allCards = document.querySelector(".flashcards")

addBtn.addEventListener("click", () => addWindow.style.display = "block")

closeBtn.addEventListener("click", () => addWindow.style.display = "none")

deleteBtn.onclick = () => {
    allCards.innerHTML = ""
    localStorage.clear()
}

saveBtn.onclick = addCard;

let localResults = localStorage.getItem("item");
allCards.innerHTML = localResults;

function someFunc (card2) {
    return () => {
       if(card2.style.display === "none") {
           card2.style.display = "block";
       } else {
           card2.style.display = "none";
       }
    }
}

function addCard () {
    let cardDiv = document.createElement("div");
    let cardH2 = document.createElement("h2");
    let cardH3 = document.createElement("h3");
    let deleteCard = document.createElement("button")

    cardDiv.className = "card";
    deleteCard.className = "delete__card"
    deleteCard.innerHTML = "Remove"
    cardH2.className = "flashcards__question";
    cardH3.className = "flashcards__answer";
    cardH2.innerHTML = question.value;
    cardH3.innerHTML = answer.value;
    cardH3.style.display = "none";


    cardDiv.appendChild(cardH2)
    cardDiv.appendChild(cardH3)
    cardH2.appendChild(deleteCard)
    allCards.appendChild(cardDiv);

    cardDiv.onclick = someFunc(cardH3);

    localStorage.setItem("item", allCards.innerHTML);

    question.value = "";
    answer.value = "";

    deleteCard.onclick = function () {
        allCards.removeChild(cardDiv);
        localStorage.setItem("item", allCards.innerHTML);
    }
}


//
// //===========================second=======================================
// let localResults = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
//
// const addBtn = document.querySelector(".header__btn-add");
// const deleteBtn = document.querySelector(".header__btn-del");
// const question = document.querySelector(".question");
// const answer = document.querySelector(".answer");
// const saveBtn = document.querySelector(".save");
// const closeBtn = document.querySelector(".close");
// const addWindow = document.querySelector(".add-card-window")
// const allCards = document.querySelector(".flashcards")
//
// addBtn.addEventListener("click", () => addWindow.style.display = "block")
//
// closeBtn.addEventListener("click", () => addWindow.style.display = "none")
//
// deleteBtn.onclick = () => {
//     allCards.innerHTML = ""
//     localStorage.removeItem("items");
// }
//
// saveBtn.onclick = addFlashCard;
//
// // let localResults = localStorage.getItem("qwe:") ? JSON.parse(localStorage.getItem("qwe:")):[];
// // allCards.innerHTML = localResults;
//
// function someFunc (card2) {
//     return () => {
//         if(card2.style.display === "none") {
//             card2.style.display = "block";
//         } else {
//             card2.style.display = "none";
//         }
//     }
// }
//
// function addCard (text, deleteIndex) {
//     let cardDiv = document.createElement("div");
//     let cardH2 = document.createElement("h2");
//     let cardH3 = document.createElement("h3");
//     let dltbtn = document.createElement("button")
//
//     cardDiv.className = "card";
//     cardH2.className = "flashcards__question";
//     cardH3.className = "flashcards__answer";
//     dltbtn.className = "minus-delete"
//     cardH2.innerHTML = text.question;
//     cardH3.innerHTML = text.answer;
//     cardH3.style.display = "none";
//
//     dltbtn.onclick = () => {
//         localResults.splice(deleteIndex, 1);
//         localStorage.setItem('items', JSON.stringify(localResults));
//         window.location.reload()
//     }
//
//     cardDiv.appendChild(cardH2)
//     cardDiv.appendChild(cardH3)
//     cardH2.appendChild(dltbtn)
//
//     cardDiv.onclick = someFunc(cardH3);
//
//     allCards.appendChild(cardDiv);
// }
//
// // localResults.forEach(addCard);
//
//
// function addFlashCard () {
//     let flashCardInfo = {
//         'question': question.value,
//         'answer': answer.value
//     }
//     localResults.push(flashCardInfo);
//     localStorage.setItem('items', JSON.stringify(localResults));
//     addCard(localResults[localResults.length - 1], localResults.length - 1);
//     question.value = "";
//     answer.value = "";
// }
//
//
//
