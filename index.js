//Use ChatGPT to help explain the code

const right = document.querySelector('.right');
const left = document.querySelector('.left');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.images');
console.log(images);
const slideWidth = 800;
let current = 1;

const nextslide = () => {
  slider.style.transform = `translateX(-${current * slideWidth}px)`;
    current++;
}

const firstslide = () => {
  slider.style.transform = 'translateX(0)';
  current = 1;
}

const prevslide = () => {
  slider.style.transform = `translateX(-${(current - 2)*800}px)`;
    current--;
}

const lastslide = () => {
  slider.style.transform = `translateX(-${(images.length - 1) * 800}px)`;
    current = images.length;
}

left.addEventListener('click', () => {
  // another way of if/else
  current > 1? prevslide() : lastslide();
});



right.addEventListener('click', () => {
  // another way of if/else
  current < images.length? nextslide() : firstslide();
});

console.log(left,"left", right); 


