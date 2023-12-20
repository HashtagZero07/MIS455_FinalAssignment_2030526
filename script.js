function searchCountry() {

    var search = document.getElementById("search").value;
    var url = `https://restcountries.com/v3.1/name/${search}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryData(data))
        .catch(error => console.error('Error:', error));
        
}

function displayCountryData(data) {

    var countryDataDisplay = document.getElementById("displayContainer");
    countryDataDisplay.innerHTML = "";

    if (data.length > 0) {

        var country = data[0];

        var flagImage = document.createElement("img");
        flagImage.src = country.flags.svg;
        flagImage.width = 200;
        flagImage.height = 100;

        var nameParagraph = document.createElement("p");
        nameParagraph.textContent = "NAME: " + country.name.common;

        var populationParagraph = document.createElement("p");
        populationParagraph.textContent = "POPULATION: " + country.population;

        var languageParagraph = document.createElement("p");
        languageParagraph.textContent = "LANGUAGE: " + country.languages[0];

        var landAreaParagraph = document.createElement("p");
        landAreaParagraph.textContent = "LAND AREA: " + country.area + " square kilometers";

        var moreDetailsLink = document.createElement("a");
        moreDetailsLink.href = "#";
        moreDetailsLink.textContent = "More Details";
        moreDetailsLink.onclick = function () {
            getWeather(country.name.common);
        };

        countryDataDisplay.appendChild(flagImage);
        countryDataDisplay.appendChild(nameParagraph);
        countryDataDisplay.appendChild(populationParagraph);
        countryDataDisplay.appendChild(languageParagraph);
        countryDataDisplay.appendChild(landAreaParagraph);
        countryDataDisplay.appendChild(moreDetailsLink);

    } else {
        var notFoundParagraph = document.createElement("p");
        notFoundParagraph.textContent = "Country not found.";
        countryDataDisplay.appendChild(notFoundParagraph);
    }

    temperatureElement.style.color = 'black';
    descriptionElement.style.color = 'black';
}

var apiKey = '0d34f3cb82aa8afd726262e78ad04bef';
var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q={country}&appid=0d34f3cb82aa8afd726262e78ad04bef';

function getWeather(country) {
    fetch(apiUrl.replace('{country}', country))
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {

    var temperatureElement = document.getElementById('temperature');
    var descriptionElement = document.getElementById('weatherDescription');
    var celsiusTemperature = data.main.temp - 273.15;
    temperatureElement.textContent = `Temperature: ${celsiusTemperature.toFixed(2)} °C`;
    descriptionElement.textContent = `Clouds: ${data.weather[0].description}`;
    temperatureElement.style.color = 'black';
    descriptionElement.style.color = 'black';
}