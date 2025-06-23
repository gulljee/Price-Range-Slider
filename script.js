const minSlider = document.getElementById("min-slider");
const maxSlider = document.getElementById("max-slider");
const minInput = document.querySelector(".min-price");
const maxInput = document.querySelector(".max-price");
const sliderTrack = document.querySelector(".slider-track");

let minGap = 1000; // Minimum gap between min and max slider values
let maxValue = 10000;



// Update input fields and track fill
function updateSlider(event) {
  let minVal = parseInt(minSlider.value);
  let maxVal = parseInt(maxSlider.value);

  // Prevent overlap
  if (maxVal - minVal < minGap) {
    if (event.target === minSlider) {
      minSlider.value = maxVal - minGap;
      minVal = maxVal - minGap;
    } else {
      maxSlider.value = minVal + minGap;
      maxVal = minVal + minGap;
    }
  }

  minInput.value = minVal;
  maxInput.value = maxVal;

}

// Fill the slider track between thumbs


// Initial setup
minInput.value = minSlider.value;
maxInput.value = maxSlider.value;

// Event listeners
minSlider.addEventListener("input", updateSlider);
maxSlider.addEventListener("input", updateSlider);
