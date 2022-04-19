// Make header Sticky
window.onscroll = function() {headerSticky()};
var header = document.getElementById("masthead");
var sticky = header.offsetTop;

function headerSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("header--sticky");
  } else {
    header.classList.remove("header--sticky");
  }
}