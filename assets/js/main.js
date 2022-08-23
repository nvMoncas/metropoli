document.getElementById("navbar-open").addEventListener("click", function(){
  var navbar = document.getElementById("navbar-id");
  var navbarContain = document.getElementById("nav-contain");
  var navbarClose = document.getElementById("nav-close");
  navbar.classList.toggle("navbar-mobile-open");
  navbarContain.classList.toggle("navbar-container-mobile");
  navbarClose.classList.toggle("navbar-close-button");
});
document.getElementById("navbar-close").addEventListener("click", function(){
  var navbar = document.getElementById("navbar-id");
  var navbarContain = document.getElementById("nav-contain");
  var navbarClose = document.getElementById("nav-close");
  navbar.classList.remove("navbar-mobile-open");
  navbarContain.classList.remove("navbar-container-mobile");
  navbarClose.classList.remove("navbar-close-button");
});