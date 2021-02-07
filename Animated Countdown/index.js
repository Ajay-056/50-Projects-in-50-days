"use strict";

const spans = document.querySelectorAll("span");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const replay = document.querySelector("#replay");

runAnimation();

function resetDOM() {
  counter.classList.remove("hide");
  finalMessage.classList.remove("show");

  spans.forEach((span) => {
    span.classList.value = "";
  });

  spans[0].classList.add("in");
}

function runAnimation() {
  spans.forEach((span, index) => {
    const nextToLast = spans.length - 1;

    console.log(span);

    span.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn" && index !== nextToLast) {
        span.classList.remove("in");
        span.classList.add("out");
      } else if (e.animationName === "goOut" && span.nextElementSibling) {
        span.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        finalMessage.classList.add("show");
      }
    });
  });
}

replay.addEventListener("click", () => {
  resetDOM();
  runAnimation();
});
