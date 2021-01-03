const toggleBtns = document.querySelectorAll(".faq-toggle");

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentNode.classList.toggle("active");
  });
});
