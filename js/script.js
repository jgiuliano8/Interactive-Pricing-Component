"use strict";

//Initialize global variables
let sliderValue = 3;
let toggleStatus = "unchecked";

const pricingObj = {
  pageviewsArr: ["10K", "50K", "100K", "500K", "1M"],
  pricingArr: [8, 12, 16, 24, 36], //In dollars per month
};

function calcPricing() {
  //Get values for slider and toggle
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
}

document.querySelector(".slider").addEventListener("input", calcPricing);

document
  .getElementById("billing-toggle__checkbox")
  .addEventListener("change", calcPricing);
