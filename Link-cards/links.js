const groceryLink = document.querySelector("#img1")
const flashCards = document.querySelector("#img2")
const todo = document.querySelector("#img3")
const weatherApi = document.querySelector("#img4")
const quizApp = document.querySelector("#img5")
const marvelApi = document.querySelector("#img6")


const urlArray = [
    'https://www.youtube.com/watch?v=MKgDQjZwI2o&ab_channel=codefoxx',
    'https://www.youtube.com/watch?v=wtqbOFYivxw&ab_channel=codefoxx',
    'https://www.youtube.com/watch?v=H5tuwAO-_Kg&ab_channel=codefoxx',
    'https://iamcodefoxx.github.io/Weather-App/',
    'https://iamcodefoxx.github.io/Quiz-App/',
    'https://iamcodefoxx.github.io/Marvel-API/'
]

groceryLink.addEventListener('click', () => {
    open(urlArray[0])
})
flashCards.addEventListener('click', () => {
    open(urlArray[1])
})
todo.addEventListener('click', () => {
    open(urlArray[2])
})
weatherApi.addEventListener('click', () => {
    open(urlArray[3])
})
quizApp.addEventListener('click', () => {
    open(urlArray[4])
})
marvelApi.addEventListener('click', () => {
    open(urlArray[5])
})