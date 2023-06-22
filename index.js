const left = document.querySelector('.left');
const right = document.querySelector('.right');
const images = document.querySelectorAll('.images');
const slider = document.querySelector('.slider');
console.log(images);
let current = 1;
const slideWidth = 800;

const firstslide = () => {
  slider.style.transform = 'translate(0)';
  current = 1;
}

const lastslide = () => {
  slider.style.transform = `translate(-${(images.length - 1) * slideWidth}px)`;
  current = images.length;
}

const prevslide = () => {
  slider.style.transform = `translate(-${(current - 2) * slideWidth}px)`;
    current--;
}

const nextslide = () => {
  slider.style.transform = `translate(-${current * slideWidth}px)`;
    current++;
}

left.addEventListener('click', () => {
  current > 1? prevslide() : lastslide();
})

right.addEventListener('click', () => {
  current < images.length? nextslide() : firstslide();
})