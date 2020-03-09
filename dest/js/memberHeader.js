'use strict';

//hover會員圖片
var memPic = document.querySelector('li.memZone div div.memPic');
var memZoneUl = document.querySelector('li.memZone ul.memZone');
memPic.addEventListener("click", function () {
    memZoneUl.classList.toggle("open");
});

//點擊我的信箱
var messageBtn = document.querySelector('nav div ul li div.message');
messageBtn.addEventListener("click", function () {
    location.href = "message.html";
});