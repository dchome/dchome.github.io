var danQuery = {

  scrollToSection: function(section) {
    $('html, body').animate({
      scrollTop: section.offset().top
    }, 600);
  },

  fadeAboutContent: function() {
    $('.portrait').fadeOut(1200);
    $('.portrait-p').fadeOut(1200);
  },

  handleGrayscale: function(idx) {
    $('.topic-section').addClass('grayscale');
    switch (idx) {
      case 0:
        $('#home-section').removeClass('grayscale');
        break;
      case 1:
        $('#about-section').removeClass('grayscale');
        break;
      case 2:
        $('#portfolio-section').removeClass('grayscale');
        break;
      case 3:
        $('#resume-section').removeClass('grayscale');
        break;
      case 4:
        $('#contact-section').removeClass('grayscale');
        break;
      default:
    };
  },

  handleNav: function(conditionForNav) {
    if(conditionForNav) {
      $('.nav-radio').fadeIn(1200, function(){
        $(this).addClass('alt-radio');
      });
    } else {
      $('.nav-radio').fadeIn(1200, function(){
        $(this).removeClass('alt-radio');
      });
    };
  },

  handleHeadings(idx) {
    switch (idx) {
      case 0:
        if($('#main-heading').text() != 'Daniel Homer') {
          $('#headings').slideUp('slow', function(){
            $('#main-heading').text('Daniel Homer');
            $('#subheading').text('Full-Stack Web Developer');
            $('#headings').slideDown('slow');
          });
          $('#home-control').prop('checked', true);
          danQuery.handleGrayscale(0);
        };
        break;

      case 1:
        if($('#main-heading').text() != 'About Me') {
          $('#headings').slideUp( 'slow', function(){
            $('#main-heading').text('About Me');
            $('#subheading').text('');
            $('#headings').slideDown('slow');
          });
          $('#about-control').prop('checked', true);
          danQuery.handleGrayscale(1);
        };
        break;

      case 2:
        if($('#main-heading').text() != 'Projects') {
          $('#headings').slideUp( 'slow', function(){
            $('#main-heading').text('Projects');
            $('#subheading').text('');
            $('#headings').slideDown('slow');
          });
          $('#portfolio-control').prop('checked', true);
          danQuery.handleGrayscale(2);
        };
        break;

      case 3:
        if($('#main-heading').text() != 'Experience') {
          $('#headings').slideUp( 'slow', function(){
            $('#main-heading').text('Experience');
            $('#subheading').text('');
            $('#headings').slideDown('slow');
          });
          $('#resume-control').prop('checked', true);
          danQuery.handleGrayscale(3);
        };
        break;

      case 4:
        if($('#main-heading').text() != 'Contact Me') {
          $('#headings').slideUp( 'slow', function(){
            $('#main-heading').text('Contact Me');
            $('#subheading').text('');
            $('#headings').slideDown('slow');
          });
          $('#contact-control').prop('checked', true);
          danQuery.handleGrayscale(4);
        };
        break;

    default:
    }
  }
}

$(document).ready(function(){  
  var windowHeight = $(window).height();

  var idxForAnimations = function() {
    return Math.floor(($('body').scrollTop() + windowHeight/2)/windowHeight);
  }

  var conditionForNav = function() {
    return $('body').scrollTop() >= windowHeight - 40 &&
      $('body').scrollTop() <= (windowHeight * 4) - 60
  }

  danQuery.handleGrayscale(idxForAnimations());
  danQuery.handleNav(conditionForNav());
  danQuery.handleHeadings(idxForAnimations());

  $(window).resize(function(){
    windowHeight = $(window).height();
  });

  $(window).scroll(function(){

    danQuery.handleNav(conditionForNav());
    danQuery.handleHeadings(idxForAnimations());

  });

  $("#home-control").on('click', function(event) {
    danQuery.scrollToSection($('#home-section'));
  });

  $("#about-control").on('click', function(event){
    danQuery.scrollToSection($('#about-section'));
  });

  $("#portfolio-control").on('click', function(event){
    danQuery.scrollToSection($('#portfolio-section'));
  });

  $("#resume-control").on('click', function(event){
    danQuery.scrollToSection($('#resume-section'));
  })

  $("#contact-control").on('click', function(event){
    danQuery.scrollToSection($('#contact-section'));
  })

  $('#little-control').on('click', function(event){
    danQuery.fadeAboutContent();

    $('#little-dan').fadeIn(600);
    $('#little-dan-p').fadeIn(600);
  });

  $('#college-control').on('click', function(event){
    danQuery.fadeAboutContent();

    $('#college-dan').fadeIn(600);
    $('#college-dan-p').fadeIn(600);
  });

  $('#lawyer-control').on('click', function(event){
    danQuery.fadeAboutContent();

    $('#lawyer-dan').fadeIn(600);
    $('#lawyer-dan-p').fadeIn(600);
  });

  $('#computer-control').on('click', function(event){
    danQuery.fadeAboutContent();

    $('#computer-dan').fadeIn(600);
    $('#computer-dan-p').fadeIn(600);
  });

});
