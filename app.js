const APIKey = "ff08c228b6dffa084712f0b23a4ad6c9";
const formData = document.getElementById("form")
const showWeather = document.getElementById("showWeather")
const heightKam = document.getElementById("heightKam")

formData.addEventListener("submit", (e) => {
    heightKam.style.height = "40vh"
    e.preventDefault()
    showWeather.innerHTML = `
<div class="banter-loader">
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
</div>
    `
    let city = document.getElementById("cityValue").value

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`

    fetch(url).then((res) => res.json()).then((data) => {
        console.log(data)
        heightKam.style.transition = "1.5s"
        // setInterval(() => {

            showWeather.innerHTML = `
            <div class="d-flex align-items-center justify-content-center  flex-column w-25 border p-4 rounded-3">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" width="120" />
            <h1>${data.weather[0].main}</h1>
            <h2>${data.main.temp} C°</h2>
            <h3>Wind Speed</h3>
            <span>Speed : ${data.wind.speed}</span>
            <span>Degree : ${data.wind.deg}C°</span>
            </div>
            `
        // }, 1000);
    }).catch((err) => {
        console.log(err.message)
    })

})