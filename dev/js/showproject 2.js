var apiurl = "./php/donation_new.php";
var vm = new Vue({
  el: "#app",
  data: {
    newdonationdatas: []
  }
  
});

$.ajax({
  url: apiurl,
  async: false,
  success: function (res) {
    var obj = JSON.parse(res);
    console.log(obj);
    vm.newdonationdatas = obj;
    Vue.set(vm, "newdonationdatas", obj);
  }
});


  $(function(){
  
    $("button.btn_lightbox").on("click", function(){
      $("div.overlay").addClass("-on");
    });
    
    $("button.btn_light_close,.cancel").on("click", function(){
      $("div.overlay").addClass("-opacity-zero");

      setTimeout(function(){
        $("div.overlay").removeClass("-on -opacity-zero");
      }, 1000);
    });
    
  });

//   $(function(){

//     $("div.button.openlingtbox").click(function(){

//        $('div.col-12.lightbox').css('opacity', '1');
       
      

//     });

//     $(".close").click(function(){

//       $('.col-12.box').css('opacity', '0');

//    });

//    $(".cancel").click(function(){

//     $('.col-12.box').css('opacity', '0');

//  });




//   });




// -----------小圖換大圖-----------


$(document).ready(function(){
  $('.smallimages').click(function(){
    // alert();
    $(this).parent().prev().children().attr("src",$(this).attr("src"));
  })
})







