const headers = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const pimg = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

function getData() {
  headers.innerHTML =
    '<img src="./photo-1496181133206-80ce9b88a853.jfif" alt="card-image">';

  title.innerHTML = "Lorem ipsum dolor sit amet.";

  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,accusantium.";

  pimg.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/46.jpg" alt="author">';

  name.innerHTML = "Ajay Krishna";

  date.innerHTML = "Oct 31, 1998";

  animated_bgs.forEach((ab) => ab.classList.remove("animated-bg"));

  animated_bg_texts.forEach((abt) => abt.classList.remove("animated-bg-text"));
}

setTimeout(getData, 2000);
