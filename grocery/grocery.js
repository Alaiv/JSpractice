deleteBtn = document.querySelector(".delete");
inputText = document.querySelector(".txt");
listArea = document.querySelector(".list")

let saved = localStorage.getItem("List:")
listArea.innerHTML = saved;

function getListValue () {
    let newDiv = document.createElement("div");
    newDiv.className = "list__child"
    newDiv.innerHTML = "- " + inputText.value;
    listArea.appendChild(newDiv)
    localStorage.setItem("List:", listArea.innerHTML);
}

inputText.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        getListValue();
    }
})

deleteBtn.addEventListener("click", function (e) {
    listArea.innerHTML = "";
    localStorage.removeItem("List:")
})

