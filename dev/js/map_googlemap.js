// 記錄地圖資訊
var map;
// 紀錄從遠端撈下來的資料
var data;
// 記錄目前載入的 marker
var markers = [];
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
const lat = 24.9102204,
  lng = 121.3862414;

const $center = document.getElementById("center");

$(function() {
  initialize();
});

/*** Gmaps initialize ***/
function initialize() {
  // 獲取設備當前的位置
  navigator.geolocation.watchPosition(geoSuccess, geoError);

  map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { lat: lat, lng: lng },
    zoom: 10,
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
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "vertical",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination"
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar"
    }
  });
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
// }
  //click event
  google.maps.event.addDomListener(center, "click", function() {
    map.setZoom(11);
    map.setCenter(new google.maps.LatLng(latitude, longitude));
  });
}

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

// ======================================輸入地址=============================================//

/// 輸入地址
document.getElementById("lostPetRpLoc").onchange = getAddress;
var geocoder = new google.maps.Geocoder();
function getAddress() {
  // alert("測試");
  var address = document.getElementById("lostPetRpLoc").value;
  geocoder.geocode({ address: address }, function(results, status) {
    if (status == "OK") {
      console.log(
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

// ======================================寵物遺失=============================================//

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

//連結私信功能==================================
let petLostOwner = "";
function mapMsg(id) {
  if (member.memId) {
    $.ajax({
      url: "./php/checkNotSelf.php",
      type: "POST",
      data: { lostNo: id.substr(4) },
      success(data) {
        if (member.memNo.trim() == data.trim()) {
          alert("此寵物主人為您本人");
        } else {
          petLostOwner = data;

          $.ajax({
            url: "./php/checkBlackMsg.php",
            type: "POST",
            data: { petLostOwner: petLostOwner },
            success(data) {
              if (data.indexOf("success") == -1) {
                alert(
                  "已將此帳號設為黑名單，請先至會員中心解除黑名單，才能夠傳送私信"
                );
              } else {
                $.ajax({
                  url: "./php/mapMsg.php",
                  type: "POST",
                  data: { lostNo: id.substr(4) },
                  success(data) {
                    if (data.indexOf("error") == -1) {
                      sessionStorage.setItem("now-on", petLostOwner.trim());
                      location.href = "./message.html";
                    } else {
                      alert("操作失敗");
                    }
                  },
                  error(data) {
                    alert(data);
                  }
                });
              }
            },
            error(data) {
              alert(data);
            }
          });
        }
      },
      error(data) {
        alert(data);
      }
    });
  } else {
    alert("請先登入");
  }
}

//=============================================

/*** 讀取寵物遺失地標 ***/
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

// 變更地區，並進行監聽
var dist = document.querySelector("#lost_area");
dist.addEventListener("change", changeDist);
function changeDist() {
  var distVal = dist.value;
  // alert(distVal);
  // 清除資料
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
    for (var i = 0; data.length > i; i++) {
      if (data[i].lostPetRpLocAdd.indexOf(distVal) != -1) {
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
    }
  };
}

// ======================================友善空間=============================================//
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
        data[i].friendlyNo,
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

// 變更寵物友善地區及類別
let search_area;
let search_type;

function changeMarker() {
  // alert("切換");
  for (i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
  infoWindows = [];

  var xhr = new XMLHttpRequest();
  xhr.open("get", "./php/map_googleMap.php");
  xhr.send(null);
  xhr.onload = function() {
    var data = JSON.parse(xhr.responseText);
    for (var i = 0; data.length > i; i++) {
      if (search_area) {
        if (search_type) {
          if (
            data[i].friendlyTypeNo == search_type[0] &&
            data[i].friendlyLocNo == search_area
          ) {
            loadfriendlyData(
              data[i].friendlyNo,
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
          if (
            data[i].friendlyTypeNo == search_type[1] &&
            data[i].friendlyLocNo == search_area
          ) {
            loadfriendlyData(
              data[i].friendlyNo,
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
          if (
            data[i].friendlyTypeNo == search_type[2] &&
            data[i].friendlyLocNo == search_area
          ) {
            loadfriendlyData(
              data[i].friendlyNo,
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
        } else {
          if (data[i].friendlyLocNo == search_area) {
            loadfriendlyData(
              data[i].friendlyNo,
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
      }
      if (search_type) {
        if (search_area) {
          if (
            data[i].friendlyTypeNo == search_type[0] &&
            data[i].friendlyLocNo == search_area
          ) {
            loadfriendlyData(
              data[i].friendlyNo,
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
          if (
            data[i].friendlyTypeNo == search_type[1] &&
            data[i].friendlyLocNo == search_area
          ) {
            loadfriendlyData(
              data[i].friendlyNo,
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
          if (
            data[i].friendlyTypeNo == search_type[2] &&
            data[i].friendlyLocNo == search_area
          ) {
            loadfriendlyData(
              data[i].friendlyNo,
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
        } else {
          if (data[i].friendlyTypeNo == search_type[0]) {
            loadfriendlyData(
              data[i].friendlyNo,
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
          if (data[i].friendlyTypeNo == search_type[1]) {
            loadfriendlyData(
              data[i].friendlyNo,
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
          if (data[i].friendlyTypeNo == search_type[2]) {
            loadfriendlyData(
              data[i].friendlyNo,
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
      }
    }
    // }
  };
}
window.addEventListener("load", function() {
  let area = document.querySelector("#fr_area");
  area.onchange = function(e) {
    search_area = e.target.value;
    // alert(search_area);
    changeMarker();
  };

  let type = document.getElementsByName("friendtypes");
  for (let i = 0; i < type.length; i++) {
    type[i].onchange = function(e) {
      var type = document.getElementsByName("friendtypes");
      let arrA = [];
      //檢查全部的checkbox有誰被勾選
      for (var i = 0; i < type.length; i++) {
        if (type[i].checked == true) {
          //有勾選就去看他的值
          console.log(type[i].value);

          //假設撈出來的資料是以下的arr陣列
          var arr = new Array(1, 2, 3);
          //假設在陣列找不到
          if (arr.indexOf(parseInt(type[i].value)) != -1) {
            //顯示資料們
            arrA.push(type[i].value);
          }
        }
      }
      search_type = arrA;
      // alert(search_type);
      changeMarker();
    };
  }
});

/*** 讀取友善空間地標 ***/
function loadfriendlyData(
  no,
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
      <img src="./img/mapMarker_${typeno}.png" class="cardContentIcon" PSN="A"><span>${typename}</span>
      <input type="checkbox" fav="${no}" name="addfriendlyFav" class="addfriendlyFav" onchange="addFav()">
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

// ======================================新增最愛=============================================//

// 新增我的最愛
function addFav() {
  // alert("先判斷");
  // 先判斷有沒有登入
  var xhr = new XMLHttpRequest();
  var url = "./php/checkMem.php";
  xhr.open("GET", url, true);
  xhr.send(null);
  xhr.onload = function(e) {
    if (xhr.status == 200) {
      member = JSON.parse(xhr.responseText);
      if (!member.memName) {
        e.preventDefault();
        e.stopPropagation();
        alert("請先登入");
        return;
      } else {
        // console.log($(".addfriendlyFav").attr("fav"));
        var fav = $(".addfriendlyFav").attr("fav");
        if ($(".addfriendlyFav").prop("checked") == true) {
          $.ajax({
            type: "POST",
            url: "./php/map_favAdd.php",
            data: { friendlyNo: fav },
            success: function(data) {
              if (data.indexOf("ok") != -1) {
                alert("新增到最愛");
                console.log(fav + "新增到最愛");
              } else {
                alert("新增失敗");
              }
            },
            error: function(xhr) {
              alert(xhr.Message);
            }
          });
        } else {
          $.ajax({
            type: "POST",
            url: "./php/map_favRemove.php",
            data: { friendlyNo: fav },
            success: function(data) {
              if (data.indexOf("ok") != -1) {
                alert("已從最愛移除");
                console.log(fav + "從最愛移除");
              } else {
                alert("新增失敗");
              }
            },
            error: function(xhr) {
              alert(xhr.Message);
            }
          });
        }
      }
    }
  };
}

// 我的最愛更換類別
let favorite_type;

function showFav() {
  for (i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
  infoWindows = [];

  var xhr = new XMLHttpRequest();
  xhr.open("get", "./php/map_favShow.php");
  xhr.send(null);
  xhr.onload = function() {
    var data = JSON.parse(xhr.responseText);
    console.log(data);
    if (data == false) {
      alert("目前沒有最愛的友善空間喔!");
    } else {
      for (var i = 0; data.length > i; i++) {
        if (favorite_type) {
          if (data[i].friendlyTypeNo == favorite_type[0]) {
            loadfriendlyData(
              data[i].friendlyNo,
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
          if (data[i].friendlyTypeNo == favorite_type[1]) {
            loadfriendlyData(
              data[i].friendlyNo,
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
          if (data[i].friendlyTypeNo == favorite_type[2]) {
            loadfriendlyData(
              data[i].friendlyNo,
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
      }
    }
  };
}

// 讀取我的最愛點選
window.addEventListener("load", function() {
  let fatype = document.getElementsByName("favoritetypes");
  for (let i = 0; i < fatype.length; i++) {
    fatype[i].onchange = function(e) {
      document.getElementById("favoH3").style.color = "red";
      var type = document.getElementsByName("favoritetypes");
      let arrB = [];
      //檢查全部的checkbox有誰被勾選
      for (var i = 0; i < type.length; i++) {
        if (type[i].checked == true) {
          //有勾選就去看他的值
          console.log(type[i].value);

          //假設撈出來的資料是以下的arr陣列
          var arr = new Array(1, 2, 3);
          //假設在陣列找不到
          if (arr.indexOf(parseInt(type[i].value)) != -1) {
            //顯示資料們
            arrB.push(type[i].value);
          }
        }
      }
      favorite_type = arrB;
      // alert(favorite_type);
      showFav();
    };
  }
});
