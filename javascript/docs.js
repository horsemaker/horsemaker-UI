hljs.highlightAll();
document.querySelector('.navbar-icon').addEventListener('click', () => {
  if (document.querySelector('.navbar-icon').innerText === 'menu') {
    document.querySelector('.navbar-icon').innerText = 'close';
    document.querySelector('body').classList.add('overflowY-hidden');
  } else {
    document.querySelector('.navbar-icon').innerText = 'menu';
    document.querySelector('body').classList.remove('overflowY-hidden');
  }

  document
    .querySelector('.navbar-responsive-links')
    .classList.toggle('show-responsive-links');
});

document.querySelectorAll('.navbar-link').forEach(link => link.addEventListener('click', () => {
  document
    .querySelector('.navbar-responsive-links')
    .classList.remove('show-responsive-links');
  document.querySelector('.navbar-icon').innerText = 'menu';
  document.querySelector('body').classList.remove('overflowY-hidden');
}));