function dofirst() {
    var previewArea = document.getElementById('preview_area');
    var step1NextBtn = document.getElementById('step1NextBtn');
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var canvas2 = document.getElementById('canvas2');
    var context2 = canvas2.getContext('2d');
    var sliderBtnLeft = document.getElementById('sliderBtnLeft');
    var sliderBtnRight = document.getElementById('sliderBtnRight');
    var collarTagWrap = document.getElementById('collarTagWrap');


    // $('#bigTab2').click(function() {
    //     resizeCanvas();
    // });


    var collarImg = new Image();
    collarImg.src = "./img/customized_collar/leather_png/1.png";
    var collarImg2 = new Image();
    collarImg2.src = "./img/customized_collar/leather_png/real_upper_finish2.png";
    var tagImg1 = new Image();
    tagImg1.src = "./img/customized_collar/leather_png/29.png";
    tagImg2 = new Image();
    tagImg2.src = "";


    tagIndex = 1;
    // $('.tagImages').click(function() {
    //     alert(tagIndex);
    // });
    step1NextBtn.addEventListener('click', function() {
        resizeCanvas();
        if (tagIndex == 1) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/boneTag_finish.png";
            resizeCanvas();
        } else if (tagIndex == 2) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/circleTag_finish.png";
            resizeCanvas();
        } else if (tagIndex == 3) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/cloverTag_finish.png";
            resizeCanvas();
        } else if (tagIndex == 4) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/fishTag_finish.png";
            resizeCanvas();
        } else if (tagIndex == 5) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/footprint_finish.png";
            resizeCanvas();
        } else if (tagIndex == 6) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/heartTag_finish.png";
            resizeCanvas();
        } else if (tagIndex == 7) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/spadesTag_finish.png";
            resizeCanvas();
        } else if (tagIndex == 8) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/starTag_finish.png";
            resizeCanvas();
        }
    });

    sliderBtnLeft.addEventListener('click', function() {
        resizeCanvas();
        tagIndex--;
        // alert(tagIndex);
        if (tagIndex == 1) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/boneTag_finish.png";
            resizeCanvas();
        } else if (tagIndex == 2) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/circleTag_finish.png";
            resizeCanvas();
        } else if (tagIndex == 3) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/cloverTag_finish.png";
            resizeCanvas();
        } else if (tagIndex == 4) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/fishTag_finish.png";
            resizeCanvas();
        } else if (tagIndex == 5) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/footprint_finish.png";
            resizeCanvas();
        } else if (tagIndex == 6) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/heartTag_finish.png";
            resizeCanvas();
        } else if (tagIndex == 7) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/spadesTag_finish.png";
            resizeCanvas();
        } else if (tagIndex == 8) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/starTag_finish.png";
            resizeCanvas();
        }
    });
    sliderBtnRight.addEventListener('click', function() {
        tagIndex++;
        // alert(tagIndex);
        if (tagIndex == 1) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/boneTag_finish.png";
            resizeCanvas();
        } else if (tagIndex == 2) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/circleTag_finish.png";
            resizeCanvas();
        } else if (tagIndex == 3) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/cloverTag_finish.png";
            resizeCanvas();
        } else if (tagIndex == 4) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/fishTag_finish.png";
            resizeCanvas();
        } else if (tagIndex == 5) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/footprint_finish.png";
            resizeCanvas();
        } else if (tagIndex == 6) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/heartTag_finish.png";
            resizeCanvas();
        } else if (tagIndex == 7) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/spadesTag_finish.png";
            resizeCanvas();
        } else if (tagIndex == 8) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/starTag_finish.png";
            resizeCanvas();
        }
    });

    document.getElementById('collarImage1').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/1.png";
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
        // resizeCanvas();
    });
    document.getElementById('collarImage2').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/2.png";
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
        // resizeCanvas();
    });
    document.getElementById('collarImage3').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/3.png";
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
        // resizeCanvas();
    });
    document.getElementById('collarImage4').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/4.png";
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
        // resizeCanvas();
    });
    document.getElementById('collarImage5').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/5.png";
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
    });
    document.getElementById('collarImage6').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/6.png";
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
    });
    document.getElementById('collarImage7').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/7.png";
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
    });
    document.getElementById('collarImage8').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/8.png";
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
    });
    document.getElementById('collarImage9').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/9.png";
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
    });
    document.getElementById('collarImage10').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/10.png";
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
    });
    document.getElementById('collarImage11').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/11.png";
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
    });
    document.getElementById('collarImage12_1').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/12_1.png";
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
    });
    document.getElementById('collarImage12_2').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/12_2.png";
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
    });
    document.getElementById('collarImage13').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/13.png";
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
    });
    document.getElementById('collarImage14').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/14.png";
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
    });
    document.getElementById('collarImage15').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/15.png";
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
    });
    document.getElementById('collarImage16').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/16.png";
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
    });
    document.getElementById('collarImage17').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/17.png";
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
    });
    document.getElementById('collarImage18').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/18.png";
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
    });
    document.getElementById('collarImage19').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/19.png";
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
    });
    document.getElementById('collarImage20').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/20.png";
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
    });
    document.getElementById('collarImage21').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/21.png";
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
    });
    document.getElementById('collarImage22').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/22.png";
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
    });
    document.getElementById('collarImage23').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/23.png";
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
    });
    document.getElementById('collarImage24').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/24.png";
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
    });
    document.getElementById('collarImage25').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/25.png";
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
    });
    document.getElementById('collarImage26').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/26.png";
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
    });
    document.getElementById('collarImage27').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/27.png";
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
    });




    resizeCanvas();

    function resizeCanvas() {
        canvas.width = previewArea.clientWidth;
        canvas.height = previewArea.clientHeight;
        canvas2.width = previewArea.clientWidth;
        canvas2.height = previewArea.clientHeight;
        imgRatio = 1000 / 1000;
        imgWidth = previewArea.clientWidth * 0.7;
        imgHeight = imgWidth * imgRatio;
        imgOffsetX = (canvas.width - imgWidth) / 2;
        imgOffsetY = (canvas.height - imgHeight) / 2;
        if (window.innerWidth <= 414) {
            imgWidth = previewArea.clientWidth * 1;
            imgHeight = imgWidth * imgRatio;
            imgOffsetX = (canvas.width - imgWidth) / 2;
            imgOffsetY = -15;
        } else if (window.innerWidth < 576) {
            imgWidth = previewArea.clientWidth * 1;
            imgHeight = imgWidth * imgRatio;
            imgOffsetX = (canvas.width - imgWidth) / 2;
            imgOffsetY = (canvas.width - imgWidth) / 10;
        } else if (window.innerWidth < 768) {
            imgWidth = previewArea.clientWidth * 0.7;
            imgHeight = imgWidth * imgRatio;
            imgOffsetX = (canvas.width - imgWidth) / 2.2;
            imgOffsetY = (canvas.width - imgWidth) / 10;
        } else if (window.innerWidth < 992) {
            imgWidth = previewArea.clientWidth * 1.1;
            imgHeight = imgWidth * imgRatio;
            imgOffsetX = (canvas.width - imgWidth) / 2;
            imgOffsetY = (canvas.height - imgHeight) / 2;
        } else if (window.innerWidth < 1200) {
            imgWidth = previewArea.clientWidth * 1;
            imgHeight = imgWidth * imgRatio;
            imgOffsetX = (canvas.width - imgWidth) / 2;
            imgOffsetY = (canvas.height - imgHeight) / 2;
        } else if (window.innerWidth < 1500) {
            imgWidth = previewArea.clientWidth * 0.9;
            imgHeight = imgWidth * imgRatio;
            imgOffsetX = (canvas.width - imgWidth) / 2;
            imgOffsetY = (canvas.height - imgHeight) / 2;
        }

        // 輸出主要圖片----------------------------------------------------------------------
        collarImg.addEventListener('load', function() {
            context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
        });
        context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
        //-----------------------------------------------------------------------------------



        // 輸出背景圖片----------------------------------------------------------------------
        collarImg2.addEventListener('load', function() {
            context2.drawImage(collarImg2, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
        });
        context2.drawImage(collarImg2, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
        //-----------------------------------------------------------------------------------



        // 輸出吊環圖片----------------------------------------------------------------------
        tagImg1.addEventListener('load', function() {
            context2.drawImage(tagImg1, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
        });
        context2.drawImage(tagImg1, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
        //-----------------------------------------------------------------------------------



        // 輸出吊牌圖片----------------------------------------------------------------------
        tagImg2.addEventListener('load', function() {
            context.drawImage(tagImg2, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
        });
        context.drawImage(tagImg2, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
        //-----------------------------------------------------------------------------------


    }
    window.addEventListener('resize', resizeCanvas);

}
window.addEventListener('load', dofirst);