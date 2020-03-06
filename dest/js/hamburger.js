//漢堡選單
$("button.hamburger").on("click", function () {
    $(this).toggleClass("is-active");
});
$("button.hamburger").on("click", function () {
    $("nav ul").slideToggle();
}););
