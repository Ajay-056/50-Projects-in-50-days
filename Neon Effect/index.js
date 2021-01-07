const neon = document.getElementById('neon');

neon.addEventListener('mouseover', () => {
  neon.innerText = 'OPEN';
  neon.classList.add('neon');
});

neon.addEventListener('mouseout', () => {
  neon.innerText = 'CLOSED';
  neon.classList.remove('neon');
});
