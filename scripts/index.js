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

  handleColumns: function(idx) {
    $('.col').fadeOut("slow");
    $('#section-' + idx + ' .col').fadeIn("slow", function(){
      danQuery.handleSkillBars(idx);
    });
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

  headingsDictionary: {
    0: ['Daniel Homer', 'Full-Stack Web Developer'],
    1: ['About Me', ''],
    2: ['Projects', ''],
    3: ['Contact Me', '']
  },

  handleHeadings(idx) {
    $('#headings').slideUp('slow', function(){
      $('#main-heading').text(danQuery.headingsDictionary[idx][0]);
      $('#subheading').text(danQuery.headingsDictionary[idx][1]);
      $('#headings').slideDown('slow');
    });
  },

  handleSkillBars(idx) {
    $('.skill-bar').each(function(){
      if (idx === 1) {
        var width = parseInt($(this).html())*25;
        $(this).animate({width: width}, "slow");
      }
      else {
        $(this).width(0);
      }
    })
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
  danQuery.handleColumns(oldIdx);

  $(window).resize(function(){
    windowHeight = $(window).height();
  });

  $(window).scroll(function(){
    var newIdx = getAnimationIdx();

    if (oldIdx !== newIdx) {
      danQuery.handleHeadings(newIdx);
      danQuery.handleGrayscale(newIdx);
      danQuery.handleNavSelect(newIdx);
      danQuery.handleColumns(newIdx);
      oldIdx = newIdx;
    }

    danQuery.handleNavBackground(conditionForNav());

  });

  $('.nav-radio').click(function(event){
    danQuery.scrollToSection($('#section-' + event.target.id.split("").pop()));
  });

});
