function searchCountry(){

    var search=document.getElementById("search").value; 
   
    var url=`https://restcountries.com/v3.1/name/${search}` ;
   
    fetch (url)
        .then (res => res.json())
        .then (data => displayCountryData(data))
        .catch(error => console.error('Error:', error));
   
}



function displayCountryData(data) {
    var countryDataDisplay = document.getElementById("displayContainer");
    countryDataDisplay.innerHTML = "";

    if (data.length > 0) {
        var country = data[0];

        var flagImage = document.createElement("img");
        flagImage.src = country.flags.svg;

        var nameParagraph = document.createElement("p");
        nameParagraph.textContent = "NAME: " + country.name.common;

        var populationParagraph = document.createElement("p");
        populationParagraph.textContent = "POPULATION: " + country.population;

        var languageParagraph = document.createElement("p");
        languageParagraph.textContent = "LANGUAGE: " + country.languages[0];

        var landAreaParagraph = document.createElement("p");
        landAreaParagraph.textContent = "LAND AREA: " + country.area + " square kilometers";

        countryDataDisplay.appendChild(flagImage);
        countryDataDisplay.appendChild(nameParagraph);
        countryDataDisplay.appendChild(populationParagraph);
        countryDataDisplay.appendChild(languageParagraph);
        countryDataDisplay.appendChild(landAreaParagraph);
        
    } else {

        var notFoundParagraph = document.createElement("p");
        notFoundParagraph.textContent = "Country not found.";
        countryDataDisplay.appendChild(notFoundParagraph);
    }
}
   