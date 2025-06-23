const minSlider = document.getElementById('min-slider');
const maxSlider = document.getElementById('max-slider');
const minPriceInput = document.querySelector('.min-price');
const maxPriceInput = document.querySelector('.max-price');
const track = document.querySelector('.slider-track');

function updateTrack(minVal, maxVal) {
  const minPercent = (minVal / 10000) * 100;
  const maxPercent = (maxVal / 10000) * 100;

  track.style.setProperty('--left', `${minPercent}%`);
  track.style.setProperty('--right', `${100 - maxPercent}%`);
  track.style.setProperty(
    'background',
    `linear-gradient(to right, #d3d3d3 ${minPercent}%, green ${minPercent}%, green ${maxPercent}%, #d3d3d3 ${maxPercent}%)`
  );
}

minSlider.addEventListener('input', () => {
  let minVal = parseInt(minSlider.value);
  let maxVal = parseInt(maxSlider.value);

  if (minVal > maxVal - 1000) {
    minVal = maxVal - 1000;
    minSlider.value = minVal;
  }

  minPriceInput.value = minVal;
  maxPriceInput.value = maxVal;

  updateTrack(minVal, maxVal);
});

maxSlider.addEventListener('input', () => {
  let minVal = parseInt(minSlider.value);
  let maxVal = parseInt(maxSlider.value);

  if (maxVal < minVal + 1000) {
    maxVal = minVal + 1000;
    maxSlider.value = maxVal;
  }

  minPriceInput.value = minVal;
  maxPriceInput.value = maxVal;

  updateTrack(minVal, maxVal);
});

// Initial setup
(function init() {
  minPriceInput.value = minSlider.value;
  maxPriceInput.value = maxSlider.value;
  updateTrack(parseInt(minSlider.value), parseInt(maxSlider.value));
})();
