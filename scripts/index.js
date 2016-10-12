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
    setTimeout(function() {
      danQuery.handleProjectNav(idx)
    }, 600);
  },

  headingsDictionary: {
    0: ['Daniel Homer', 'Full-Stack Web Developer'],
    1: ['About Me', ''],
    2: ['Projects', ''],
    3: ['Contact Me', ''],
    4: ['Contact Me', '']
  },

  handleHeadings(idx) {
    $('#headings').slideUp('slow', function(){
      $('#main-heading').text(danQuery.headingsDictionary[idx][0]);
      $('#subheading').text(danQuery.headingsDictionary[idx][1]);
      $('#headings').slideDown('slow');
    });
  },

  handleSkillBars(idx) {
    var barWidth = $('#skill-1').width();
    $('.skill-bar').each(function(){
      if (idx === 1) {
        var width = parseFloat($(this).html())*barWidth*0.2;
        $(this).animate({width: width}, "slow");
      }
      else {
        $(this).width(0);
      }
    })
  },

  handleProjectNav(idx) {
    if(idx === 2) {
      $('#project-nav').fadeIn('slow');
    } else {
      $('#project-nav').fadeOut('slow');
    }
  }
}

$(document).ready(function(){
  var windowHeight = 0;
  ($(window).height() > 600) ? windowHeight = $(window).height() : windowHeight = 600;

  var getAnimationIdx = function() {
    if ($(window).width() > 700) {
      return Math.floor(($('body').scrollTop() + windowHeight/2)/windowHeight);
    } else {
      return Math.floor(($('body').scrollTop() + windowHeight/2)/(windowHeight * 2))
    }
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
    ($(window).height() > 600) ? windowHeight = $(window).height() : windowHeight = 600;
    oldIdx = getAnimationIdx();
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

  $('.project-li').click(function(event){
    var idx = event.target.id.split("").pop()
    if($(this).hasClass('selected')) {
      $(this).removeClass('selected');
      $('.proj').fadeOut('slow');
    } else {
      $('.project-li').removeClass('selected');
      $(this).addClass('selected');
      $('.proj').fadeOut('slow', function(){
      });
      setTimeout(function(){
        $('.proj-heading').fadeIn('slow');
        $('.proj-' + idx).fadeIn('slow');
      }, 600);
    }
  })

});
