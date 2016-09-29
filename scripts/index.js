var danQuery = {

  scrollToSection: function(section) {
    console.log('it worked');
    $('html, body').animate({
      scrollTop: section.offset().top
    }, 600);
  },

  fadeAboutContent: function() {
    $('.portrait').fadeOut(1200);
    $('.portrait-p').fadeOut(1200);
  }

}

$(document).ready(function(){
  var windowHeight = $(window).height();

  $(window).resize(function(){
    windowHeight = $(window).height();
  });

  $(window).scroll(function(){

    if ($('body').scrollTop() >= windowHeight - 40 &&
        $('body').scrollTop() <= (windowHeight * 4) - 60) {
      $('.nav-radio').fadeIn(1200, function(){
        $(this).addClass('alt-radio');
      });
    } else {
      $('.nav-radio').fadeIn(1200, function(){
        $(this).removeClass('alt-radio');
      });
    };

    switch (Math.floor(($('body').scrollTop() + windowHeight/2)/windowHeight)) {
      case 0:
        if($('#main-heading').text() != 'Daniel Homer') {
          $('#headings').slideUp('slow', function(){
            console.log('home out')
            $('#main-heading').text('Daniel Homer');
            $('#subheading').text('Full-Stack Web Developer');
            $('#headings').slideDown('slow');
          });
          $('#home-control').prop('checked', true);
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
        };
        break;

    default:
    }

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
