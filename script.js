//***************Comparison of JSON*****************************************************************************//


var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

if(obj1.name===obj2.name && obj1.age=== obj2.age){
  console.log(true);
}

//****************************Display Country Flag****************************************************************//

const getflags = () => {
    const xhr = new XMLHttpRequest();


 xhr.open('GET', 'https://restcountries.eu/rest/v2/all');
 xhr.response = "json";
 
 xhr.send();
 
 
 xhr.onload = () => {
     const data = xhr.response;
     console.log(data);

	const UserList = document.querySelector('.flag-display');
   
     const result = JSON.parse(data)
     .map((country) => ({
       data.forEach((user) => {
                  UserList.innerHTML += `<div>
                  <img class="user-pic" src="${user.flag}"/></div>`

     }))
     console.log(result);
 }
}

getflags();

//****************************countries name, region, sub region and population****************************************************************//

const getCountries = () => {
    const xhr = new XMLHttpRequest();


 xhr.open('GET', 'https://restcountries.eu/rest/v2/all');
 xhr.response = "json";
 
 xhr.send();
 
 
 xhr.onload = () => {
     const data = xhr.response;
     console.log(data);
   
     const result = JSON.parse(data)
     .map((country) => ({
       name: country.name,
       region: country.region,
       subregion: country.subregion,
       population: country.population
     }))
     console.log(result);
 }
}

getCountries();




