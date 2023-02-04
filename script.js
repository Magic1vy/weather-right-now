const api ={
    endpoint : "https://api.openweathermap.org/data/2.5/",
    key : "51d596abc32431bbe78c405ceae2d4c4"
}
const input = document.querySelector("#input");
input.addEventListener("keydown", enter);


const header = document.querySelector("#header");
const heading = document.querySelector("#heading");
const bg = document.querySelector("#bg");
function enter (e){
    if (e.keyCode === 13){
        getInfo(input.value);

        bg.style.display = "none";
        heading.style.display = "none";
        header.style.height = "10%";
    }
}

async function getInfo (data){
    const res = await fetch (`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const result = await res.json();

    displayResult(result);
}


function displayResult(result){
    let city = document.querySelector("#city");
    city.textContent = `${result.name}, ${result.sys.country}`;
    

    getOurData();

    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${Math.round(result.main.temp)} <span>˚</span>`;
    

    let feelsLike = document.querySelector("#feelsLike");
    feelsLike.innerHTML = `${Math.round(result.main.feels_like)}<span>˚</span>`;
    

    let conditiont = document.querySelector("#conditiont");
    conditiont.innerHTML =`${result.weather[0].main}` ;
    
 backgroundImage(result);

    let variation = document.querySelector("#variation");
    variation.innerHTML = "Min: " + `${Math.round(result.main.temp_min)} <span>˚</span>` + " " + "Max:" + `${Math.round(result.main.temp_max)} <span>˚</span>`;
    
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = "Humidity: " + `${result.main.humidity}<span>%</span>`;
}

function getOurData(){

    const myDate = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = days[myDate.getDay()];
    let todayDay = myDate.getDate();
    let month = months[myDate.getMonth()];
    let year = myDate.getFullYear();

    let showDate = document.querySelector("#date");
    showDate.textContent = `${day}` + ", " + `${todayDay}` + " " + `${month}` + " " + `${year}`;
}




function backgroundImage(result) {


    let weather = result.weather[0].main;
    if (weather === "Clear") {

        document.body.style.backgroundImage =
        "url('https://cdn.glitch.global/cc5a8b49-c063-4097-8d58-0669e79d80b3/1.jpeg?v=1658636535502')";
    }
    if (weather === "Clouds") {
        document.body.style.backgroundImage =
        "url('https://cdn.glitch.global/cc5a8b49-c063-4097-8d58-0669e79d80b3/2.jpeg?v=1658637626420')";
    
    }
    if (weather === "Snow") {
        document.body.style.backgroundImage =
        "url('https://cdn.glitch.global/cc5a8b49-c063-4097-8d58-0669e79d80b3/3.jpeg?v=1658637866286')";
    }
    if (weather === "Rain") {
        document.body.style.backgroundImage =
        "url('https://cdn.glitch.global/cc5a8b49-c063-4097-8d58-0669e79d80b3/4.jpeg?v=1658637632499')";
    }
    if (weather === "Fog") {
        document.body.style.backgroundImage =
        "url('https://cdn.glitch.global/cc5a8b49-c063-4097-8d58-0669e79d80b3/5.jpeg?v=1658637635561')";
    }
}