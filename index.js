const left = document.querySelector('.left');
const right = document.querySelector('.right');
const images = document.querySelectorAll('.images');
const slider = document.querySelector('.slider');
console.log(images)
let current = 1
const slideWidth = 800;

const firstslide = () => {
  slider.style.transform = 'translate(0)'
  current = 1;
}

const lastlide = () => {
  slider.style.transform = `translateX(-${(images.length - 1) * slideWidth}px)`
  current = images.length;
}

const prevslide = () => {
  slider.style.transform = `translateX(-${(current - 2) * slideWidth}px)`
    current--;
}

const nextslide = () => {
  slider.style.transform = `translateX(-${current * slideWidth}px)`
    current++;
}

left.addEventListener('click', () => {
  current > 1? prevslide() : lastlide();
});

right.addEventListener('click', () => {
  current < images.length? nextslide() : firstslide();
});