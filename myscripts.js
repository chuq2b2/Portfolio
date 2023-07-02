/*------nav-bar shadow when scrolled-------*/
window.addEventListener('scroll', (e) => {
  const nav = document.querySelector('header');
  if (window.pageYOffset > 0) {
    nav.classList.add("add-shadow");
  } else {
    nav.classList.remove("add-shadow");
  }
});

const container = document.querySelector('.container');
const links = document.querySelector('.links');


/*--------wave-fade when scrolled-----------*/
window.addEventListener("scroll", function () {
  var shape = document.querySelector(".custom-shape-divider-bottom");
  var scrollPosition = window.scrollY;
  var shapeHeight = shape.offsetHeight;
  var windowHeight = window.innerHeight;
  var shapeOffset = shape.offsetTop;

  var opacity = 1 - (scrollPosition - shapeOffset + windowHeight) / (shapeHeight + windowHeight);

  if (opacity >= 0 && opacity <= 1) {
    shape.style.opacity = opacity;
  }
});

/*----------scroll to top---------------*/
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}