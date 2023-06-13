var featuresDropdown = document.querySelector(".features");
var ulFeatures = document.querySelector(".ul-features");

var companyDropdown = document.querySelector(".company");
var ulCompany = document.querySelector(".ul-company");

featuresDropdown.addEventListener("click", function() {
    ulFeatures.classList.toggle("hidden");
})

companyDropdown.addEventListener("click", function() {
    ulCompany.classList.toggle("hidden");
}) 