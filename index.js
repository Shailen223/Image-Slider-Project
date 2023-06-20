const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const slideWidth = 800;
let current = 1;

right.addEventListener('click', () => {
  if (current === 3) {
    slider.style.transform = 'translateX(0)';
    current = 1;
  } else {
    slider.style.transform = `translateX(-${current * slideWidth}px)`;
    current++;
  }
});


