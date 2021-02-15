const container = document.querySelector(".image-container");
const unsplashURL = "https://source.unsplash.com/random/";

const rows = 5;
let timesLiked = 0;

// let localstorageArray = [];

// const localStorageGet = JSON.parse(localStorage.getItem("likes"));

for (let i = 0; i < rows * 3; i++) {
  const subContainer = document.createElement("div");
  subContainer.classList.add("sub-container");

  const img = document.createElement("img");
  img.src = `${unsplashURL}${getRandomSize()}`;

  const likes = document.createElement("div");
  likes.classList.add("likes");
  // likes.id = `${i}`;
  likes.setAttribute("likes", 0);
  likes.innerHTML = "Liked: 0 times";

  container.appendChild(subContainer);
  subContainer.appendChild(img);
  subContainer.appendChild(likes);
}

// if (localStorageGet) {
//   const likes1 = document.querySelectorAll(".likes");

//   localStorageGet.forEach((ob) => {
//     likes1.forEach((like) => {
//       if (+like.getAttribute("id") === +ob.index) {
//         like.setAttribute("likes", ob.likes);
//       }
//     });
//   });
// }

const subContainers = document.querySelectorAll(".sub-container");

subContainers.forEach((subContainer) => {
  subContainer.addEventListener("dblclick", (e) =>
    createHeart(e, subContainer)
  );
});

function getRandomSize() {
  return `${getRandomNumber()}x${getRandomNumber()}`;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}

function createHeart(e, subContainer) {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.parentNode.offsetLeft;
  const topOffset = e.target.parentNode.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = `${yInside}px`;

  heart.style.left = `${xInside}px`;

  subContainer.appendChild(heart);

  const likes = e.target.nextElementSibling;

  let currentLikes = +likes.getAttribute("likes");

  // ++currentLikes;

  likes.setAttribute("likes", ++currentLikes);

  // localstorageArray.push({ likes: currentLikes, index });

  // localStorage.setItem("likes", JSON.stringify(localstorageArray));

  likes.innerHTML = `Liked: ${currentLikes} times`;

  setTimeout(() => heart.remove(), 2500);
}
