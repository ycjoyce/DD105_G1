$(document).ready(function() {
    $('#bigTab1').click(function() { //step1圓圈
        $('.fakeCircles').css("opacity", "0");
        $('.fakeCircle1').css("opacity", "1");
        $('.fakeCircle2').css("opacity", "1");
        $('.fakeCircle3').css("opacity", "1");
        $('.fakeCircle4').css("opacity", "1");
    });
    $('#bigTab2').click(function() { //step2圓圈
        $('.fakeCircles').css("opacity", "0");
        $('.fakeCircle5').css("opacity", "1");
        $('.fakeCircle6').css("opacity", "1");
        $('.fakeCircle7').css("opacity", "1");
        $('.fakeCircle8').css("opacity", "1");
    });
    $('#bigTab3').click(function() { //step3圓圈
        $('.fakeCircles').css("opacity", "0");
        $('.fakeCircle9').css("opacity", "1");
        $('.fakeCircle10').css("opacity", "1");
        $('.fakeCircle11').css("opacity", "1");
        $('.fakeCircle12').css("opacity", "1");
    });
    $('#bigTab4').click(function() { //step4圓圈
        $('.fakeCircles').css("opacity", "0");
        $('.fakeCircle13').css("opacity", "1");
        $('.fakeCircle14').css("opacity", "1");
        $('.fakeCircle15').css("opacity", "1");
        $('.fakeCircle16').css("opacity", "1");
    });
    $('ul.tabs li').click(function() {
        let tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        // $('.tab-content').fadeIn("slow");

        $(this).addClass('current'); //標籤樣式換


        $("#" + tab_id).addClass('current'); //內容換
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
    $('#step4BackBtn').click(function() { //step4上一步按鈕

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).parent().parent().prev().addClass('current');
        $('#bigTab3').addClass('current');
        $('.tabLine1').css("opacity", "1");
        $('.fakeCircles').css("opacity", "0");
        $('.fakeCircle9').css("opacity", "1");
        $('.fakeCircle10').css("opacity", "1");
        $('.fakeCircle11').css("opacity", "1");
        $('.fakeCircle12').css("opacity", "1");
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
})


window.addEventListener('load', function() {
    let curIndex = -1;
    let collarTagWrap = document.getElementById('collarTagWrap');
    let sliderBtnLeft = document.getElementById('sliderBtnLeft');
    let sliderBtnRight = document.getElementById('sliderBtnRight');
    let tagItems = document.getElementsByClassName('tagItems');
    let tagTotal = document.getElementById('tagTotal');
    let nowTag = document.getElementById('nowTag');
    let tagImages = document.getElementsByClassName('tagImages');
    let lockPoint = document.getElementsByClassName('lockPoint');
    let lockStatus = document.getElementsByClassName('lockStatus');

    tagImages[0].style.transform = "scale(2.5)";

    // $('#tagTotal span:first-child').text("1");
    $('#tagTotal span:last-child').text(tagItems.length);
    $('.tagImages').click(function() {
        let nowIndex = (parseInt($('#collarTagWrap').css("left")) / -200) + 1;
        let clickTagIndex = $(this).parent().index();
        // alert(clickTagIndex);
        let clickOffset = -200 * (clickTagIndex - 1) + 'px';
        $('#collarTagWrap').css("left", clickOffset);
        $('.tagImages').css("transform", "scale(1)");
        $(this).css("transform", "scale(2.5)");
        if (clickTagIndex == 0) {
            $('#sliderBtnLeft').attr("disabled", true);
        } else if (clickTagIndex == (tagImages.length - 1)) {
            $('#sliderBtnRight').attr("disabled", true);
        }
        if (clickTagIndex > nowIndex) {
            curIndex = (clickTagIndex - nowIndex) + curIndex;
            tagIndex = (clickTagIndex - nowIndex) + tagIndex;
            $('#sliderBtnLeft').attr("disabled", false);
        } else if (clickTagIndex < nowIndex) {
            curIndex = (clickTagIndex - nowIndex) + curIndex;
            tagIndex = (clickTagIndex - nowIndex) + tagIndex;
            $('#sliderBtnRight').attr("disabled", false);
        }
        $(this).parent().parent().children().children().nextAll().css("visibility", "hidden");
        $(this).nextAll().css("visibility", "visible");
        $(this).parent().parent().children().children().nextAll().css("opacity", "0");
        $(this).nextAll().css("opacity", "1");
        $(this).parent().parent().children().children().css("filter", "brightness(0.6)");
        $(this).css("filter", "brightness(1)");
        $('#tagTotal span:first-child').text(clickTagIndex + 1);

    });
    sliderBtnLeft.addEventListener('click', function() {
        console.log(parseInt(collarTagWrap.style.left));
        curIndex--;
        collarTagWrap.style.left = -200 * curIndex + 'px';
        sliderBtnRight.disabled = false;
        if (parseInt(collarTagWrap.style.left) == 200) {
            sliderBtnLeft.disabled = true;
        }
        let offset = (parseInt(collarTagWrap.style.left) / -200) + 1;
        tagImages[offset + 1].style.transform = "scale(1)";
        tagImages[offset].style.transform = "scale(2.5)";
        tagImages[offset + 1].style.filter = "brightness(0.7)";
        tagImages[offset].style.filter = "brightness(1)";
        lockPoint[offset + 1].style.visibility = "hidden";
        lockPoint[offset].style.visibility = "visible";
        lockPoint[offset + 1].style.opacity = "0";
        lockPoint[offset].style.opacity = "1";
        lockStatus[offset + 1].style.visibility = "hidden";
        lockStatus[offset].style.visibility = "visible";
        lockStatus[offset + 1].style.opacity = "0";
        lockStatus[offset].style.opacity = "1";
        nowTag.innerText = offset + 1;
    });

    sliderBtnRight.addEventListener('click', function() {
        console.log(parseInt(collarTagWrap.style.left));
        curIndex++;
        collarTagWrap.style.left = -200 * curIndex + 'px';
        sliderBtnLeft.disabled = false;
        if (parseInt(collarTagWrap.style.left) == (tagImages.length - 2) * -200) {
            sliderBtnRight.disabled = true;
        }
        let offset = (parseInt(collarTagWrap.style.left) / -200) + 1;

        tagImages[offset - 1].style.transform = "scale(1)";
        tagImages[offset].style.transform = "scale(2.5)";
        tagImages[offset - 1].style.filter = "brightness(0.7)";
        tagImages[offset].style.filter = "brightness(1)";
        lockPoint[offset - 1].style.visibility = "hidden";
        lockPoint[offset].style.visibility = "visible";
        lockPoint[offset - 1].style.opacity = "0";
        lockPoint[offset].style.opacity = "1";
        lockStatus[offset - 1].style.visibility = "hidden";
        lockStatus[offset].style.visibility = "visible";
        lockStatus[offset - 1].style.opacity = "0";
        lockStatus[offset].style.opacity = "1";
        nowTag.innerText = offset + 1;
    });

    // document.querySelector('#unlock1').onclick = function() {
    //     swal({
    //             title: "兌換提示",
    //             text: "您確定要兌換此吊牌款式嗎,將扣除300點!",
    //             // type: "info",
    //             allowOutsideClick: true,
    //             showCancelButton: false,
    //             confirmButtonColor: '#7e9c23',
    //             confirmButtonText: '確認',
    //             closeOnConfirm: false,
    //             //closeOnCancel: false
    //         },
    //         function() {
    //             swal("兌換成功!", "", "success");
    //         });
    // };
    // document.querySelector('#unlock2').onclick = function() {
    //     swal({
    //             title: "兌換提示",
    //             text: "您確定要兌換此吊牌款式嗎,將扣除300點!",
    //             // type: "info",
    //             allowOutsideClick: true,
    //             showCancelButton: false,
    //             confirmButtonColor: '#7e9c23',
    //             confirmButtonText: '確認',
    //             closeOnConfirm: false,
    //             //closeOnCancel: false
    //         },
    //         function() {
    //             swal("兌換成功!", "", "success");
    //         });
    // };
    // document.querySelector('#unlock3').onclick = function() {
    //     swal({
    //             title: "兌換提示",
    //             text: "您確定要兌換此吊牌款式嗎,將扣除300點!",
    //             // type: "info",
    //             allowOutsideClick: true,
    //             showCancelButton: false,
    //             confirmButtonColor: '#7e9c23',
    //             confirmButtonText: '確認',
    //             closeOnConfirm: false,
    //             //closeOnCancel: false
    //         },
    //         function() {
    //             swal("兌換成功!", "", "success");
    //         });
    // };
    // document.querySelector('#unlock4').onclick = function() {
    //     swal({
    //             title: "兌換提示",
    //             text: "您確定要兌換此吊牌款式嗎,將扣除300點!",
    //             // type: "info",
    //             allowOutsideClick: true,
    //             showCancelButton: false,
    //             confirmButtonColor: '#7e9c23',
    //             confirmButtonText: '確認',
    //             closeOnConfirm: false,
    //             //closeOnCancel: false
    //         },
    //         function() {
    //             swal("兌換成功!", "", "success");
    //         });
    // };
    // document.querySelector('#unlock5').onclick = function() {
    //     swal({
    //             title: "兌換提示",
    //             text: "您確定要兌換此吊牌款式嗎,將扣除300點!",
    //             // type: "info",
    //             allowOutsideClick: true,
    //             showCancelButton: false,
    //             confirmButtonColor: '#7e9c23',
    //             confirmButtonText: '確認',
    //             closeOnConfirm: false,
    //             //closeOnCancel: false
    //         },
    //         function() {
    //             swal("兌換成功!", "", "success");
    //         });
    // };
    // document.querySelector('#unlock6').onclick = function() {
    //     swal({
    //             title: "兌換提示",
    //             text: "您確定要兌換此吊牌款式嗎,將扣除300點!",
    //             // type: "info",
    //             allowOutsideClick: true,
    //             showCancelButton: false,
    //             confirmButtonColor: '#7e9c23',
    //             confirmButtonText: '確認',
    //             closeOnConfirm: false,
    //             //closeOnCancel: false
    //         },
    //         function() {
    //             swal("兌換成功!", "", "success");
    //         });
    // };
    // document.querySelector('#unlock7').onclick = function() {
    //     swal({
    //             title: "兌換提示",
    //             text: "您確定要兌換此吊牌款式嗎,將扣除300點!",
    //             // type: "info",
    //             allowOutsideClick: true,
    //             showCancelButton: false,
    //             confirmButtonColor: '#7e9c23',
    //             confirmButtonText: '確認',
    //             closeOnConfirm: false,
    //             //closeOnCancel: false
    //         },
    //         function() {
    //             swal("兌換成功!", "", "success");
    //         });
    // };
    // document.querySelector('#unlock8').onclick = function() {
    //     swal({
    //             title: "兌換提示",
    //             text: "您確定要兌換此吊牌款式嗎,將扣除300點!",
    //             // type: "info",
    //             allowOutsideClick: true,
    //             showCancelButton: false,
    //             confirmButtonColor: '#7e9c23',
    //             confirmButtonText: '確認',
    //             closeOnConfirm: false,
    //             //closeOnCancel: false
    //         },
    //         function() {
    //             swal("兌換成功!", "", "success");
    //         });
    // };
})