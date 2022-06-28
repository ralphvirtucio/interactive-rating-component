'use strict';

//Selected Elements
const ratingBtn = document.querySelectorAll('.interactive__cta-btn');
const submitBtn = document.querySelector('.interactive__submit-btn');
const thankYouSection = document.querySelector('.interactive__thankyou');
const welcomeSection = document.querySelector('.interactive__rating');

//Main Logic
const ratingClicked = rating => {
  if (!rating.classList.contains('rating-clicked')) {
    rating.classList.add('rating-clicked');
    document.querySelector('.rating').textContent = rating.value;
  } else {
    rating.classList.remove('rating-clicked');
    document.querySelector('.rating').textContent = 0;
  }
};

ratingBtn.forEach(i => {
  i.addEventListener('click', () => ratingClicked(i));
});

submitBtn.addEventListener('click', () => {
  thankYouSection.classList.remove('hidden');
  welcomeSection.classList.add('hidden');
});
