
var apiurl = "./php/mainpage_donation.php";
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

