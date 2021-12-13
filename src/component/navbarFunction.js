// NAV POSITION
var navPos = $('nav').position().top;
var lastPos = 0;
var lockTimer;

$(window).on('scroll', function () {
  var pos = $(window).scrollTop();
  var pos2 = pos + 50;
  var scrollBottom = pos + $(window).height();

  if (!isMobile) {
    if (pos >= navPos + $('nav').height() && lastPos < pos) {
      $('nav').addClass('fixed');
    }
    if (pos < navPos && lastPos > pos) {
      $('nav').removeClass('fixed');
    }
    lastPos = pos;
  }

  // Link Highlighting
  if (pos2 > $('#home').offset().top) {
    highlightLink('home');
  }
  if (pos2 > $('#about').offset().top) {
    highlightLink('about');
  }
  if (pos2 > $('#portfolio').offset().top) {
    highlightLink('portfolio');
  }
  if (pos2 > $('#blog').offset().top) {
    highlightLink('blog');
  }
  if (
    pos2 > $('#contact').offset().top ||
    pos + $(window).height() === $(document).height()
  ) {
    highlightLink('contact');
  }

  // Prevent Hover on Scroll
  clearTimeout(lockTimer);
  if (!$('body').hasClass('disable-hover')) {
    $('body').addClass('disable-hover');
  }

  lockTimer = setTimeout(function () {
    $('body').removeClass('disable-hover');
  }, 500);
});

function highlightLink(anchor) {
  $('nav .active').removeClass('active');
  $('nav')
    .find('[dest="' + anchor + '"]')
    .addClass('active');
}
