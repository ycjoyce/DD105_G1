$(document).ready(function(){
    $("img").click(function(){
    $(".modal-body").css({"opacity":"1" , "transition":"opacity .5s ease-in-out"});
    var t = $(this).attr("src");
    console.log(this,t);
    $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
    // , "top":"50%" , "left":"50%" , "transform":"translate(-50%, -50%)"
    $(".postregionbackblock").css({"display":"block"});

    $(".postregionbackblock").click(function(){
        $(".modal-body").css({"opacity":"0.3" , "transition":"opacity .5s ease-in-out"});
        $(".modal-img").remove();
        $(".postregionbackblock").css({"display":"none"});
    });

    $(".modal-img").click(function(){
        $(".modal-body").css({"opacity":"0.3" , "transition":"opacity .5s ease-in-out"});
        $(".modal-img").remove();
        $(".postregionbackblock").css({"display":"none"});
    });
  // $("#myModal").modal();
});

$("video").click(function(){
  var v = $("video > source");
  var t = v.attr("src");
  $(".modal-body").html("<video class='model-vid' controls><source src='"+t+"' type='video/mp4'></source></video>");
  // $("#myModal").modal();
});
});//EOF Document.ready

$('.selectpostarticleregion').on('click', function() {
    // console.log("on");
    // $('.selectpostarticleregion').css({"color":"#000"});
    window.location.href = "./post_article_region.html";
});
