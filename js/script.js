"use strict";

let sliderValue = 3;
let toggleStatus = "unchecked";

const pricingObj = {
  pageviewsArr: ["10K", "50K", "100K", "500K", "1M"],
  pricingArr: [8, 12, 16, 24, 36], //In dollars per month
};

function calcPricing() {
  sliderValue = document.querySelector(".slider").value;
  toggleStatus = document.getElementById("billing-toggle__checkbox").checked;

  let pageviews = pricingObj.pageviewsArr[sliderValue];
  let monthlyPricing = pricingObj.pricingArr[sliderValue];
  let pricing = monthlyPricing;

  if (toggleStatus) {
    pricing = pricing * 12 * 0.75;
  }

  console.log(pricing, pageviews);
}

document.querySelector(".slider").addEventListener("input", calcPricing);

document
  .getElementById("billing-toggle__checkbox")
  .addEventListener("change", calcPricing);
