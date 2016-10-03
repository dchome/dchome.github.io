var danQuery = {

  scrollToSection: function(section) {
    $('html, body').animate({
      scrollTop: section.offset().top
    }, 600);
  },

  handleGrayscale: function(idx) {
    $('.topic-section').addClass('grayscale');
    $('#section-' + idx ).removeClass('grayscale');
  },

  handleInnerSection: function(idx) {
    console.log('called');
    $('.inner-section').fadeOut("slow");
    $('#section-' + idx + ' .inner-section').fadeIn("slow");
  },

  handleNavBackground: function(conditionForNav) {
    if(conditionForNav) {
      $('.nav-radio').addClass('alt-radio');
    } else {
      $('.nav-radio').removeClass('alt-radio');
    };
  },

  handleNavSelect: function(idx) {
    $('#control-' + idx).prop('checked', true);
  },

  handleHeadings(idx) {
    switch (idx) {
      case 0:
        $('#headings').slideUp('slow', function(){
          $('#main-heading').text('Daniel Homer');
          $('#subheading').text('Full-Stack Web Developer');
          $('#headings').slideDown('slow');
        });
        $('#home-control').prop('checked', true);
        break;

      case 1:
        $('#headings').slideUp( 'slow', function(){
          $('#main-heading').text('About Me');
          $('#subheading').text('');
          $('#headings').slideDown('slow');
        });
        $('#about-control').prop('checked', true);
        break;

      case 2:
        $('#headings').slideUp( 'slow', function(){
          $('#main-heading').text('Projects');
          $('#subheading').text('');
          $('#headings').slideDown('slow');
        });
        $('#portfolio-control').prop('checked', true);
        break;

      case 3:
        $('#headings').slideUp( 'slow', function(){
          $('#main-heading').text('Contact Me');
          $('#subheading').text('');
          $('#headings').slideDown('slow');
        });
        $('#resume-control').prop('checked', true);
        break;

      default:
    }
  }
}

$(document).ready(function(){
  var windowHeight = $(window).height();

  var getAnimationIdx = function() {
    return Math.floor(($('body').scrollTop() + windowHeight/2)/windowHeight);
  }

  var conditionForNav = function() {
    return $('body').scrollTop() >= windowHeight - 40
  }

  var oldIdx = getAnimationIdx();

  danQuery.handleGrayscale(oldIdx);
  danQuery.handleNavSelect(oldIdx);
  danQuery.handleNavBackground(oldIdx);
  danQuery.handleHeadings(oldIdx);
  danQuery.handleInnerSection(oldIdx);

  $(window).resize(function(){
    windowHeight = $(window).height();
  });

  $(window).scroll(function(){
    var newIdx = getAnimationIdx();

    if (oldIdx !== newIdx) {
      danQuery.handleHeadings(newIdx);
      danQuery.handleGrayscale(newIdx);
      danQuery.handleNavSelect(newIdx);
      danQuery.handleInnerSection(newIdx);
      oldIdx = newIdx;
    }

    danQuery.handleNavBackground(conditionForNav());

  });

});
