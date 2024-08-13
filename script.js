const apiKey = "a7a27382f0268066ad98d6763b3dd040";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const myInput = document.getElementById("myInput");
const myBtn = document.getElementById("myBtn");
const myImg = document.querySelector(".weather-icon")



async function getWeatherData(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        // myImg.src = "/image/404.png"
        // myImg.style.width = "60%";
        // document.querySelector(".temperature").style.opacity = "0";
        // document.querySelector(".city").style.display = "none";
        // document.querySelector(".temp").style.display = "none";
        document.querySelector("#myE").style.display = "block";
        document.querySelector("#weather").style.display = "none";
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather-container").style.height = "40vh";
    }
    else{
        const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.getElementById(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        myImg.src = "./image/clouds.png"
    }
    if(data.weather[0].main == "Clear"){
        myImg.src = "./image/clear.png"
    }
    if(data.weather[0].main == "Drizzle"){
        myImg.src = "./image/drizzle.png"
    }
    if(data.weather[0].main == "Mist"){
        myImg.src = "./image/mist.png"
    }
    if(data.weather[0].main == "Snow"){
        myImg.src = "./image/snow.png"
    }
    if(data.weather[0].main == "Rain"){
        myImg.src = "./image/rain.png"
    }
    document.querySelector(".error").style.display = "none";
    // document.querySelector(".city").style.display = "block";
    // document.querySelector(".temp").style.display = "block";
    // document.querySelector(".temperature").style.opacity = "10";
    document.querySelector("#weather").style.display = "block";
    document.querySelector(".weather-container").style.height = "65vh";
    document.querySelector("#myE").style.display = "none";
    }
    
}

myBtn.addEventListener("click", () => {
    getWeatherData(myInput.value)
})


myCheck()

// function myCheck(){
//     if(navigator.onLine){
//         window.addEventListener("online", ()=>{
//             alert("YOU ARE ONLINE!");
//         })
//     }else{
//         window.addEventListener("offline", ()=>{
//             alert("YOU ARE OFFLINE!");
//         })
//     }
// }

function myCheck() {
    function onlineHandler() {
        alert("YOU ARE ONLINE!");
    }

    function offlineHandler() {
        alert("OPPS!! YOU ARE OFFLINE!");
    }

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    // Check current status
    if (navigator.onLine) {
        onlineHandler(); // Alert if online
    } else {
        offlineHandler(); // Alert if offline
    }
}


// nixoderm

// SONGS
// 1. dancing with you ghost(sasha alex)
// 2. another love 
// 3. dusk till dawn (zain malik fetch. sia)
// 4. somewhere only we know (keane)
// 5. see you again (wiz khalifa fetch. charlie puth)
// 6. arcade (duncan laurence fetch. fletcher)





