var apiurl = "./php/memberdonation.php";
var vm = new Vue({
  el: "#app",
  data: {
    atdonationdatas: []
  }
  
});

$.ajax({
  url: apiurl,
  async: false,
  success: function (res) {
    var obj = JSON.parse(res);
    console.log(obj);
    vm.atdonationdatas = obj;
    Vue.set(vm, "atdonationdatas", obj);
  }
});



var apiurl2 = "./php/memberaisedonation.php";
var vm = new Vue({
  el: "#app2",
  data: {
    radonationdatas: []
  }
  
});

$.ajax({
  url: apiurl2,
  async: false,
  success: function (res) {
    var obj2 = JSON.parse(res);
    console.log(obj2);
    vm.radonationdatas = obj2;
    Vue.set(vm, "radonationdatas", obj2);
  }
});
