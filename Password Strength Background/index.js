const password = document.getElementById("password");
const bg = document.getElementById("background");

password.addEventListener("input", (e) => {
  if (e.target.value === "") return;
  bg.style.filter = `blur(${20 - e.target.value.length * 2}px)`;
});
