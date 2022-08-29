document.getElementById("navbar-open").addEventListener("click", function(){
  var navbar = document.getElementById("navbar-id");
  var navbarContain = document.getElementById("nav-contain");
  var navbarClose = document.getElementById("nav-close");
  var body = document.getElementById("body");
  navbar.classList.toggle("navbar-mobile-open");
  navbarContain.classList.toggle("navbar-container-mobile");
  navbarClose.classList.toggle("navbar-close-button");
  body.classList.toggle("body-mobile-open");
});
document.getElementById("navbar-close").addEventListener("click", function(){
  var navbar = document.getElementById("navbar-id");
  var navbarContain = document.getElementById("nav-contain");
  var body = document.getElementById("body");
  var navbarClose = document.getElementById("nav-close");
  navbar.classList.remove("navbar-mobile-open");
  navbarContain.classList.remove("navbar-container-mobile");
  navbarClose.classList.remove("navbar-close-button");
  body.classList.remove("body-mobile-open");
});