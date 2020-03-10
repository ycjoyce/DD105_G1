"use strict";

$(document).ready(function () {
  $("img").click(function () {
    // $("this").css({"position":"relative"});
    var t = $(this).attr("src");
    console.log(this, t);
    $(".modal-body").html("<img src='" + t + "' class='modal-img'>");
    $("#myModal").css({ "position": "absolute", "top": "50%", "left": "50%", "transform": "translate(-50%, -50%)" });
    $(".postregionbackblock").css({ "display": "block" });
    $(".postregionbackblock").click(function () {
      $(".modal-img").remove();
      $(".postregionbackblock").css({ "display": "none" });
    });
    // $("#myModal").modal();
  });

  $("video").click(function () {
    var v = $("video > source");
    var t = v.attr("src");
    $(".modal-body").html("<video class='model-vid' controls><source src='" + t + "' type='video/mp4'></source></video>");
    // $("#myModal").modal();
  });
}); //EOF Document.ready

$('.selectpostarticleregion').on('click', function () {
  // console.log("on");
  // $('.selectpostarticleregion').css({"color":"#000"});
  window.location.href = "./post_article_region.html";
});