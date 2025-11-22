window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("main-nav").classList.add('scrolled');
  } else {
    document.getElementById("main-nav").classList.remove('scrolled');
  }
}