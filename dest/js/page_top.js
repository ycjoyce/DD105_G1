// 點擊按鈕，頁面滑到最上方

$(document).ready(function () {
    $("#page_top").on("click", function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 750);
    });
});