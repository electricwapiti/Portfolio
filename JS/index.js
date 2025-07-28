// JS for Portfolio



// Smooth scroll 
// This was done with AI, TODO: rewrite and understand
// Literally, I might not even need this
$('a.nav-link').on('click', function(e) {
  if (this.hash !== '') {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top - 50
    }, 800);
  }
});

