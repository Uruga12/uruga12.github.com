function scrollTo(element) {
  window.scroll({
    left: 0, 
    top: element.offsetTop, 
    behavior: 'smooth'
  })
}



var button = document.querySelector('.faq_b');
var footer = document.querySelector('#faq_s');

button.addEventListener('click', () => {
  scrollTo(footer);
})

function scrollTo(element) {
  window.scroll({
    left: 0, 
    top: element.offsetTop, 
    behavior: 'smooth'
  })
}

var button = document.querySelector('.roadmap_b');
var footer = document.querySelector('#roadmap_s');

button.addEventListener('click', () => {
  scrollTo(footer);
})