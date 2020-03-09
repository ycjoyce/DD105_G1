'use strict';

var now = 1;
var prevBtn = document.querySelector('div.carousel_donation div.changePage button.to_left');
var nextBtn = document.querySelector('div.carousel_donation div.changePage button.to_right');
var carouselArea = document.querySelector('section.donation div.rightSide div.carousel_donation div.card');
var changeArea = document.querySelector('section.donation div.rightSide div.carousel_donation div.changePage');
var timerId = void 0;

function donationCarousel() {
    var bigImg = document.querySelector('div.carousel_donation div.img img');
    var projectNum = document.querySelector('div.carousel_donation div.card span.projectNum');
    var date = document.querySelector('div.carousel_donation div.card span.date');
    var cardTitle = document.querySelector('div.carousel_donation div.card h4 a');
    var goal = document.querySelector('div.carousel_donation div.card div.showNum div.cur span.peoNum span');
    var complete = document.querySelector('div.carousel_donation div.card div.showNum div.dogAnimate span');
    var changeNum = document.querySelector('div.carousel_donation div.changePage span');
    var progressBar = document.querySelector('div.carousel_donation div.progress_bar');

    var leftCards = document.querySelectorAll('section.donation div.leftSide div.card');
    var goalVal = leftCards[now - 1].querySelector("div.text input[name='goal']").value;
    var curVal = leftCards[now - 1].querySelector("div.text input[name='cur']").value;
    var comVal = Math.floor(curVal / goalVal * 100) + "%";

    //換大圖
    bigImg.src = 'img/donation_card_' + now + '.jpg';

    projectNum.innerText = leftCards[now - 1].querySelector('div.text span:first-child').innerText;
    date.innerText = leftCards[now - 1].querySelector('div.text span.date').innerText;
    cardTitle.innerText = leftCards[now - 1].querySelector('div.text h4').innerText;
    goal.innerText = leftCards[now - 1].querySelector("div.text input[name='goal']").value;
    complete.innerText = comVal;
    changeNum.innerText = '0' + now + '/03';
    for (var i = 1; i <= 3; i++) {
        if (i != now) {
            progressBar.querySelector('span:nth-child(' + i + ')').classList.remove("on");
            leftCards[i - 1].classList.remove("on");
        } else {
            progressBar.querySelector('span:nth-child(' + i + ')').classList.add("on");
            leftCards[i - 1].classList.add("on");
        }
    }
}

donationCarousel();

nextBtn.onclick = function () {
    if (now + 1 <= 3) now++;else now = 1;
    donationCarousel();
};

prevBtn.onclick = function () {
    if (now - 1 >= 1) now--;else now = 3;
    donationCarousel();
};

function play() {
    timerId = setInterval(function () {
        nextBtn.onclick();
    }, 5000);
}
play();

function stop() {
    clearInterval(timerId);
}

carouselArea.addEventListener("mouseout", play);
carouselArea.addEventListener("mouseover", stop);
changeArea.addEventListener("mouseout", play);
changeArea.addEventListener("mouseover", stop);

var clickBar = document.querySelector('div.carousel_donation div.progress_bar');

var _loop = function _loop(i) {
    clickBar.querySelector('span:nth-child(' + i + ')').onclick = function () {
        now = i;
        donationCarousel();
    };
};

for (var i = 1; i <= 3; i++) {
    _loop(i);
}