"use strict";

/*
	Dropdown with Multiple checkbox select with jQuery - May 27, 2013
	(c) 2013 @ElmahdiMahmoud
	license: https://www.opensource.org/licenses/mit-license.php
*/

// 分隔線
$(".btn.darkgreen.nav__link").on('click', function () {
    $(".postwritebackblock").css({ "display": "block" });
    $(".post_write_region").css({ "display": "block" });
    $(".postwritebackblock").click(function () {
        $(".postwritebackblock").css({ "display": "none" });
        $(".post_write_region").css({ "display": "none" });
    });
});
// 分隔線

$(".postregionsort div.aa1").on('click', function () {
    if ($(".postregionsort div").hasClass("aa1")) {
        $(".postregionsort div").removeClass("aa1");
        $(".postregionsort div").addClass("change1");
        // $(".postregionsort .select-styled span").removeClass("hide1");
        // $(".postregionsort .select-styled span").addClass("hidechange1");
        // $(".select-styled span.hide1").css({"background-color":"#000" , "color":"#fff" , "transition":"all 0.2s ease-in"});
    } else {
        $(".postregionsort div").removeClass("change1");
        $(".postregionsort div").addClass("aa1");
        // $(".postregionsort .select-styled span").removeClass("hidechange1");
        // $(".postregionsort .select-styled span").addClass("hide1");
        // $(".select-styled span.hide1").css({"background-color":"#fff" , "color":"#000"});
    }
    $("ul.u1").slideToggle('1000');
    // $("ul.u2").hide();
});

$(".postregionkeyword div.aa2").on('click', function () {
    if ($(".postregionkeyword div").hasClass("aa2")) {
        $(".postregionkeyword div").removeClass("aa2");
        $(".postregionkeyword div").addClass("change2");
        // $(".postregionkeyword .select-styled span").removeClass("hide2");
        // $(".postregionkeyword .select-styled span").addClass("hidechange2");
    } else {
        $(".postregionkeyword div").removeClass("change2");
        $(".postregionkeyword div").addClass("aa2");
        // $(".postregionkeyword .select-styled span").removeClass("hidechange2");
        // $(".postregionkeyword .select-styled span").addClass("hide2");
    }
    $("ul.u2").slideToggle('1000');
    // $("ul.u1").hide();
});

// $("div.aa2").on('click', function() {
//     $("ul.u1").hide();
// });
// $("div.aa1").on('click', function() {
//     $("ul.u2").hide();
// });

// function getSelectedValue(id) {
//   return $("#" + id).find("dt div span.value").html();
// }

// $(document).bind('click', function(e) {
//     var $clicked = $(e.target);
//     if (!$clicked.parents().hasClass("select")) {
//         $(".select ul").hide();
//     }
// });

$('ul.u1 input[type="checkbox"]').on('click', function () {
    $("span.displayfont1").show();
    $('p.ms1 span[title]').remove();
    // https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/239894/
    // val() : https://www.w3school.com.cn/jquery/attributes_val.asp
    // prop() : https://www.runoob.com/jquery/html-prop.html
    // if ($(this).is(':checked')) {
    if ($(this).prop('checked')) {
        $('#postregionSort ul.u1>li input:checkbox').prop('checked', false);
        $(this).prop('checked', true);
        var postcheckboxtitle1 = $(this).val() + " , ";
        var html = '<span style="transition: all 0.2s ease-in;" title="' + postcheckboxtitle1 + '">' + postcheckboxtitle1 + '</span>';
        $('p.ms1').append(html);
        // console.log($('p.ms1'));
        $("span.displayfont1").hide();
    }
    //  else {
    //     $('p.ms1 span[title]').remove();
    //     var ret = $("span.displayfont1");
    //     $('div.aa1').append(ret);
    // }
});

$('ul.u2 input[type="checkbox"]').on('click', function () {
    // $("span.displayfont2").show();
    // console.log($('ul.u2 input[type="checkbox"]').is(':checked'));
    // console.log($(this).is(':checked'));
    if ($('ul.u2 input[type="checkbox"]').is(':checked') == false) {
        console.log($('ul.u2 input[type="checkbox"]').is(':checked'));
        $("span.displayfont2").show();
    }

    var title = $(this).closest('ul.u2').find('input[type="checkbox"]').val(),
        titleaddsymple = $(this).val() + " , ";
    if ($(this).is(':checked')) {
        var html = '<span style="transition: all 0.2s ease-in;" title="' + titleaddsymple + '">' + titleaddsymple + '</span>';
        $('p.ms2').append(html);
        $("span.displayfont2").hide();
        // $("span.displayfont2").hide();
    } else {
        $('p.ms2 span[title="' + titleaddsymple + '"]').remove();
        var ret = $("span.displayfont2");
        $('div.aa2').append(ret);
    }
});

$('.selectpostgalleryregion').on('click', function () {
    // console.log("on");
    // $('.selectpostarticleregion').css({"color":"#000"});
    window.location.href = "./post_gallery_region.html";
});llery_region.html";
});
