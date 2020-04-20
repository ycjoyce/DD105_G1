$(document).ready(function() {
    $('#bigTab1').click(function() { //step1圓圈
        let status = document.getElementsByClassName('status');
        let nowTag = parseInt($('#nowTag').text());
        if (status[nowTag - 1].innerText == "未解鎖") {
            return;
        } else {
            $('.fakeCircles').css("opacity", "0");
            $('.fakeCircle1').css("opacity", "1");
            $('.fakeCircle2').css("opacity", "1");
            $('.fakeCircle3').css("opacity", "1");
            $('.fakeCircle4').css("opacity", "1");
        }
    });
    $('#bigTab2').click(function() { //step2圓圈
        $('.fakeCircles').css("opacity", "0");
        $('.fakeCircle5').css("opacity", "1");
        $('.fakeCircle6').css("opacity", "1");
        $('.fakeCircle7').css("opacity", "1");
        $('.fakeCircle8').css("opacity", "1");
    });
    $('#bigTab3').click(function() { //step3圓圈
        let status = document.getElementsByClassName('status');
        let nowTag = parseInt($('#nowTag').text());
        if (status[nowTag - 1].innerText == "未解鎖") {
            return;
        } else {
            $('.fakeCircles').css("opacity", "0");
            $('.fakeCircle9').css("opacity", "1");
            $('.fakeCircle10').css("opacity", "1");
            $('.fakeCircle11').css("opacity", "1");
            $('.fakeCircle12').css("opacity", "1");
        }


    });
    $('#bigTab4').click(function() { //step4圓圈
        let status = document.getElementsByClassName('status');
        let nowTag = parseInt($('#nowTag').text());
        if (status[nowTag - 1].innerText == "未解鎖") {
            return;
        } else {
            $('.fakeCircles').css("opacity", "0");
            $('.fakeCircle13').css("opacity", "1");
            $('.fakeCircle14').css("opacity", "1");
            $('.fakeCircle15').css("opacity", "1");
            $('.fakeCircle16').css("opacity", "1");
        }
    });

    $('ul.tabs li').click(function() {
        let tab_id = $(this).attr('data-tab');
        let status = document.getElementsByClassName('status');
        let nowTag = parseInt($('#nowTag').text());

        if (status[nowTag - 1].innerText == "未解鎖") {
            alert("請先解鎖此吊牌");
        } else {
            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');
            // $('.tab-content').fadeIn("slow");

            $(this).addClass('current'); //標籤樣式換


            $("#" + tab_id).addClass('current'); //內容換
        }
    });
    $('#step1NextBtn').click(function() { //step1下一步按鈕
        if (($('.collarImages').hasClass("imageApplying")) == false) {
            alert("請先選擇一款皮帶");
        } else {
            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');
            $(this).parent().parent().next().addClass('current');
            $('#bigTab2').addClass('current');
            $('#bigTab2').css('pointer-events', 'unset');
            $('#bigTab2').removeClass("tabClose").addClass("tabOpen");
            $('#bigTab2').children().removeClass("tabSpanClose").addClass("tabSpanOpen");
            $('.tabLine1').css("opacity", "1");
            $('.fakeCircles').css("opacity", "0");
            $('.fakeCircle5').css("opacity", "1");
            $('.fakeCircle6').css("opacity", "1");
            $('.fakeCircle7').css("opacity", "1");
            $('.fakeCircle8').css("opacity", "1");
        }
    });
    $('#step2NextBtn').click(function() { //step2下一步按鈕
        let status = document.getElementsByClassName('status');
        let nowTag = parseInt($('#nowTag').text());
        if (status[nowTag - 1].innerText == "未解鎖") {
            alert("請先解鎖此吊牌");
        } else {
            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');

            $(this).parent().parent().next().addClass('current');
            $('#bigTab3').addClass('current');
            $('#bigTab3').css('pointer-events', 'unset');
            $('#bigTab3').removeClass("tabClose").addClass("tabOpen");
            $('#bigTab3').children().removeClass("tabSpanClose").addClass("tabSpanOpen");
            $('.tabLine2').css("opacity", "1");
            $('.fakeCircles').css("opacity", "0");
            $('.fakeCircle9').css("opacity", "1");
            $('.fakeCircle10').css("opacity", "1");
            $('.fakeCircle11').css("opacity", "1");
            $('.fakeCircle12').css("opacity", "1");
        }
    });
    $('#step2BackBtn').click(function() { //step2上一步按鈕

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).parent().parent().prev().addClass('current');
        $('#bigTab1').addClass('current');
        $('.tabLine1').css("opacity", "1");
        $('.fakeCircles').css("opacity", "0");
        $('.fakeCircle1').css("opacity", "1");
        $('.fakeCircle2').css("opacity", "1");
        $('.fakeCircle3').css("opacity", "1");
        $('.fakeCircle4').css("opacity", "1");
    });
    $('#step3NextBtn').click(function() { //step3下一步按鈕

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).parent().parent().next().addClass('current');
        $('#bigTab4').addClass('current');
        $('#bigTab4').css('pointer-events', 'unset');
        $('#bigTab4').removeClass("tabClose").addClass("tabOpen");
        $('#bigTab4').children().removeClass("tabSpanClose").addClass("tabSpanOpen");
        $('.tabLine3').css("opacity", "1");
        $('.fakeCircles').css("opacity", "0");
        $('.fakeCircle13').css("opacity", "1");
        $('.fakeCircle14').css("opacity", "1");
        $('.fakeCircle15').css("opacity", "1");
        $('.fakeCircle16').css("opacity", "1");
    });
    $('#step3BackBtn').click(function() { //step3上一步按鈕

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).parent().parent().prev().addClass('current');
        $('#bigTab2').addClass('current');
        $('.tabLine1').css("opacity", "1");
        $('.fakeCircles').css("opacity", "0");
        $('.fakeCircle5').css("opacity", "1");
        $('.fakeCircle6').css("opacity", "1");
        $('.fakeCircle7').css("opacity", "1");
        $('.fakeCircle8').css("opacity", "1");
    });
    $('#step4BackBtn').click(function() { //step4立即購買按鈕

        // $('ul.tabs li').removeClass('current');
        // $('.tab-content').removeClass('current');

        // $(this).parent().parent().prev().addClass('current');
        // $('#bigTab3').addClass('current');
        // $('.tabLine1').css("opacity", "1");
        // $('.fakeCircles').css("opacity", "0");
        // $('.fakeCircle9').css("opacity", "1");
        // $('.fakeCircle10').css("opacity", "1");
        // $('.fakeCircle11').css("opacity", "1");
        // $('.fakeCircle12').css("opacity", "1");
        // if ($('#orderNameInput').val() == "") {
        //     alert("請先輸入收件人姓名");
        //     return;
        // } else if ($('#orderPhoneInput').val() == "") {
        //     alert("請先輸入收件人電話");
        //     return;
        // } else if ($('#orderAddressInput').val() == "") {
        //     alert("請先輸入收件人地址");
        //     return;
        // } else {
        $('#orderName').text($('#orderNameInput').val());
        $('#orderPhone').text($('#orderPhoneInput').val());
        $('#orderAddress').text($('#orderAddressInput').val());
        // }
    });
    $('.collarImagesBoxs').click(function() {
        $(this).parent().children().children().removeClass("imageApplying");
        $(this).children().addClass("imageApplying");
        $(this).parent().children().children().next().removeClass("shadowApplying");
        $(this).children().next().addClass("shadowApplying");
        $(this).parent().children().css("border", "0px solid red");
        $(this).css("border", "0px solid #7e9c23");

        preBackgroundColor = $(this).css("background-color");
        $('#preview_area').css("background-color", preBackgroundColor);
    });

    $('#minusCountBtn').click(function() {
        let nowCount = parseInt($('#collarCount').text());
        if ($('#collarCount').text() == 1) {
            return;
        } else {
            nowCount -= 1;
            $('#collarCount').text(nowCount);
            $('#totalPrice').text(nowCount * 300);
            $('#orderQTY').text($('#collarCount').text());
            $('#orderPrice').text($('#totalPrice').text());
        }
    })
    $('#plusCountBtn').click(function() {
        let nowCount = parseInt($('#collarCount').text());
        nowCount += 1;
        $('#collarCount').text(nowCount);
        $('#totalPrice').text(nowCount * 300);
        $('#orderQTY').text($('#collarCount').text());
        $('#orderPrice').text($('#totalPrice').text());
    })
    $('#orderQTY').text($('#collarCount').text());
    $('#orderPrice').text($('#totalPrice').text());

})



window.addEventListener('load', function() {
    // let curIndex = 0;
    // let collarTagWrap = document.getElementById('collarTagWrap');
    // let sliderBtnLeft = document.getElementById('sliderBtnLeft');
    // let sliderBtnRight = document.getElementById('sliderBtnRight');
    // tagItems = document.getElementsByClassName('tagItems');
    // let tagTotal = document.getElementById('tagTotal');
    // // nowTag = document.getElementById('nowTag');
    // let tagImages = document.getElementsByClassName('tagImages');
    // let lockPoint = document.getElementsByClassName('lockPoint');
    // let lockStatus = document.getElementsByClassName('lockStatus');
    // let todayDate = document.getElementById('todayDate');
    // let orderDate = document.getElementById('orderDate');
    // let tab2_content = document.getElementsByClassName('tab2_content')[0];


    // let today = new Date();
    // todayDate.innerText = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
    // orderDate.innerText = `${todayDate.innerText}`;



    // $('#tagTotal span:last-child').text(tagItems.length);

    // alert("當前顯示器寬度" + $(window).width() + "px");
    // alert("輪播圖數量" + tagItems.length);
    // $('#collarTagWrap').css('width', tagItems.length * 600);
    // if ($(window).width() < 600) {
    //     $('.tagItems').css('width', $(window).width());
    // } else {
    //     $('.tagItems').css('width', 600);
    // }

    // // alert($(window).width());
    // alert("單一屏寬" + $('.tagItems').css('width'));
    // alert("輪播全部寬" + $('#collarTagWrap').css('width'));
    // window.addEventListener('resize', function() {
    //     let tagNum = document.getElementsByClassName('tagItems').length;
    //     if ($(window).width() < 600) {
    //         $('.tagItems').css('width', $(window).width());
    //         $('#collarTagWrap').css('left', -$(window).width() * (parseInt($('#nowTag').text()) - 1));
    //     } else {
    //         $('.tagItems').css('width', 600);
    //         $('#collarTagWrap').css('left', -600 * (parseInt($('#nowTag').text()) - 1));
    //     }
    // });
    // // alert("測試1");
    // // tagImages[0].style.transform = "scale(2.5)";
    // // alert("測試2");
    // sliderBtnLeft.style.opacity = "0";
    // sliderBtnRight.style.cursor = "pointer";
    // sliderBtnLeft.addEventListener('click', function() {
    //     let abc = parseInt($('#nowTag').text());
    //     abc -= 1;
    //     $('#nowTag').text(abc);

    //     sliderBtnRight.style.opacity = "1";
    //     sliderBtnRight.style.cursor = "pointer";
    //     let tagWidth = parseFloat($('.tagItems').css('width'));
    //     // alert(tagWidth);
    //     curIndex--;
    //     collarTagWrap.style.left = -tagWidth * curIndex + 'px';
    //     sliderBtnRight.disabled = false;
    //     if (parseFloat(collarTagWrap.style.left) == 0) {
    //         sliderBtnLeft.disabled = true;
    //         sliderBtnLeft.style.opacity = "0";
    //         sliderBtnLeft.style.cursor = "default";
    //     }
    //     let offset = (parseFloat(collarTagWrap.style.left) / -tagWidth) + 1;
    //     // alert(offset);
    //     tagImages[offset].style.transform = "scale(1)";
    //     tagImages[offset - 1].style.transform = "scale(2.5)";
    //     tagImages[offset].style.filter = "brightness(0.7)";
    //     tagImages[offset - 1].style.filter = "brightness(1)";
    //     lockPoint[offset].style.visibility = "hidden";
    //     lockPoint[offset - 1].style.visibility = "visible";
    //     lockPoint[offset].style.opacity = "0";
    //     lockPoint[offset - 1].style.opacity = "1";
    //     lockStatus[offset].style.visibility = "hidden";
    //     lockStatus[offset - 1].style.visibility = "visible";
    //     lockStatus[offset].style.opacity = "0";
    //     lockStatus[offset - 1].style.opacity = "1";
    //     // nowTag.innerText = offset + 1;
    // });

    // sliderBtnRight.addEventListener('click', function() {
    //     let abc = parseInt($('#nowTag').text());
    //     abc += 1;
    //     $('#nowTag').text(abc);

    //     sliderBtnLeft.style.opacity = "1";
    //     sliderBtnLeft.style.cursor = "pointer";
    //     let tagWidth = parseFloat($('.tagItems').css('width'));

    //     curIndex++;
    //     collarTagWrap.style.left = -tagWidth * curIndex + 'px';
    //     sliderBtnLeft.disabled = false;
    //     if (parseFloat(collarTagWrap.style.left) == (tagImages.length - 1) * -tagWidth) {
    //         sliderBtnRight.disabled = true;
    //         sliderBtnRight.style.opacity = "0";
    //         sliderBtnRight.style.cursor = "default";
    //     }
    //     let offset = (parseFloat(collarTagWrap.style.left) / -tagWidth) + 1;
    //     // alert(offset);
    //     tagImages[offset - 2].style.transform = "scale(1)";
    //     tagImages[offset - 1].style.transform = "scale(2.5)";
    //     tagImages[offset - 2].style.filter = "brightness(0.7)";
    //     tagImages[offset - 1].style.filter = "brightness(1)";
    //     lockPoint[offset - 2].style.visibility = "hidden";
    //     lockPoint[offset - 1].style.visibility = "visible";
    //     lockPoint[offset - 2].style.opacity = "0";
    //     lockPoint[offset - 1].style.opacity = "1";
    //     lockStatus[offset - 2].style.visibility = "hidden";
    //     lockStatus[offset - 1].style.visibility = "visible";
    //     lockStatus[offset - 2].style.opacity = "0";
    //     lockStatus[offset - 1].style.opacity = "1";
    //     // nowTag.innerText = offset + 1;
    // });
})