"use strict";

//Initialize global variables
let sliderValue = 2;
let toggleStatus = "unchecked";

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
  let pageviewElement = document.querySelector(".pageviews");
  let pricingSpan = document.querySelector(".pricing__span");
  let pricingDurationSpan = document.querySelector(".pricing__duration");

  let pgvws = pricingObj.pageviewsArr[sliderValue];
  let monthlyPricing = pricingObj.pricingArr[sliderValue];
  let pricing = monthlyPricing;
  let pricingDuration = "month";

  //Modify # of pageviews to reflect slider position
  pageviewElement.textContent = `${pgvws} Pageviews`;

  //If billing toggle is checked, make pricing into annual pricing
  if (toggleStatus) {
    pricing = pricing * 12 * 0.75;
    pricingDuration = "year";
  }

  //Modify the pricing text appropriately
  pricingSpan.textContent = `$${pricing}.00`;
  pricingDurationSpan.textContent = pricingDuration;
} //End function calcPricing()

//Event listeners for sliding the slider and clicking the toggle. Both use same function.
document.querySelector(".slider").addEventListener("input", calcPricing);

document
  .getElementById("billing-toggle__checkbox")
  .addEventListener("change", calcPricing);

//Event listener to update CSS custom property to properly
//set linear-gradient() stop/start widths.
document.querySelector(".slider").addEventListener("input", setSliderWidthVar);
