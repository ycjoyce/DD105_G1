let curVal = 1;
let mapPrevBtn = document.querySelector(
  "section.where div.card div.changePage button.to_left"
);
let mapNextBtn = document.querySelector(
  "section.where div.card div.changePage button.to_right"
);
// let changeArea= document.querySelector('section.where div.card div.changePage');
let mapLost = document.querySelector(
  "section.about div.where ul.mapOption li:first-child"
);
let mapFriendly = document.querySelector(
  "section.about div.where ul.mapOption li:nth-child(2)"
);
let mapFriendly1 = document.querySelector(
  "section.about div.where ul.mapOption li:nth-child(3)"
);
let mapFriendly2 = document.querySelector(
  "section.about div.where ul.mapOption li:nth-child(4)"
);
let mapFriendly3 = document.querySelector(
  "section.about div.where ul.mapOption li:nth-child(5)"
);

function mapCarousel() {
  var cardTitle = document.querySelector("section.where div.card h3");
  var cardContent = document.querySelector("section.where div.card p");
  var cardBtn = document.querySelector("section.where div.card a.btn span");
  var cardBtnOutside = document.querySelector("section.where div.card a.btn");
  var changeNum = document.querySelector(
    "section.where div.card div.changePage span"
  );

  if (curVal == 1) {
    cardTitle.innerText = "寵物遺失地點";
    cardContent.innerHTML = `心愛的毛孩走丟了也別驚慌，<br>
                                快來回報遺失的地點讓大家一同協尋！<br>
                                看見疑似走失的貓狗也來聯繫主人確認吧。<br>`;
    cardBtn.innerText = "我的寵物遺失了";
    cardBtnOutside.style.display = "inline-block";
    document
      .querySelector("section.where div.card a.btn")
      .classList.add("lostPet");
    changeNum.innerText = "01/05";
    if (mapLost.classList.contains("on") == false) {
      mapLost.classList.add("on");
      mapFriendly.classList.remove("on");
      mapFriendly1.classList.remove("on");
      mapFriendly2.classList.remove("on");
      mapFriendly3.classList.remove("on");
    }
    //=====地圖圖標開始=====//
    for (i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
    infoWindows = [];
    getLost();
    //=====地圖圖標結束=====//
  } else if (curVal == 2) {
    cardTitle.innerText = "寵物友善空間";
    cardContent.innerHTML = `帶心愛的毛孩出門總是被拒之門外嗎?<br>
                                蒐集全台友善寵物空間，<br>
                                讓您能夠輕鬆和毛小孩一同出遊！<br>`;
    cardBtnOutside.style.display = "none";
    if (
      document
        .querySelector("section.where div.card a.btn")
        .classList.contains("lostPet")
    ) {
      document
        .querySelector("section.where div.card a.btn")
        .classList.remove("lostPet");
    }
    changeNum.innerText = "02/05";
    if (mapFriendly.classList.contains("on") == false) {
      mapLost.classList.remove("on");
      mapFriendly.classList.add("on");
      mapFriendly1.classList.remove("on");
      mapFriendly2.classList.remove("on");
      mapFriendly3.classList.remove("on");
    }
    //=====地圖圖標開始=====//
    for (i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
    infoWindows = [];
    getFriendly();
    //=====地圖圖標結束=====//
  } else if (curVal == 3) {
    cardTitle.innerText = "寵物友善餐廳";
    cardContent.innerHTML = `帶心愛的毛孩出門總是找不到餐廳用餐嗎?<br>
                                蒐集全台友善寵物餐廳，<br>
                                讓您能夠輕鬆和毛小孩一同約會去！<br>`;
    cardBtnOutside.style.display = "none";
    if (
      document
        .querySelector("section.where div.card a.btn")
        .classList.contains("lostPet")
    ) {
      document
        .querySelector("section.where div.card a.btn")
        .classList.remove("lostPet");
    }
    changeNum.innerText = "03/05";
    if (mapFriendly1.classList.contains("on") == false) {
      mapLost.classList.remove("on");
      mapFriendly.classList.remove("on");
      mapFriendly1.classList.add("on");
      mapFriendly2.classList.remove("on");
      mapFriendly3.classList.remove("on");
    }

    //=====地圖圖標開始=====//
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
    };

    //=====地圖圖標結束=====//
  } else if (curVal == 4) {
    cardTitle.innerText = "寵物友善住宿";
    cardContent.innerHTML = `還在煩惱與毛孩出遊無處可住嗎?<br>
                                蒐集全台友善寵物住宿，<br>
                                讓您和毛小孩都睡得安穩！<br>`;
    cardBtnOutside.style.display = "none";
    if (
      document
        .querySelector("section.where div.card a.btn")
        .classList.contains("lostPet")
    ) {
      document
        .querySelector("section.where div.card a.btn")
        .classList.remove("lostPet");
    }
    changeNum.innerText = "04/05";
    if (mapFriendly2.classList.contains("on") == false) {
      mapLost.classList.remove("on");
      mapFriendly.classList.remove("on");
      mapFriendly1.classList.remove("on");
      mapFriendly2.classList.add("on");
      mapFriendly3.classList.remove("on");
    }
    //=====地圖圖標開始=====//
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
    };
    //=====地圖圖標結束=====//
  } else if (curVal == 5) {
    cardTitle.innerText = "寵物友善景點";
    cardContent.innerHTML = `苦於找不到合適的景點無法帶毛孩出門嗎?<br>
                                蒐集全台友善寵物景點，<br>
                                讓您能夠輕鬆和毛小孩在台灣各地留下足跡！<br>`;
    cardBtnOutside.style.display = "none";
    if (
      document
        .querySelector("section.where div.card a.btn")
        .classList.contains("lostPet")
    ) {
      document
        .querySelector("section.where div.card a.btn")
        .classList.remove("lostPet");
    }
    changeNum.innerText = "05/05";
    if (mapFriendly3.classList.contains("on") == false) {
      mapLost.classList.remove("on");
      mapFriendly.classList.remove("on");
      mapFriendly1.classList.remove("on");
      mapFriendly2.classList.remove("on");
      mapFriendly3.classList.add("on");
    }
    //=====地圖圖標開始=====//
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
    };
    //=====地圖圖標結束=====//
  }
}

mapCarousel();

let mapChangeBtn = document.querySelector(
  "section.where div.card div.changePage button"
);

mapNextBtn.onclick = function() {
  //箭頭動畫
  var timer;
  mapNextBtn.classList.add("active");
  clearTimeout(timer);
  timer = setTimeout(function() {
    mapNextBtn.classList.remove("active");
  }, 300);

  //標題轉場
  var cardTitle = document.querySelector("section.where div.card h3");
  cardTitle.classList.add("active");
  cardTitle.addEventListener("animationend", function() {
    cardTitle.classList.remove("active");
  });

  //內文轉場
  var cardContent = document.querySelector("section.where div.card p");
  cardContent.classList.add("active");
  cardContent.addEventListener("animationend", function() {
    cardContent.classList.remove("active");
  });

  //按鈕轉場
  var greenBtn = document.querySelector("section.where div.card a.btn");
  var btnTimer;
  greenBtn.classList.add("active");
  clearTimeout(btnTimer);
  btnTimer = setTimeout(function() {
    greenBtn.classList.remove("active");
  }, 500);

  //數字變化
  if (curVal + 1 <= 5) curVal++;
  else curVal = 1;
  mapCarousel();
};

mapPrevBtn.onclick = function() {
  //箭頭動畫
  var timer;
  mapPrevBtn.classList.add("active");
  clearTimeout(timer);
  timer = setTimeout(function() {
    mapPrevBtn.classList.remove("active");
  }, 300);

  //標題轉場
  var cardTitle = document.querySelector("section.where div.card h3");
  cardTitle.classList.add("active");
  cardTitle.addEventListener("animationend", function() {
    cardTitle.classList.remove("active");
  });

  //內文轉場
  var cardContent = document.querySelector("section.where div.card p");
  cardContent.classList.add("active");
  cardContent.addEventListener("animationend", function() {
    cardContent.classList.remove("active");
  });

  //按鈕轉場
  var greenBtn = document.querySelector("section.where div.card a.btn");
  var btnTimer;
  greenBtn.classList.add("active");
  clearTimeout(btnTimer);
  btnTimer = setTimeout(function() {
    greenBtn.classList.remove("active");
  }, 500);

  //數字變化
  if (curVal - 1 >= 1) curVal--;
  else curVal = 5;
  mapCarousel();
};

mapLost.onclick = function() {
  //標題轉場
  var cardTitle = document.querySelector("section.where div.card h3");
  cardTitle.classList.add("active");
  cardTitle.addEventListener("animationend", function() {
    cardTitle.classList.remove("active");
  });

  //內文轉場
  var cardContent = document.querySelector("section.where div.card p");
  cardContent.classList.add("active");
  cardContent.addEventListener("animationend", function() {
    cardContent.classList.remove("active");
  });

  //按鈕轉場
  var greenBtn = document.querySelector("section.where div.card a.btn");
  var btnTimer;
  greenBtn.classList.add("active");
  clearTimeout(btnTimer);
  btnTimer = setTimeout(function() {
    greenBtn.classList.remove("active");
  }, 500);

  curVal = 1;
  mapCarousel();
};

//地圖展開選項
$(".friendlyFather").click(function() {
  $(".mapOption").toggleClass("open");
  $(".friendlyChild").toggleClass("open");

  //標題轉場
  var cardTitle = document.querySelector("section.where div.card h3");
  cardTitle.classList.add("active");
  cardTitle.addEventListener("animationend", function() {
    cardTitle.classList.remove("active");
  });

  //內文轉場
  var cardContent = document.querySelector("section.where div.card p");
  cardContent.classList.add("active");
  cardContent.addEventListener("animationend", function() {
    cardContent.classList.remove("active");
  });

  //按鈕轉場
  var greenBtn = document.querySelector("section.where div.card a.btn");
  var btnTimer;
  greenBtn.classList.add("active");
  clearTimeout(btnTimer);
  btnTimer = setTimeout(function() {
    greenBtn.classList.remove("active");
  }, 500);

  curVal = 2;
  mapCarousel();
});

mapFriendly1.onclick = function() {
  //標題轉場
  var cardTitle = document.querySelector("section.where div.card h3");
  cardTitle.classList.add("active");
  cardTitle.addEventListener("animationend", function() {
    cardTitle.classList.remove("active");
  });

  //內文轉場
  var cardContent = document.querySelector("section.where div.card p");
  cardContent.classList.add("active");
  cardContent.addEventListener("animationend", function() {
    cardContent.classList.remove("active");
  });

  //按鈕轉場
  var greenBtn = document.querySelector("section.where div.card a.btn");
  var btnTimer;
  greenBtn.classList.add("active");
  clearTimeout(btnTimer);
  btnTimer = setTimeout(function() {
    greenBtn.classList.remove("active");
  }, 500);

  curVal = 3;
  mapCarousel();
};

mapFriendly2.onclick = function() {
  //標題轉場
  var cardTitle = document.querySelector("section.where div.card h3");
  cardTitle.classList.add("active");
  cardTitle.addEventListener("animationend", function() {
    cardTitle.classList.remove("active");
  });

  //內文轉場
  var cardContent = document.querySelector("section.where div.card p");
  cardContent.classList.add("active");
  cardContent.addEventListener("animationend", function() {
    cardContent.classList.remove("active");
  });

  //按鈕轉場
  var greenBtn = document.querySelector("section.where div.card a.btn");
  var btnTimer;
  greenBtn.classList.add("active");
  clearTimeout(btnTimer);
  btnTimer = setTimeout(function() {
    greenBtn.classList.remove("active");
  }, 500);

  curVal = 4;
  mapCarousel();
};

mapFriendly3.onclick = function() {
  //標題轉場
  var cardTitle = document.querySelector("section.where div.card h3");
  cardTitle.classList.add("active");
  cardTitle.addEventListener("animationend", function() {
    cardTitle.classList.remove("active");
  });

  //內文轉場
  var cardContent = document.querySelector("section.where div.card p");
  cardContent.classList.add("active");
  cardContent.addEventListener("animationend", function() {
    cardContent.classList.remove("active");
  });

  //按鈕轉場
  var greenBtn = document.querySelector("section.where div.card a.btn");
  var btnTimer;
  greenBtn.classList.add("active");
  clearTimeout(btnTimer);
  btnTimer = setTimeout(function() {
    greenBtn.classList.remove("active");
  }, 500);

  curVal = 5;
  mapCarousel();
};
