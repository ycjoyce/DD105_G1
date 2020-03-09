let lFollowX = 0,
      lFollowY = 0,
      x = 0,
      y = 0,
      friction = 1 / 30,
      translate;

function moveBackground() {
      x += (lFollowX - x) * friction;
      y += (lFollowY - y) * friction;

      translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

      $('.bg').css({
            '-webit-transform': translate,
            '-moz-transform': translate,
            'transform': translate
      });

      window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function (e) {

      var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
      var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
      lFollowX = 20 * lMouseX / 100; // 100 : 12 = lMouxeX : lFollow
      lFollowY = 10 * lMouseY / 100;
});

moveBackground();

$.fn.parallax = function(resistance, mouse) {
  TweenMax.to($(this), 0.2, {
    x: -((mouse.clientX - window.innerWidth / 2) / resistance),
    y: -((mouse.clientY - window.innerHeight / 2) / resistance)
  });
};

$(document).mousemove(function(e) {
  // $(".parallax1").parallax(-30, e);
  $(".parallax2").parallax(10, e);
  $(".parallax3").parallax(20, e);
  $(".parallax4").parallax(30, e);
  $(".parallax5").parallax(20, e);
  $(".parallax6").parallax(20, e);
  $(".collarDeco1").parallax(20, e);
  $(".collarDeco2").parallax(10, e);
  $(".collarDeco3").parallax(30, e);
  $(".collarDeco4").parallax(10, e);
  $(".collarDeco5").parallax(20, e);
  $(".collarDeco6").parallax(30, e);
  $(".collarDeco7").parallax(10, e);
  $(".collarDeco8").parallax(5, e);
  // $(".paw1").parallax(10, e);
  // $(".paw2").parallax(5, e);
  });
