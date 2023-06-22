const left = document.querySelector('.left');
const right = document.querySelector('.right');
const images = document.querySelectorAll('.images');
const slider = document.querySelector('.slider');
console.log(images);
const slideWidth = 800;
let current = 1;

const firstslide = () => {
  slider.style.transform = 'translate(0)'
  current = 1;
}

const lastslide = () => {
  slider.style.transform = `translateX(-${(images.length - 1) * 800}px)`;
  current = images.length;
}

const prevslide = () => {
  slider.style.transform = `translateX(-${(current - 2) * 800}px)`;
  current--;
}

const nextslide = () => {
  slider.style.transform = `translateX(-${current * slideWidth}px)`;
  current++;
}

left.addEventListener('click', () => {
  current > 1? prevslide() : lastslide()
});

right.addEventListener('click', () => {
  current < images.length? nextslide() : firstslide()
});