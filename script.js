let infos = document.querySelector("section");

var capitalDiv = document.createElement("div");
var flagDiv = document.createElement("div");
var countryDiv = document.createElement("div");
var continentDiv = document.createElement("div");

function search() {

    let textcountry = document.querySelector(".text").value;

   fetch(`https://www.restcountries.com/v3.1/name/${textcountry}`)

        .then(response => response.json())

        .then(data => {

            const country = data[0];

            const capital = country.capital
                ? country.capital[0]
                : "Non disponible";

            const continent = country.continents
                ? country.continents[0]
                : "Non disponible";

            const flag = country.flags.svg;

            const name = country.name.common;

            countryDiv.innerHTML =
                `<span>Pays</span><br><p>${name}</p>`;

            capitalDiv.innerHTML =
                `<span>Capitale</span><br><p>${capital}</p>`;

            continentDiv.innerHTML =
                `<span>Continent</span><br><p>${continent}</p>`;

            flagDiv.innerHTML =
                `<span>Drapeau</span><br>
                 <img src="${flag}" width="200">`;

            infos.innerHTML = "";

            infos.appendChild(countryDiv);
            infos.appendChild(continentDiv);
            infos.appendChild(capitalDiv);
            infos.appendChild(flagDiv);
        })

        .catch(error => {
            console.error(error);
            infos.innerHTML =
                "<p>Pays introuvable !</p>";
        });
}
