const nav = document.querySelector('nav');
window.addEventListener('scroll', BgBlack);

function BgBlack() {
  if (window.pageYOffset > 10) {
    nav.style.background = 'black';
  } else {
    nav.style.background = 'transparent';
  }
};


console.log('nav');

document.body.classList.add('fade');

document.addEventListener("DOMContentLoaded", () => {
  window.setTimeout(function() {
    document.body.className = '';
  }, 1000);
});


