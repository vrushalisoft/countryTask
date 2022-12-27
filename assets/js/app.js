
var cl = console.log;

cl(countries);

var info =document.getElementById("countryInfo");

var result ='';
function countryDetails(arr){
  arr.forEach(function(country){
      result += `<div class="col-lg-3 col-md-6 col-xs-12">
                    <div class="card">
                        <img src="${country.flag}" class="img-fluid ml-5">
                        <figcaption class="countrydetails">
                            <h3 class="text-center mt-3 mb-3">${country.name}</h3>
                            <div>
                                <h5><strong>Capital:</strong> ${country.capital}</h5>
                                <h5><strong>Languages:</strong> ${country.languages[0]}</h5>
                                <h5><strong>Population:</strong> ${country.population}</h5>
                            </div>
                        </figcaption>
                    </div>
                </div>`
  });
  info.innerHTML = result;
}
countryDetails(countries);
