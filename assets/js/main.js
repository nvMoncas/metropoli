window.addEventListener('load', function(){
  var slider = document.querySelector('.glide');
  new Glide(slider, {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: 2000,
    hoverpause: true,
    swipeThreshold: true,
  }).mount()
})