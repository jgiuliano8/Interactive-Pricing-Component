"use strict";

//Initialize global variables
var sliderValue = 2;
var toggleStatus = "unchecked";

const pricingObj = {
  pageviewsArr: ["10K", "50K", "100K", "500K", "1M"],
  pricingArr: [8, 12, 16, 24, 36], //In dollars per month
};

function setSliderWidthVar() {
  const sliderElement = document.querySelector(".slider");
  sliderValue = sliderElement.value;

  //Sets CSS custom property --bg-slider-value to current
  //range input value.
  document.body.style.setProperty("--bg-slider-value", sliderValue);
}

function calcPricing() {
  //Get values from slider and toggle
  sliderValue = document.querySelector(".slider").value;
  toggleStatus = document.getElementById("billing-toggle__checkbox").checked;

  //Initialize local variables
  var pageviewElement = document.querySelector(".pageviews");
  var pricingSpan = document.querySelector(".pricing__span");
  var pricingDurationSpan = document.querySelector(".pricing__duration");

  var pgvws = pricingObj.pageviewsArr[sliderValue];
  var monthlyPricing = pricingObj.pricingArr[sliderValue];
  var pricing = monthlyPricing;
  var pricingDuration = "month";

  //Modify # of pageviews to reflect slider position
  pageviewElement.textContent = pgvws + " Pageviews";

  //If billing toggle is checked, make pricing into annual pricing
  if (toggleStatus) {
    pricing = pricing * 12 * 0.75;
    pricingDuration = "year";
  }

  //Modify the pricing text appropriately
  pricingSpan.textContent = "$" + pricing + ".00";
  pricingDurationSpan.textContent = pricingDuration;
} //End function calcPricing()

// Test to see if browser is IE 11. If so it
// inserts :hover state rules for submit button. This code enables
// separation of IE 11 and mobile :hover state support.
var UA = navigator.userAgent;
const regEx = /Trident/;
if (regEx.test(UA)) {
  var sheet = document.styleSheets[1];
  sheet.insertRule(
    ".button-trial:hover { padding: 1em 3.25em; box-shadow: 0px 2px 3px 3px rgba(50, 50, 50, 0.2);}",
    0
  );
}

//Event listeners for sliding the slider and clicking the toggle. Both use same function.
document.querySelector(".slider").addEventListener("change", calcPricing);

document
  .getElementById("billing-toggle__checkbox")
  .addEventListener("change", calcPricing);

//Event listener to update CSS custom property to properly
//set linear-gradient() stop/start widths.
document.querySelector(".slider").addEventListener("input", setSliderWidthVar);
