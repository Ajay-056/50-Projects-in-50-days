const panels = document.querySelectorAll('.panel');

Array.from(panels).forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  Array.from(panels).forEach((panel) => {
    panel.classList.remove('active');
  });
}
