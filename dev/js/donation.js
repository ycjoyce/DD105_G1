// tab頁籤

$(function(){
  $("a.tab").on("click",function(e){
    e.preventDefault();

    $(this).closest("ul").find("a.tab").removeClass("-on");
    $(this).addClass("-on");
    // closest() 往上層找 只要找到符合條件的就停止

    $("div.tab").removeClass("-on");
    $("div.tab." + $(this).attr("data-target")).addClass("-on");


  });
});





// FAQ
$(document).ready(function () {
    $('.ques').on('click', function(e) {e.preventDefault();
    
    $(this).toggleClass('active');
    $(this).siblings('p').slideToggle();
    $(this).parent().siblings().find('h3').removeClass('.active');
    $(this).parent().siblings().find('p').slideUp();
  });
});

