

    let overall = document.querySelector(".get_city");
    // let button = document.querySelector(".button-primary");

overall.addEventListener("click", function () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${overall.value}&appid=c0f80980980331808c681e5ff8ea648f`)
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            console.log(data);
            document.querySelector(".package-name").innerHTML = data.name;
            document.querySelector(".price").innerHTML = Math.round(data.main.temp - 273) + '&deg';
            document.querySelector(".disclaimer").textContent = data.weather[0]['description'];
            //https://openweathermap.org/img/wn/02d@2x.png
            document.querySelector(".features li").innerHTML = `<img src= "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
            document.querySelector(".package-name-nation").innerHTML = data.sys.country;
        })
        .catch(function () {

        });

})
