function searchCountry(){

    var search=document.getElementById("search").value; 
   
    var url=`https://restcountries.com/v3.1/all=${search}` ;
   
    fetch (url)
        .then (res => res.json())
        .then (data => displayCountryData(data))
        .catch(error => console.error('Error:', error));
   
}



function displayCountryData(data){

    var countryData=data;
    console.log(countryData);

}
   