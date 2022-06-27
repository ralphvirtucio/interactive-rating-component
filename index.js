'use strict';

const interactiveRating = document.querySelector('.interactive__rating');
const interactiveResult = document.querySelector('.interactive__thankyou');

const ratingBtn = document.querySelectorAll('.interactive__cta-btn');
const submitBtn = document.querySelector('.interactive__submit-btn');

let rating = 0;
rating;

const ratingClicked = i => {
  i.classList.add('rating-clicked');
  document.querySelector('.rating').textContent = i.value;
};
ratingBtn.forEach(i => {
  i.addEventListener('click', () => ratingClicked(i));
});

submitBtn.addEventListener('click', () => {
  interactiveRating.classList.add('hidden');
  interactiveResult.classList.remove('hidden');
});
