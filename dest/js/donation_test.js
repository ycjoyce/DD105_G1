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



















  //取得左邊列表要顯示的未讀數量
  // function unReadAmt(sendMemNo){
  //   var xhr= new XMLHttpRequest();
  //   var url= "donation.php";
  //   xhr.open("POST",url,true);
  //   xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  //   xhr.send(data_info);

    // xhr.onload=function(){
    //     if(xhr.status==200){
    //         theAmt= xhr.responseText;
    //         document.querySelector(`li.No${sendMemNo}.unRead div.text p span`).innerText= theAmt;
    //         showTotalUnread();
    //     }else{
    //         alert(xhr.status);
    //     }
    // }




// function donationcard(){
//   var xhr = new XMLHttpRequest();
//   var url = "donation.php";
//   xhr.open("POST",url,true);
//   xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//   xhr.send(null);

//   xhr.onload=function(){
//     if(xhr.status==200){

//       fund = JSON.parse(xhr.responseText);

//     }
//   }







// }





// function getMsg(){
//   var xhr= new XMLHttpRequest();
//   var url= "./php/LatestMessage.php";
//   xhr.open("POST",url,true);
//   xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//   var data_info= "";
//   xhr.send(data_info);
//   xhr.onload=function (){
//       if(xhr.status==200){
//           if(xhr.responseText.indexOf("notFound")==-1){
//               showMsgList(xhr.responseXML);
//               if(sessionStorage.getItem("now-on")){
//                   var nowOn= document.querySelector(`aside ul li.No${sessionStorage.getItem("now-on")}`);
//                   nowOn.classList.add("on");
//                   document.querySelector("aside ul li.on").onclick();
//               }
//           }else{
//               // alert("尚無私信內容");
//               document.querySelector("aside ul").innerHTML=`
//               <div id="withoutMsg">
//                   <div class="img">
//                       <p class="bubble">尚無私信內容</p>
//                       <img src="./img/yuru_neko6.png">
//                   </div>
//                   <div class="text">
//                       <p>立即前往</p>
//                       <div>
//                           <a href="./map.html">浪浪在哪裡</a><img src="./img/pawprint-01.svg">
//                           <a href="./post_article_region.html">毛孩交流區</a>
//                       </div>
//                       <p>開始體驗私信吧！</p>
//                   </div>
//               </div>`;
//           }
//       }else{
//           alert(xhr.status);
//       }
//   };
// }
// getMsg();
