var featuresDropdown = document.querySelector(".features");
var ulFeatures = document.querySelector(".ul-features");

var companyDropdown = document.querySelector(".company");
var ulCompany = document.querySelector(".ul-company");

var dropdownArrowFeatures = document.querySelector("#dropdown-arrow-features");
var dropdownArrowCompany = document.querySelector("#dropdown-arrow-company");
var dropdownActiveFeatures = false;
var dropdownActiveCompany = false;

featuresDropdown.addEventListener("click", function(event) {
    ulFeatures.classList.toggle("hidden");

    dropdownActiveFeatures ^= true;

    if (dropdownActiveFeatures == true) {
        dropdownArrowFeatures.src ="./img/icon-arrow-up.svg";
    } else if (dropdownActiveFeatures == false) {
        dropdownArrowFeatures.src="./img/icon-arrow-down.svg"
    } 
})

companyDropdown.addEventListener("click", function() {
    ulCompany.classList.toggle("hidden");

    dropdownActiveCompany ^= true;
    
    if (dropdownActiveCompany == true) {
        dropdownArrowCompany.src = "./img/icon-arrow-up.svg"
    } else if(dropdownActiveCompany == false) {
        dropdownArrowCompany.src = "./img/icon-arrow-down.svg"
    }
}) 