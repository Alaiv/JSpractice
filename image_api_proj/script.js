let div = document.querySelectorAll("#content")[0];
let input = document.querySelector("#inputText")
let btn = document.getElementById("btn")

input.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        getPhoto();
    }
});

btn.addEventListener("click", () => {
    getPhoto();

});

getPhoto = () => {
    div.innerHTML = "";

    const url = 'https://api.unsplash.com/search/photos?query=' + input.value + '&per_page=9&client_id=3NiBkvTKmv52k3oRWc_qo1cryunLVOsbNgiWvithVMo'
    fetch(url)
        .then(response => {
            if (response.ok)
                return response.json()
            else {
                alert(response.status)
            }
        })
        .then(data => {
            for (let i = 0; i < data.results.length; i++) {
                let image = document.createElement("div")
                image.className = "img";
                image.style.backgroundImage = 'url(' + data.results[i].urls.raw + ')';
                div.appendChild(image);
            }
        })
        .catch(error => console.log(error))
}



