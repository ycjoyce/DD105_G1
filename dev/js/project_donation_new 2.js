var apiurl = "../php/donation_new.php";
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


window.addEventListener("load",function(){
  let smalls = document.querySelctorAll('.smallimg img');
  for( let i=0; i<smalls.length; i++){
    smalls[i].onclick = function(e){
      document.querySelector('.bigimg img').src = e.target.src;
    }
  }
})

