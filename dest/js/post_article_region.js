/*
	Dropdown with Multiple checkbox select with jQuery - May 27, 2013
	(c) 2013 @ElmahdiMahmoud
	license: https://www.opensource.org/licenses/mit-license.php
*/

// 分隔線
$(".btn.darkgreen.nav__link").on('click', function() {
    $(".postwritebackblock").css({"display":"block"});
    $(".post_write_region").css({"display":"block"});
    $(".postwritebackblock").click(function() {
        $(".postwritebackblock").css({"display":"none"});
        $(".post_write_region").css({"display":"none"});
    });
    $(".postwritecrossbutton").click(function() {
        $(".postwritebackblock").css({"display":"none"});
        $(".post_write_region").css({"display":"none"});
    });
});
// 分隔線

$(".postregionsort div.aa1").on('click', function() {
  if($(".postregionsort div").hasClass("aa1")){
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

$(".postregionkeyword div.aa2").on('click', function() {
  if($(".postregionkeyword div").hasClass("aa2")){
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

$('ul.u1 input[type="checkbox"]').on('click', function() {
    $("span.displayfont1").show();
    $('p.ms1 span[title]').remove();
        // https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/239894/
        // val() : https://www.w3school.com.cn/jquery/attributes_val.asp
        // prop() : https://www.runoob.com/jquery/html-prop.html
    // if ($(this).is(':checked')) {
    if($(this).prop('checked')){
        $('#postregionSort ul.u1>li input:checkbox').prop('checked',false);
        $(this).prop('checked',true);
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

$('ul.u2 input[type="checkbox"]').on('click', function() {
    // $("span.displayfont2").show();
    // console.log($('ul.u2 input[type="checkbox"]').is(':checked'));
    // console.log($(this).is(':checked'));
    if($('ul.u2 input[type="checkbox"]').is(':checked') == false) {
      // console.log($('ul.u2 input[type="checkbox"]').is(':checked'));
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

// ripple 點擊 circle
$('.card-item').on('click', '.ripple', function(e) {

    var $ripple = $('<span class="rippling" />'),
        $button = $(this),
        btnOffset = $button.offset(),
        xPos = e.pageX - btnOffset.left,
        yPos = e.pageY - btnOffset.top,
        size = 0,
        animateSize = parseInt(Math.max($button.width(), $button.height()) * Math.PI);

    $ripple.css({
            top: yPos,
            left: xPos,
            width: size,
            height: size,
            backgroundColor: $button.attr("ripple-color"),
            opacity: $button.attr("ripple-opacity")
        })
        .appendTo($button)
        .animate({  // $(selector).animate(styles,speed,easing,callback)
            width: animateSize,
            height: animateSize,
            opacity: 0
        }, 1000, function() {
            $(this).remove();
        });
});

// 上傳圖片預覽
// window.addEventListener("load", function(){
// 	//-------------------------大頭貼.onchange
// 	document.getElementById("upFile").onchange = function(e){
// 		let file = e.target.files[0];
// 		let reader = new FileReader();
// 		reader.onload = function(e){
// 			document.getElementById("imgPreview").src = reader.result;
// 		}
//
// 		reader.readAsDataURL(file);
// 	}
// })

$('.selectpostgalleryregion').on('click', function() {
    // console.log("on");
    // $('.selectpostarticleregion').css({"color":"#000"});
    window.location.href = "./post_gallery_region.html";
});

// 點擊 card-item 轉 post_content
window.addEventListener("load",function(){
    let cardItems = document.getElementsByClassName('card-item');
    // console.log(cardItems.length);
    for( var i=0; i<cardItems.length; i++ ){
        let cardItem = cardItems[i];
        let cardItemSetpiNoSpan = cardItem.firstElementChild;
        let piNo = cardItemSetpiNoSpan.value;
        // console.log(piNo);
        cardItem.onclick = function(){
            location.href = './post_content.php?piNo=' + piNo;
        }
    }
});

// 將內文整理成大意
// window.addEventListener("load",function(){
    // let subtitles = document.getElementsByClassName('subtitle');
    // let firstPicPostRegion;
    // console.log(subtitles);

    // for(var i=0; i<subtitles.length; i++){
        // let subtitle = subtitles[i];
        // console.log(subtitle);
        // let underSubtitles = subtitle.childNodes;  // 看目前這層的 childNodes 用
        // console.log("還沒刪除時 : ", underSubtitles);
        // let underSubtitlesImgs = subtitle.querySelectorAll('img'); // 遍歷了整個 list ，把 img 標籤全部選出來
        // console.log(underSubtitlesImgs);
        // for(var underSubtitlesImgsitems = 0; underSubtitlesImgsitems<underSubtitlesImgs.length; underSubtitlesImgsitems++) {
            // var underSubtitlesImgsitem = underSubtitlesImgs[underSubtitlesImgsitems];
            // console.log(underSubtitlesImgsitem);
            // firstPicPostRegion = underSubtitlesImgs[0].getAttribute("src");  // 存到外層的變數
            // [...underSubtitlesImgs].forEach(underSubtitlesImgsItem => underSubtitlesImgsItem.remove());
            // console.log("刪除之後的 NodeList : ", underSubtitles);
        // }

        // let subtitleDivFirst = subtitle.children;
        // console.log(subtitleDivFirst);
        // for(var subtitleDivFirstItems=0; subtitleDivFirstItems<subtitleDivFirst.length; subtitleDivFirstItems++) {
            // var subtitleDivFirstItem = subtitleDivFirst[subtitleDivFirstItems];
            // console.log(subtitleDivFirstItem);

            // if(subtitleDivFirstItem != subtitleDivFirst[0]) {
                // console.log(subtitleDivFirstItem);
                // subtitleDivFirstItem.remove(subtitleDivFirstItem);
            // }
        // }

        // 再刪一次數量
        // console.log(subtitleDivFirst);
        // let firstDivContent = subtitle.children;
        // console.log(firstDivContent);
        // for(var firstDivContentItems=0; firstDivContentItems<firstDivContent.length; firstDivContentItems++) {
            // var firstDivContentItem = firstDivContent[firstDivContentItems];
            // console.log(firstDivContentItem);
            // if(firstDivContentItem != firstDivContent[0]) {
                // console.log(subtitleDivFirstItem);
                // firstDivContentItem.remove(firstDivContentItem);
            // }
        // }
        // 再刪一次數量
        // console.log(subtitleDivFirst);
        // let firstDivContentlast = subtitle.children;
        // console.log(firstDivContentlast);
        // for(var firstDivContentlastItems=0; firstDivContentlastItems<firstDivContentlast.length; firstDivContentlastItems++) {
            // var firstDivContentlastItem = firstDivContentlast[firstDivContentlastItems];
            // console.log(firstDivContentlastItem);
            // if(firstDivContentlastItem != firstDivContentlast[0]) {
                // console.log(firstDivContentlastItem);
                // firstDivContentlastItem.remove(firstDivContentlastItem);
            // }
        // }
        // 最後一次刪數量
        // console.log(subtitleDivFirst);
        // let firstDivContentlastbr = subtitle.children;
        // console.log(firstDivContentlast);
        // for(var firstDivContentlastbrItems=0; firstDivContentlastbrItems<firstDivContentlastbr.length; firstDivContentlastbrItems++) {
            // var firstDivContentlastbrItem = firstDivContentlastbr[firstDivContentlastbrItems];
            // console.log(firstDivContentlastItem);
            // if(firstDivContentlastbrItem != firstDivContentlastbr[0]) {
                // console.log(firstDivContentlastItem);
                // firstDivContentlastbrItem.remove(firstDivContentlastbrItem);
            // }
        // }
        // 開始算字數
        // console.log(subtitle);
        // let subtitleString = subtitle.firstElementChild.children;
        // let cutsubtitle;
        // let subtitleStringConnect = "";
        // console.log(subtitleString);  // collection
        // for(let subtitleStringItems=0; subtitleStringItems<subtitleString.length; subtitleStringItems++) {
            // let subtitleStringItem = subtitleString[subtitleStringItems];
            // console.log(subtitleStringItem);
            // subtitleStringConnect += subtitleStringItem.innerText;
        // }
        // console.log(subtitleStringConnect);
        // console.log(subtitleStringConnect, "<br>");
        // let subtitleStringConnectLength = subtitleStringConnect.length;  // 570
        // console.log(subtitleStringConnectLength);
        // if(subtitleStringConnectLength >= 29) {
            // cutsubtitle = subtitleStringConnect.substr( 0 , 29 );
            // console.log(cutsubtitle);
            // console.log(subtitle);
            // subtitle.firstElementChild.innerText=cutsubtitle;
        // };
        // subtitle.firstElementChild.innerText += " ... ";
    // }
    // 塞圖似乎先完成，由於上面的迴圈取出來的照片只有一張，所以暫時先這個樣子
    // console.log(firstPicPostRegion);
    // let cardImgs = document.getElementsByClassName('card-img');
    // console.log(cardImgs);
    // for(var cardImgsItems=0; cardImgsItems<cardImgs.length; cardImgsItems++){
        // var cardImg = cardImgs[cardImgsItems];
        // console.log(cardImg);
        // let cardImgsAll = cardImg.querySelectorAll('img');  // .setAttribute("src", "cardImgs")
        // console.log(cardImgsAll);
        // [...cardImgsAll].forEach(cardImgsAllItem => cardImgsAllItem.setAttribute("src", firstPicPostRegion));
        // console.log("現在是怎樣 : ", cardImgsAll);
    // }
// });

// $('.card-item').on('click', function() {
//     setTimeout(function(){window.location.href='./post_content.php?piNo=<?=$prodRow["piNo"]?>'} , 400);
// });
