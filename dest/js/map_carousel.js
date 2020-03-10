'use strict';

var curVal = 1;
var mapPrevBtn = document.querySelector('section.where div.card div.changePage button.to_left');
var mapNextBtn = document.querySelector('section.where div.card div.changePage button.to_right');
// let changeArea= document.querySelector('section.where div.card div.changePage');
var mapLost = document.querySelector('section.about div.where ul.mapOption li:first-child');
var mapFriendly = document.querySelector('section.about div.where ul.mapOption li:nth-child(2)');
var mapFriendly1 = document.querySelector('section.about div.where ul.mapOption li:nth-child(3)');
var mapFriendly2 = document.querySelector('section.about div.where ul.mapOption li:nth-child(4)');
var mapFriendly3 = document.querySelector('section.about div.where ul.mapOption li:nth-child(5)');

function mapCarousel() {
    var cardTitle = document.querySelector('section.where div.card h3');
    var cardContent = document.querySelector('section.where div.card p');
    var cardBtn = document.querySelector('section.where div.card a.btn span');
    var changeNum = document.querySelector('section.where div.card div.changePage span');

    if (curVal == 1) {
        cardTitle.innerText = "寵物遺失地點";
        cardContent.innerHTML = '\u5FC3\u611B\u7684\u6BDB\u5B69\u8D70\u4E1F\u4E86\u4E5F\u5225\u9A5A\u614C\uFF0C<br>\n                                \u5FEB\u4F86\u56DE\u5831\u907A\u5931\u7684\u5730\u9EDE\u8B93\u5927\u5BB6\u4E00\u540C\u5354\u5C0B\uFF01<br>\n                                \u770B\u898B\u7591\u4F3C\u8D70\u5931\u7684\u8C93\u72D7\u4E5F\u4F86\u806F\u7E6B\u4E3B\u4EBA\u78BA\u8A8D\u5427\u3002<br>';
        cardBtn.innerText = "我的寵物遺失了";
        changeNum.innerText = "01/05";
        if (mapLost.classList.contains("on") == false) {
            mapLost.classList.add("on");
            mapFriendly.classList.remove("on");
            mapFriendly1.classList.remove("on");
            mapFriendly2.classList.remove("on");
            mapFriendly3.classList.remove("on");
        }
    } else if (curVal == 2) {
        cardTitle.innerText = "寵物友善空間";
        cardContent.innerHTML = '\u5E36\u5FC3\u611B\u7684\u6BDB\u5B69\u51FA\u9580\u7E3D\u662F\u88AB\u62D2\u4E4B\u9580\u5916\u55CE?<br>\n                                \u8490\u96C6\u5168\u53F0\u53CB\u5584\u5BF5\u7269\u7A7A\u9593\uFF0C<br>\n                                \u8B93\u60A8\u80FD\u5920\u8F15\u9B06\u548C\u6BDB\u5C0F\u5B69\u4E00\u540C\u51FA\u904A\uFF01<br>';
        cardBtn.innerText = "了解更多";
        changeNum.innerText = "02/05";
        if (mapFriendly1.classList.contains("on") == false) {
            mapLost.classList.remove("on");
            mapFriendly.classList.add("on");
            mapFriendly1.classList.remove("on");
            mapFriendly2.classList.remove("on");
            mapFriendly3.classList.remove("on");
        }
    } else if (curVal == 3) {
        cardTitle.innerText = "寵物友善餐廳";
        cardContent.innerHTML = '\u5E36\u5FC3\u611B\u7684\u6BDB\u5B69\u51FA\u9580\u7E3D\u662F\u627E\u4E0D\u5230\u9910\u5EF3\u7528\u9910\u55CE?<br>\n                                \u8490\u96C6\u5168\u53F0\u53CB\u5584\u5BF5\u7269\u9910\u5EF3\uFF0C<br>\n                                \u8B93\u60A8\u80FD\u5920\u8F15\u9B06\u548C\u6BDB\u5C0F\u5B69\u4E00\u540C\u7D04\u6703\u53BB\uFF01<br>';
        cardBtn.innerText = "了解更多";
        changeNum.innerText = "03/05";
        if (mapFriendly1.classList.contains("on") == false) {
            mapLost.classList.remove("on");
            mapFriendly.classList.remove("on");
            mapFriendly1.classList.add("on");
            mapFriendly2.classList.remove("on");
            mapFriendly3.classList.remove("on");
        }
    } else if (curVal == 4) {
        cardTitle.innerText = "寵物友善住宿";
        cardContent.innerHTML = '\u9084\u5728\u7169\u60F1\u8207\u6BDB\u5B69\u51FA\u904A\u7121\u8655\u53EF\u4F4F\u55CE?<br>\n                                \u8490\u96C6\u5168\u53F0\u53CB\u5584\u5BF5\u7269\u4F4F\u5BBF\uFF0C<br>\n                                \u8B93\u60A8\u548C\u6BDB\u5C0F\u5B69\u90FD\u7761\u5F97\u5B89\u7A69\uFF01<br>';
        cardBtn.innerText = "了解更多";
        changeNum.innerText = "04/05";
        if (mapFriendly2.classList.contains("on") == false) {
            mapLost.classList.remove("on");
            mapFriendly.classList.remove("on");
            mapFriendly1.classList.remove("on");
            mapFriendly2.classList.add("on");
            mapFriendly3.classList.remove("on");
        }
    } else if (curVal == 5) {
        cardTitle.innerText = "寵物友善景點";
        cardContent.innerHTML = '\u82E6\u65BC\u627E\u4E0D\u5230\u5408\u9069\u7684\u666F\u9EDE\u7121\u6CD5\u5E36\u6BDB\u5B69\u51FA\u9580\u55CE?<br>\n                                \u8490\u96C6\u5168\u53F0\u53CB\u5584\u5BF5\u7269\u666F\u9EDE\uFF0C<br>\n                                \u8B93\u60A8\u80FD\u5920\u8F15\u9B06\u548C\u6BDB\u5C0F\u5B69\u5728\u53F0\u7063\u5404\u5730\u7559\u4E0B\u8DB3\u8DE1\uFF01<br>';
        cardBtn.innerText = "了解更多";
        changeNum.innerText = "05/05";
        if (mapFriendly3.classList.contains("on") == false) {
            mapLost.classList.remove("on");
            mapFriendly.classList.remove("on");
            mapFriendly1.classList.remove("on");
            mapFriendly2.classList.remove("on");
            mapFriendly3.classList.add("on");
        }
    }
}

mapCarousel();

mapNextBtn.onclick = function () {
    if (curVal + 1 <= 5) curVal++;else curVal = 1;
    mapCarousel();
};

mapPrevBtn.onclick = function () {
    if (curVal - 1 >= 1) curVal--;else curVal = 5;
    mapCarousel();
};

mapLost.onclick = function () {
    curVal = 1;
    mapCarousel();
};

// mapFriendly.onclick=function(){
//     curVal=2;
//     mapCarousel();
// };

mapFriendly1.onclick = function () {
    curVal = 3;
    mapCarousel();
};

mapFriendly2.onclick = function () {
    curVal = 4;
    mapCarousel();
};

mapFriendly3.onclick = function () {
    curVal = 5;
    mapCarousel();
};