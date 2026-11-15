let d = new Date();
document.getElementById("year").innerHTML = `&copy; ${d.getFullYear()}  &#10070; Darwin J. Tovar &#10070; Venezuela`;
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

document.querySelector("#hamburger").addEventListener("click", function() {
    const nav = document.querySelector(".nav-home");
    nav.classList.toggle("show");
    if (nav.classList.contains("show")) {
        document.getElementById("hamburger").textContent = "X";
    }
    else {
        document.getElementById("hamburger").textContent = "☰";
    }
});




const lat = 10.5764; 
const lon = -62.3031;
const apiKey = "f4f2b97e951a7bc1c0ad577285a5701a"; 

const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

const weatherContainer = document.getElementById("weather");

async function apiFetch() {
    try {
        
        const responseCurrent = await fetch(currentWeatherUrl);
        if (responseCurrent.ok) {
            const dataCurrent = await responseCurrent.json();
            
            
            const responseForecast = await fetch(forecastUrl);
            if (responseForecast.ok) {
                const dataForecast = await responseForecast.json();
                displayWeather(dataCurrent, dataForecast);
            }
        } else {
            throw Error(await responseCurrent.text());
        }
    } catch (error) {
        console.log("Error in charge api:", error);
    }
}

function displayWeather(current, forecast) {
  
    const temp = Math.round(current.main.temp);
    const desc = current.weather[0].description;
    const capitalizedDesc = desc.charAt(0).toUpperCase() + desc.slice(1);

    
    const dailyForecasts = forecast.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);
    
    let forecastHTML = "";
    dailyForecasts.forEach(day => {
        const date = new Date(day.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        const dayTemp = Math.round(day.main.temp);
        forecastHTML += `<li><strong>${dayName}:</strong> ${dayTemp}&deg;C - ${day.weather[0].description}</li>`;
    });

    
    weatherContainer.innerHTML = `
        <div class="current-card">
            <p><strong>Current temperature:</strong> ${temp}&deg;C</p>
            <p><strong>Weather:</strong> ${capitalizedDesc}</p>
        </div>
        <h3>3 day forecast</h3>
        <ul class="forecast-list">
            ${forecastHTML}
        </ul>
    `;
}


apiFetch();

const membersUrl = "data/members.json";
const spotlightContainer = document.getElementById("spotlight");

async function loadSpotlights() {
    try {
        const response = await fetch(membersUrl);
        if (!response.ok) throw Error(await response.text());
        
        const data = await response.json();
        
        const members = Array.isArray(data) ? data : data.members;

        
        const eligibleMembers = members.filter(member => 
            member.membershipLevel === 2 || 
            member.membershipLevel === 3 ||
            member.membership === "Silver" || 
            member.membership === "Gold"
        );

        
        const randomSpotlights = eligibleMembers
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);

        displaySpotlights(randomSpotlights);
    } catch (error) {
        console.error("error in the files of spotlights:", error);
    }
}

function displaySpotlights(spotlights) {
    spotlightContainer.innerHTML = "";

    spotlights.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("spotlight-card");

       
        let levelText = member.membership || (member.membershipLevel === 3 ? "Gold" : "Silver");

        card.innerHTML = `
            <h3>${member.companyname}</h3>
            <p class="membership-badge">${levelText} Member</p>
            <img src="${member.image || member.imageurl}" alt="${member.companyname} logo" loading="lazy">
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p>Website: <a href="${member.website}" target="_blank">${member.companyname}</a></p>
        `;

        spotlightContainer.appendChild(card);
    });
}

loadSpotlights();