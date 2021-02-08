const images = document.querySelectorAll("img");

const links = document.querySelectorAll("li");

links.forEach((link, index) => {
  link.addEventListener("click", () => {
    hideAllImages();
    hideAllLinks();

    link.classList.add("active");
    images[index].classList.add("show");
  });
});

function hideAllImages() {
  images.forEach((image) => image.classList.remove("show"));
}

function hideAllLinks() {
  links.forEach((link) => link.classList.remove("active"));
}
