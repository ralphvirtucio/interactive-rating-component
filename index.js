'use strict';

//Selected Elements
const ratingBtn = document.querySelectorAll('.rating-btn');
const submitBtn = document.querySelector('.interactive__submit-btn');
const thankYouSection = document.querySelector('.interactive__thankyou');
const welcomeSection = document.querySelector('.interactive__rating');

//Main Logic
const ratingClicked = rating => {
  document.querySelector('.rating').textContent = document.getElementById(
    rating.id
  ).value;
};

ratingBtn.forEach(i => {
  i.addEventListener('click', () => ratingClicked(i));
});

submitBtn.addEventListener('click', () => {
  thankYouSection.classList.remove('hidden');
  welcomeSection.classList.add('hidden');
});
