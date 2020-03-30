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


var apiurl2 = "./php/donation_countdown.php";
var vm = new Vue({
  el: "#app2",
  data: {
    deadlinedonationdatas: []
  }
});

$.ajax({
  url: apiurl2,
  async: false,
  success: function (res) {
    let obj2 = JSON.parse(res);
    console.log(obj2);
    vm.deadlinedonationdatas = obj2;
    Vue.set(vm, "deadlinedonationdatas", obj2);
  }
});

var apiurl3 = "./php/donation_history.php";
var vm = new Vue({
  el: "#app3",
  data: {
    historydonationdatas: []
  }
});

$.ajax({
  url: apiurl3,
  async: false,
  success: function (res) {
    let obj3 = JSON.parse(res);
    console.log(obj3);
    vm.historydonationdatas = obj3;
    Vue.set(vm, "historydonationdatas", obj3);
  }
});


// 頁籤function

$(function () {
  $("a.tab").on("click", function (e) {
    e.preventDefault();

    $(this).closest("ul").find("a.tab").removeClass("-on");
    $(this).addClass("-on");

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



















  








