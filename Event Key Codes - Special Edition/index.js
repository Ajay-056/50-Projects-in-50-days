const insert = document.getElementById('insert');
const key = document.getElementById('key');

// let prev = '';

// window.addEventListener('keydown', (e) => {
//   prev += ' ' + e.key;
//   insert.innerHTML = `<div class="key">${
//     e.key === ' ' ? (prev += 'Space') : prev
//   }<\div>`;
// });

window.addEventListener('keydown', (e) => {
  key.classList.remove('fadeOut');
  key.classList.add('key');
  key.innerHTML = e.key === ' ' ? 'Space' : e.key;
  setTimeout(removeKey, 650);
});

function removeKey() {
  key.classList.remove('key');
  key.classList.add('fadeOut');
}
