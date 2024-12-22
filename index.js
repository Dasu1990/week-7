function update(response) {
    console.log(response.data);
    let temperature = Math.round(response.data.temperature.current);
    let temp = document.querySelector("#numerical-value");
    temp.innerHTML = `${temperature}`;
    let emoji = document.querySelector("#emoji");
    let emojiDescription = response.data.condition.icon_url;
    emoji.innerHTML = `<img src = "${emojiDescription}" alt ="weather icon" style = "width:50px; hight:50px">`;
    let humidity = document.querySelector("#humidity");
    let humidityApi = response.data.temperature.humidity;
    let speed = response.data.wind.speed;
    humidity.innerHTML = `${humidityApi}%`;
    let wind = document.querySelector("#wind");
    wind.innerHTML = `${speed}km/hr`;
    let description = document.querySelector("#weather-description")
    let weatherDescription = response.data.condition.description;
    description.innerHTML = `${weatherDescription}`;
}
function searchCity(city) {
    let apiKey = "8f60e4179bbf68bea9tcd3bo5ad07f58";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    console.log(url);
    axios.get(url).then(update);
    
}
function search(event) {
    event.preventDefault();
    let input = document.querySelector("#search-input");
    console.log(input.value);
    let h1 = document.querySelector("h1");
    h1.innerHTML= `${input.value}`
    searchCity(input.value);
}
let current = new Date();
 let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
let day = days[current.getDay()];
let tday = document.querySelector("#day");
tday.innerHTML = `${day}`;
let hour = document.querySelector("#hour");
let time = current.getHours();
hour.innerHTML = `${time}`;
let minute = document.querySelector("#minute");
let min = current.getMinutes();
minute.innerHTML = `${min}`;
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

