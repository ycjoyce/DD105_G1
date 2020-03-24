// ===================================================================
// =========================以下載入地圖的部分=========================
// ===================================================================


// 記錄地圖資訊
var map;
// 紀錄從遠端撈下來的資料
var data;
// 記錄目前載入的 marker
let markers = [];
// 記錄當前點擊 google window
var currentInfoWindow = "";

// 輸入地址找經緯度
var geocoder;

// Custom style
var styleCustom = [
  {
    featureType: "administrative.land_parcel",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "administrative.neighborhood",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "poi.business",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "road.arterial",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "road.highway",
    elementType: "labels",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "road.local",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "water",
    elementType: "labels.text",
    stylers: [{ visibility: "off" }]
  }
];

// Gmaps style
var styleBasic = [
  { featureType: "all", elementType: "all", stylers: [{ visibility: "off" }] },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ visibility: "on" }]
  },
  {
    featureType: "road",
    elementType: "labels.text",
    stylers: [{ visibility: "on" }]
  },
  {
    featureType: "transit.station",
    elementType: "all",
    stylers: [{ visibility: "on" }]
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ visibility: "on" }]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ visibility: "on" }]
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ visibility: "simplified" }]
  },
  {
    featureType: "administrative.locality",
    elementType: "all",
    stylers: [{ visibility: "on" }]
  },
  {
    featureType: "administrative.neighborhood",
    elementType: "all",
    stylers: [{ visibility: "on" }]
  },
  {
    featureType: "administrative.province",
    elementType: "all",
    stylers: [{ visibility: "on" }]
  }
];
// var customType = new google.maps.StyledMapType(styleCustom, { name: "Custom" });
// var basicType = new google.maps.StyledMapType(styleBasic, { name: "Basic" });

// Latitude/longitude preset
const lat = 25.0724118,
  lng = 121.5248102;

const $center = document.getElementById("center");

$(function() {
  initialize();
});

/*** Gmaps initialize ***/
function initialize() {
  // 獲取設備當前的位置
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

  map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { lat: lat, lng: lng },
    zoom: 12,
    styles: styleCustom,
    mapTypeControl: false,
    zoomControl: false,
    panControl: false,
    scaleControl: false,
    streetViewControl: false,
    scrollwheel: false,
    draggable: true
  });

  // 取得遠端資料並渲染
  getLost();

  // Zoom control
  zoomControl();

  // Gmap skin
  // map.mapTypes.set("Custom", customType);
  // map.mapTypes.set("Basic", basicType);
}

function geoSuccess(pos) {
  var crd = pos.coords;
  //Add center marker
  centerMarker(crd.latitude, crd.longitude);
}

function geoError(err) {
  $center.style.display = "none";
  console.warn("ERROR(" + err.code + "): " + err.message);
}

/*** Center marker ***/
function centerMarker(latitude, longitude) {
  var marker = new google.maps.Marker({
    map: map,
    draggable: false,
    icon: {
      url: "https://img.icons8.com/ios/40/2466fa/street-view-filled.png",
      size: new google.maps.Size(40, 40), //icon px
      origin: new google.maps.Point(0, 0), //icon ori pos
      anchor: new google.maps.Point(20, 20) //icon center
    },
    zIndex: 1,
    position: new google.maps.LatLng(latitude, longitude)
  });
  marker.setMap();
}
//   //click event
//   google.maps.event.addDomListener(center, "click", function() {
//     map.setZoom(15);
//     map.setCenter(new google.maps.LatLng(latitude, longitude));
//   });
// }

/*** Zoom control ***/
function zoomControl() {
  var zoomIn = document.getElementById("zoomIn");
  var zoomOut = document.getElementById("zoomOut");

  google.maps.event.addDomListener(zoomOut, "click", function() {
    var currentZoomLevel = map.getZoom();
    if (currentZoomLevel != 0) {
      map.setZoom(currentZoomLevel - 1);
    }
  });

  google.maps.event.addDomListener(zoomIn, "click", function() {
    var currentZoomLevel = map.getZoom();
    if (currentZoomLevel != 21) {
      map.setZoom(currentZoomLevel + 1);
    }
  });
}

// ===========================================================================================//

/*** 寵物遺失載入地標 ***/
function getLost() {
  for (i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
  infoWindows = [];
  var xhr = new XMLHttpRequest();
  xhr.open("get", "./php/map_GMgetLostRp.php");
  xhr.send(null);
  xhr.onload = function() {
    var data = JSON.parse(xhr.responseText);
    // alert(str)
    console.log(data);
    for (var i = 0; data.length > i; i++) {
      loadLostData(
        data[i].lostPetRpNo,
        data[i].lostPetRpLoclat,
        data[i].lostPetRpLoclng,
        data[i].lostPetRpName,
        data[i].lostPetRpImg,
        data[i].lostPetRpLDate,
        data[i].lostPetRpLoc,
        data[i].lostPetRpType,
        data[i].lostPetRpCh,
        data[i].lostPetRpLocAdd,
        data[i].memName
      );
    }
  };
}


/// 點選寵物遺失地標
$(".mapOption li:nth-child(1)").click(function() {
  // 清除資料
  for (i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
  infoWindows = [];
  getLost();
});

//連結私信功能==================================
let petLostOwner="";
function mapMsg(id){
  if(member.memId){
    $.ajax({
      url: './php/checkNotSelf.php',
      type: 'POST',
      data: {lostNo: id.substr(4)},
      success(data){
        if(member.memNo==data){
          alert("此寵物主人為您本人");
        }else{
          petLostOwner= data;
          $.ajax({
            url: './php/mapMsg.php',
            type: 'POST',
            data: {lostNo: id.substr(4)},
            success(data){
              if(data.indexOf("error")==-1){
                sessionStorage.setItem("now-on",petLostOwner);
                location.href="./message.html";
              }else{
                alert("操作失敗");
              }
            },
            error(data){
              alert(data);
            }
          });
          // alert(`我是${member.memNo}，這張卡片編號是${id.substr(4)}`);
        }
      },
      error(data){
        alert(data);
      },
    });
    
  }else{
    alert("請先登入");
  }
}

//=============================================


// 讀取地標
function loadLostData(
  rpNo,
  lat,
  lng,
  title,
  pic,
  date,
  loc,
  type,
  character,
  add,
  memName
) {
  var contentString = `
    <div class="lostContent">
    <img src="./img/lostrp/${pic}" alt="">
      <ul>
        <li>寵物名稱：${title}</li>
        <li>寵物遺失日期：${date}</li>
        <li>寵物遺失地點：${loc}</li>
        <li>寵物類型：${type}</li>
        <li>寵物特徵：${character}</li>
        <li>私信主人：<a title:"我要私信主人" id="msg_${rpNo}" onclick="mapMsg('msg_${rpNo}')">${memName}<img src="./img/icon_private_message.svg"></a></li>
      </ul>
    </div>
  `;

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  var marker = new google.maps.Marker({
    position: { lat: parseFloat(lat), lng: parseFloat(lng) },
    title: title,
    map: map,
    // animation: google.maps.Animation.BOUNCE,
    animation: google.maps.Animation.DROP,
    icon: {
      url: `./img/mapMarker_lost.png`,
      scaledSize: new google.maps.Size(40, 40)
    }
  });
  marker.addListener("click", function() {
    if (currentInfoWindow != "") {
      currentInfoWindow.close();
      currentInfoWindow = "";
    }
    infowindow.open(map, marker);
    currentInfoWindow = infowindow;
  });
  markers.push(marker);
}

// ===================================================================================//
/*** 友善空間載入地標 ***/
function getFriendly() {
  for (i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
  infoWindows = [];
  var xhr = new XMLHttpRequest();
  xhr.open("get", "./php/map_GMgetFriendly.php");
  xhr.send(null);
  xhr.onload = function() {
    var data = JSON.parse(xhr.responseText);
    // alert(str)
    console.log(data);
    for (var i = 0; data.length > i; i++) {
      loadfriendlyData(
        data[i].friendlylat,
        data[i].friendlylng,
        data[i].friendlyName,
        data[i].friendlyPic,
        data[i].friendlyTel,
        data[i].friendlyAddress,
        data[i].friendlyIntro_1,
        data[i].friendlyIntro_2,
        data[i].friendlyIntro_3,
        data[i].friendlyIntro_4,
        data[i].friendlyTypeNo,
        data[i].friendlyTypeName
      );
    }
  };
}

$(".friendlyFather").click(function() {
  // var distVal = dist.value;
  for (i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
  infoWindows = [];
  getFriendly();
});

// 讀取地標
function loadfriendlyData(
  lat,
  lng,
  title,
  pic,
  tel,
  add,
  intro1,
  intro2,
  intro3,
  intro4,
  typeno,
  typename
) {
  var contentString = `
    <div class="friendContent">
    <img src="./img/map_friendly/${pic}">
      <ul>
        <li>店名：${title}</li>
        <li>電話：${tel}</li>
        <li>地址：${add}</li>
        <li>友善物種：${intro1}</li>
        <li>入內規定：${intro2}</li>      
        <li>周邊服務：${intro3}</li>      
        <li>環境服務：${intro4}</li>
      </ul>
      <hr>
      <img src="./img/mapMarker_${typeno}.png" class="cardContentIcon"><span>${typename}</span>
    </div>
  `;
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  var marker = new google.maps.Marker({
    position: { lat: parseFloat(lat), lng: parseFloat(lng) },
    title: title,
    map: map,
    // animation: google.maps.Animation.BOUNCE,
    animation: google.maps.Animation.DROP,
    icon: {
      url: `./img/mapMarker_${typeno}.png`,
      scaledSize: new google.maps.Size(40, 40)
    }
  });
  marker.addListener("click", function() {
    if (currentInfoWindow != "") {
      currentInfoWindow.close();
      currentInfoWindow = "";
    }
    infowindow.open(map, marker);
    currentInfoWindow = infowindow;
  });
  markers.push(marker);
}

// 點選寵物友善餐廳
var type = $(".mapOption li:nth-child(3)");
type.click(function() {
  // alert(locNo);
  // 清除資料
  for (i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
  infoWindows = [];

  var xhr = new XMLHttpRequest();
  xhr.open("get", "./php/map_GMgetFriendly.php");
  xhr.send(null);
  xhr.onload = function() {
    var data = JSON.parse(xhr.responseText);
    for (var i = 0; data.length > i; i++) {
      if (data[i].friendlyTypeNo == "1") {
        loadfriendlyData(
            data[i].friendlylat,
            data[i].friendlylng,
            data[i].friendlyName,
            data[i].friendlyPic,
            data[i].friendlyTel,
            data[i].friendlyAddress,
            data[i].friendlyIntro_1,
            data[i].friendlyIntro_2,
            data[i].friendlyIntro_3,
            data[i].friendlyIntro_4,
            data[i].friendlyTypeNo,
            data[i].friendlyTypeName
          );
      }
    }
  };
});

// 點選寵物友善住宿
var type = $(".mapOption li:nth-child(4)");
type.click(function() {
  // alert(locNo);
  // 清除資料
  for (i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
  infoWindows = [];

  var xhr = new XMLHttpRequest();
  xhr.open("get", "./php/map_GMgetFriendly.php");
  xhr.send(null);
  xhr.onload = function() {
    var data = JSON.parse(xhr.responseText);
    for (var i = 0; data.length > i; i++) {
      if (data[i].friendlyTypeNo == "2") {
        loadfriendlyData(
            data[i].friendlylat,
            data[i].friendlylng,
            data[i].friendlyName,
            data[i].friendlyPic,
            data[i].friendlyTel,
            data[i].friendlyAddress,
            data[i].friendlyIntro_1,
            data[i].friendlyIntro_2,
            data[i].friendlyIntro_3,
            data[i].friendlyIntro_4,
            data[i].friendlyTypeNo,
            data[i].friendlyTypeName
          );
      }
    }
  };
});


// 點選寵物友善住宿
var type = $(".mapOption li:nth-child(5)");
type.click(function() {
  // alert(locNo);
  // 清除資料
  for (i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
  infoWindows = [];

  var xhr = new XMLHttpRequest();
  xhr.open("get", "./php/map_GMgetFriendly.php");
  xhr.send(null);
  xhr.onload = function() {
    var data = JSON.parse(xhr.responseText);
    for (var i = 0; data.length > i; i++) {
      if (data[i].friendlyTypeNo == "3") {
        loadfriendlyData(
            data[i].friendlylat,
            data[i].friendlylng,
            data[i].friendlyName,
            data[i].friendlyPic,
            data[i].friendlyTel,
            data[i].friendlyAddress,
            data[i].friendlyIntro_1,
            data[i].friendlyIntro_2,
            data[i].friendlyIntro_3,
            data[i].friendlyIntro_4,
            data[i].friendlyTypeNo,
            data[i].friendlyTypeName
          );
      }
    }
  };
});

// ===================================================================
// =========================以下為寵物遺失申請=========================
// ===================================================================

$(document).ready(function () {
function mem_No() {
  var mem_No = member.memNo;
  var mem_Id = member.memName;
  document.getElementById('memNo').value = mem_No;
  document.getElementById('memName').value = mem_Id;
};
mem_No();
});

//判斷會員登入
function checkLoginStatus(e) {
  // alert('判斷');
  // e.stopPropagation();
  var xhr = new XMLHttpRequest();
  var url = "php/checkMem.php";
  xhr.open("GET", url, true);
  xhr.send(null);
  xhr.onload = function () {
      if (xhr.status == 200) {
          member = JSON.parse(xhr.responseText);
          if (!member.memName) {
              // document.getElementById("somedialog").style.display = "none";
              // $('[data-dialog]').removeClass("trigger");
              e.preventDefault();
              e.stopPropagation();
              alert('請先登入');
              $("#somedialog").removeClass("dialog--open");
          }
      }
  }
}
document.querySelector(".trigger a").addEventListener("click", checkLoginStatus);


var lostPetRpImg = document.getElementById("lostPetRpImg");
$("#rpbtn").click(function (e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("memNo", $("#memNo").val());
    formData.append("memName", $("#memName").val());
    formData.append("lostPetRpName", $("#lostPetRpName").val());
    formData.append("lostPetRpCh", $("#lostPetRpCh").val());
    formData.append("lostPetRpLoc", $("#lostPetRpLoc").val());
    formData.append("lostPetRpLDate", $("#lostPetRpLDate").val());
    formData.append("lostPetRpType", $("#lostPetRpType").val());
    formData.append("lostPetRpStat", $("#lostPetRpStat").val());
    formData.append("lostPetRpLoclat", $("#lostPetRpLoclat").val());
    formData.append("lostPetRpLoclng", $("#lostPetRpLoclng").val());
    formData.append("lostPetRpLocAdd", $("#lostPetRpLocAdd").val());
    formData.append("lostPetRpImg", lostPetRpImg.files[0]);
    $.ajax({
        type: "POST",
        url: "./php/map_lostform.php",
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        success: function (data) {
            if (data.indexOf("成功") != -1) {
                alert("新增成功");
                $("#somedialog").removeClass("dialog--open");
                $("#memNo,#memName,#lostPetRpName,#lostPetRpCh,#lostPetRpLoc,#lostPetRpLDate,#lostPetRpType,#lostPetRpStat,#lostPetRpLoclat,#lostPetRpLoclng,#lostPetRpLocAdd").val("");
                getLost();
            }
            else {
                alert("新增失敗");
            }
        },
        error: function (xhr, status, error) {
            // alert("請上傳圖片");
            // var err = eval("(" + xhr.responseText + ")");
            alert(xhr.Message);
        }
    })
})

/// 輸入地址
document.getElementById("lostPetRpLoc").onchange = getAddress;
var geocoder = new google.maps.Geocoder();
function getAddress() {
  alert("測試");
  var address = document.getElementById("lostPetRpLoc").value;
  geocoder.geocode({ address: address }, function(results, status) {
    if (status == "OK") {
      console.log(results[0]);
      alert(
        `${
          results[0].formatted_address
        } | ${results[0].geometry.location.lat()} | ${results[0].geometry.location.lng()}`
      );
      document.getElementById("lostPetRpLocAdd").value =
        results[0].formatted_address;
      document.getElementById(
        "lostPetRpLoclat"
      ).value = results[0].geometry.location.lat();
      document.getElementById(
        "lostPetRpLoclng"
      ).value = results[0].geometry.location.lng();
    } else {
      console.log(status);
    }
  });
}