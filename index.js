// WORK IN PROGRESS

const ratingBtn = document.querySelectorAll('input[name="rating"]');
const submitBtn = document.querySelector('input[name="submit"]');
const rating = document.querySelector('.rating');
const isShow = document.querySelector('.interactive-ratings--state');
const isHidden = document.querySelector('.interactive-thankyou-state');

submitBtn.addEventListener('click', function () {
  ratingBtn.forEach(rate => {
    if (rate.checked) {
      rating.textContent = rate.value;
      isHidden.classList.remove('hidden');
      isShow.classList.add('hidden');
    }
  });
});
