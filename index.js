// Initialize variables for DOM manipulations
const ratingBtn = document.querySelectorAll('input[name="rating"]');
const rating = document.querySelector('.rate');
const submitBtn = document.querySelector('.btn--submit');
const isShow = document.querySelector('.interactive-ratings--state');
const isHidden = document.querySelector('.interactive-thankyou-state');

// Listen through clicks and check if rate is checked
submitBtn.addEventListener('click', function (e) {
  // Prevent on not showing thank you card component
  e.preventDefault();

  // Iterate through the nodes of input type=radio
  ratingBtn.forEach((rate) => {
    // Check if the radio/rate is checked
    if (rate.checked) {
      // Assign the rate value to the rating text content
      rating.textContent = rate.value;
      isHidden.classList.remove('hidden');
      isShow.classList.add('hidden');
    }
  });
});
