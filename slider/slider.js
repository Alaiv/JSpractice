const buttons = document.getElementsByClassName("buttons");
const image = document.getElementById("slider-image");
const imageArray = ["img/first.jpg", "img/second.jpg", "img/third.jpg", "img/fourth.jpg", "img/fifth.jpg"];
let leftBtn = document.getElementById("leftButton")
let rightBtn = document.getElementById("rightButton")

let count = 0;
image.src = imageArray[count];
leftBtn.disabled = true;
if(imageArray.length === 1) {
    rightBtn.disabled = true;
}

function changeImage(event) {
    let clickedButton = event.currentTarget;

    if (clickedButton.innerHTML === "next") {
        leftBtn.disabled = false;
        count++
    } else if (clickedButton.innerHTML === "prev") {
        rightBtn.disabled = false;
        count--
    }
    image.src = imageArray[count];

    if (count <= 0) {
        leftBtn.setAttribute("disabled", true)
    }

    if (count >= imageArray.length - 1) {
        rightBtn.setAttribute("disabled", true)
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = changeImage;
}