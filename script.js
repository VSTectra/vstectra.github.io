const menu = document.querySelector('.menu');
const links = document.querySelector('.nav-links');

menu?.addEventListener('click', () => {
  links?.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => links?.classList.remove('open'));
});
