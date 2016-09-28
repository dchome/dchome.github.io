function scrollToSection(section) {
  console.log('it worked');
  $('html, body').animate({
    scrollTop: section.offset().top
  }, 600);
}

function fadeAboutContent() {
  $('.portrait').fadeOut(600);
  $('.portrait-p').fadeOut(600);
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

  $('#little-control').on('click', function(event){
    fadeAboutContent();

    $('#little-dan').fadeIn(600);
    $('#little-dan-p').fadeIn(600);
  });

  $('#college-control').on('click', function(event){
    fadeAboutContent();

    $('#college-dan').fadeIn(600);
    $('#college-dan-p').fadeIn(600);
  });

  $('#lawyer-control').on('click', function(event){
    fadeAboutContent();

    $('#lawyer-dan').fadeIn(600);
    $('#lawyer-dan-p').fadeIn(600);
  });

  $('#computer-control').on('click', function(event){
    fadeAboutContent();

    $('#computer-dan').fadeIn(600);
    $('#computer-dan-p').fadeIn(600);
  });

});
