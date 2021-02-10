const ratings = document.querySelectorAll(".rating");
const send = document.querySelector("#send");
const ratingsContainer = document.querySelector(".ratings-container");

let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

send.addEventListener("click", (e) => {
  panel.innerHTML = `<i class="fas fa-heart"></i>
                        <strong>Thank You!</strong>
                        <br>
                        <strong>Feedback: ${selectedRating}</strong>
                        <p>We'll use your feedback to improve our customer support.</p>`;
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
