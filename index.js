// // WORK IN PROGRESS

const ratingBtn = document.querySelectorAll('input[name="rating"]');
const rating = document.querySelector('.rate');
const submitBtn = document.querySelector('input[name="submit"]');
const isShow = document.querySelector('.interactive-ratings--state');
const isHidden = document.querySelector('.interactive-thankyou-state');

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  ratingBtn.forEach(rate => {
    if (rate.checked) {
      rating.textContent = rate.value;
      isHidden.classList.remove('hidden');
      isShow.classList.add('hidden');
    }
  });
});
