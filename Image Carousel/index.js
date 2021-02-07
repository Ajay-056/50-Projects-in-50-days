const prev = document.getElementById("left");
const next = document.getElementById("right");
const images = document.querySelectorAll("img");
const imgs = document.getElementById("imgs");

let index = 0;
let interval = setInterval(run, 2000);

function run() {
  index++;
  changeImage();
}

function changeImage() {
  if (index > images.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = images.length - 1;
  }

  imgs.style.transform = `translateX(${-index * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

next.addEventListener("click", () => {
  index++;
  changeImage();
  resetInterval();
});

prev.addEventListener("click", () => {
  index--;
  changeImage();
  resetInterval();
});
