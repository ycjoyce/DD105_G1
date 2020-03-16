//漢堡選單
$("button.hamburger").on("click", function(){
    $(this).toggleClass("is-active");
    $("nav ul").slideToggle();
});