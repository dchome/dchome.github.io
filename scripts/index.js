function scrollToSection(section) {
  console.log('it worked');
  $('html, body').animate({
    scrollTop: section.offset().top
  }, 600);
} 

$(document).ready(function(){
  var windowHeight = $(window).height();

  $(window).resize(function(){
    windowHeight = $(window).height();
    console.log('window height is ' + windowHeight);
  });

  $("#home-control").on('click', function(event) {
    scrollToSection($('#home-section'));
  });

  $("#about-control").on('click', function(event){
    scrollToSection($('#about-section'));
  });

  $("#portfolio-control").on('click', function(event){
    scrollToSection($('#portfolio-section'));
  });

  $("#resume-control").on('click', function(event){
    scrollToSection($('#resume-section'));
  })

  $("#contact-control").on('click', function(event){
    scrollToSection($('#contact-section'));
  })

});
