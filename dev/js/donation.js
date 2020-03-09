$(document).ready(function () {
    $('.ques').on('click', function(e) {e.preventDefault();
    
    $(this).toggleClass('active');
    $(this).siblings('p').slideToggle();
    $(this).parent().siblings().find('h3').removeClass('.active');
    $(this).parent().siblings().find('p').slideUp();
  });
});

