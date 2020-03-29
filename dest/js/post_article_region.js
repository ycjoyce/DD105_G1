/*
	Dropdown with Multiple checkbox select with jQuery - May 27, 2013
	(c) 2013 @ElmahdiMahmoud
	license: https://www.opensource.org/licenses/mit-license.php
*/

// 分隔線
document.getElementById("par_postarticlebutton").onclick = function(){
    var postregionloginornot = document.getElementsByClassName("container")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[5].innerText;
    if( postregionloginornot == "登入 / 註冊") {
        console.log(postregionloginornot);
        alert("您尚未登入，請登入後再發文");
    } else {
        document.getElementsByClassName("postwritebackblock")[0].style.display = "block";
        document.getElementsByClassName("post_write_region")[0].style.display = "block";

        document.getElementsByClassName("postwritebackblock")[0].onclick = function(){
            document.getElementsByClassName("postwritebackblock")[0].style.display = "none";
            document.getElementsByClassName("post_write_region")[0].style.display = "none";
        };
        document.getElementsByClassName("postwritecrossbutton")[0].onclick = function(){
            document.getElementsByClassName("postwritebackblock")[0].style.display = "none";
            document.getElementsByClassName("post_write_region")[0].style.display = "none";
        };
    }
}

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


    //這邊切 keyword
    let keywords = document.getElementsByClassName("keyword");
    var keywordItemSplit;
    var keywordItemString = "";
    for(var keywordIndex=0; keywordIndex<keywords.length; keywordIndex++) {
        var keywordItem = keywords[keywordIndex];
        keywordItemString = keywordItem.innerText;
        // console.log(keywordItemString);
        keywordItem.innerText="";
        //取出字串後，字串依逗點分段放入陣列
        //取出的字串沒有逗點則直接轉陣列
        if(keywordItemString != "") {
            if(keywordItemString.indexOf(",") ){
                keywordItemSplit = keywordItemString.split(",");
                // console.log(keywordItemSplit);
            } else {
                keywordItemSplit = keywordItemString.toArray();
                // console.log(keywordItemSplit);
            }
            // 加上#字號
            for(var keywordItemSplitIndex=0; keywordItemSplitIndex<keywordItemSplit.length; keywordItemSplitIndex++ ){
                var keywordItemSplitItem = keywordItemSplit[keywordItemSplitIndex];
                // console.log(keywordItemSplitItem);
                var setkeywordItemSplitItem = document.createElement("span");
                setkeywordItemSplitItem.innerText = "#" + keywordItemSplitItem;
                // console.log(setkeywordItemSplitItem);
                keywordItem.appendChild(setkeywordItemSplitItem);
            }
        }
    }


    // 前端畫面處理 : input file 圖片預覽
    let reader = new FileReader();
    let cpcWriteContentUpfile0 = document.getElementsByClassName("cpc_writecontentupfile")[0];
    let cpcWriteContentUpfile1 = document.getElementsByClassName("cpc_writecontentupfile")[1];
    let cpcWriteContentUpfile2 = document.getElementsByClassName("cpc_writecontentupfile")[2];
    let file;
    cpcWriteContentUpfile0.onchange = function(e){
        file = e.target.files[0];
        reader.onload = function(e){
            document.getElementById("cpc_writecontentpic1").src = reader.result;
        }
        reader.readAsDataURL(file);
    }
    cpcWriteContentUpfile1.onchange = function(e){
        file = e.target.files[0];
        // 1. input 選取後發出的event
        // 2. 從event中取得檔案
        // 3. 把檔案跟<img>做連結
        reader.onload = function(e){
            document.getElementById("cpc_writecontentpic2").src = reader.result;
        }
        reader.readAsDataURL(file);
    }
    cpcWriteContentUpfile2.onchange = function(e){
        file = e.target.files[0];
        reader.onload = function(e){
            document.getElementById("cpc_writecontentpic3").src = reader.result;
        }
        reader.readAsDataURL(file);
    }


    //這邊放將文字框 值 放入 input value值傳到後台
    let postwriteregionbutton = document.getElementsByClassName("postwriteregionbutton")[0];
    // console.log(postwriteregionbutton);
    // 將文字框 值 放入 input value值
    postwriteregionbutton.onclick = function(){
        console.log(document.getElementsByClassName("postwriteregionbutton")[0].getAttribute("type"));
        // console.log(document.getElementById("cpc_writecontentpic1").getAttribute("src"));
        // console.log(document.getElementById("cpc_writecontentpic2").getAttribute("src"));
        // console.log(document.getElementById("cpc_writecontentpic3").getAttribute("src"));
        if ( document.getElementById("cpc_writecontentpic1").getAttribute("src")!="" && document.getElementById("cpc_writecontentpic2").getAttribute("src")!="" && document.getElementById("cpc_writecontentpic3").getAttribute("src")!="" &&
             document.getElementsByClassName("contenteditabletext")[0].innerText!="" && document.getElementsByClassName("contenteditabletext")[1].innerText!="" && document.getElementsByClassName("contenteditabletext")[2].innerText!="" &&
             document.getElementsByClassName("postwritetitle")[0].value!="" ) {
             // alert("全部都填了");
             // var contenteditabletext1innerText = document.getElementsByClassName("contenteditabletext")[0].innerText;
             // var contenteditabletext2innerText = document.getElementsByClassName("contenteditabletext")[1].innerText;
             // var contenteditabletext3innerText = document.getElementsByClassName("contenteditabletext")[2].innerText;
             // var cpcWriteContentTextRecord1value = document.getElementsByClassName("cpc_writecontenttextrecord")[0].value;
             // var cpcWriteContentTextRecord2value = document.getElementsByClassName("cpc_writecontenttextrecord")[1].value;
             // var cpcWriteContentTextRecord3value = document.getElementsByClassName("cpc_writecontenttextrecord")[2].value;
             document.getElementsByClassName("cpc_writecontenttextrecord")[0].value = document.getElementsByClassName("contenteditabletext")[0].innerText;
             document.getElementsByClassName("cpc_writecontenttextrecord")[1].value = document.getElementsByClassName("contenteditabletext")[1].innerText;
             document.getElementsByClassName("cpc_writecontenttextrecord")[2].value = document.getElementsByClassName("contenteditabletext")[2].innerText;
             document.getElementsByClassName("cpc_writecontenttextrecordgeneral")[0].value = document.getElementsByClassName("contenteditabletext")[0].innerText.substr( 0 , 50 ) + " ...";
             // console.log(contenteditabletext1innerText, contenteditabletext2innerText, contenteditabletext3innerText);
             // console.log(cpcWriteContentTextRecord1value);
             // console.log(cpcWriteContentTextRecord2value);
             // console.log(cpcWriteContentTextRecord3value);
             document.getElementsByClassName("postwriteregionbutton")[0].type = "submit";
        } else {
            alert("請確認已輸入所有資料");
        }
    }
});
