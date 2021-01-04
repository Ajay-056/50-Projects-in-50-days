const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

updateBigcup();

smallCups.forEach((cup, index) => {
  cup.addEventListener("click", () => highlightCups(index));
});

function highlightCups(index) {
  if (
    smallCups[index].classList.contains("full") &&
    !smallCups[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }
  smallCups.forEach((cup, idx) => {
    if (idx <= index) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigcup();
}

function updateBigcup() {
  const fullcups = document.querySelectorAll(".cup-small.full").length;

  const totalCups = smallCups.length;

  if (fullcups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullcups / totalCups) * 330}px`;
    percentage.innerText = `${(fullcups / totalCups) * 100}%`;
  }

  if (fullcups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullcups) / 1000}L`;
  }
}
