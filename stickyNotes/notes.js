const addNote = document.querySelector(".header__button");
const textArea = document.querySelector(".notes__window");
const closeArea = document.querySelector(".close");
const contentArea = document.querySelector(".content")
const colorArray = ["blue", "red", "green", "black", "orange", "gray", "yellow", 'pink', 'purple', 'Cyan', 'Chocolate']

addNote.addEventListener("click", () => textArea.style.display = "block");
closeArea.addEventListener("click", () => textArea.style.display = "none");

textArea.addEventListener("keydown", function (event) {
    if(event.key === "Enter") {
        createCard()
    }
})

let calcMath = () => {
    return Math.floor(Math.random() * (10 - 1 + 1) + 1)
}


function createCard () {
    const addValue = document.querySelector(".add-notes__textarea");
    let card = document.createElement("div");
    card.className = "content__item";
    card.innerHTML = addValue.value;
    card.style.margin = calcMath() + 'px';
    card.style.transform = "rotate" + `(${calcMath()}deg)`
    card.style.backgroundColor = colorArray[calcMath()];

    card.addEventListener("dblclick", () => {
        contentArea.removeChild(card)
    })

    contentArea.appendChild(card);


}