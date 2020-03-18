function dofirst() {
    WebFont.load({
        google: {
            families: ['Pacifico', 'VT323', 'Quicksand', 'Inconsolata']
        }
    });
    var previewArea = document.getElementById('preview_area');
    var step1NextBtn = document.getElementById('step1NextBtn');
    // var canvas = document.getElementById('canvas');
    // var context = canvas.getContext('2d');
    var canvas = new fabric.Canvas('canvas');
    var canvas2 = document.getElementById('canvas2');
    var context2 = canvas2.getContext('2d');
    var sliderBtnLeft = document.getElementById('sliderBtnLeft');
    var sliderBtnRight = document.getElementById('sliderBtnRight');
    var collarTagWrap = document.getElementById('collarTagWrap');
    var collarImg = new Image();
    collarImg.src = "./img/customized_collar/leather_png/1.png";
    var collarImg2 = new Image();
    collarImg2.src = "./img/customized_collar/leather_png/real_upper_finish5.png";
    var tagImg1 = new Image();
    tagImg1.src = "./img/customized_collar/leather_png/29_2.png";
    tagImg2 = new Image();
    tagImg2.src = "";

    var base64Btn = document.getElementById('base64Btn');
    base64Btn.addEventListener('click', function() {
        var canvasbase64 = canvas.toDataURL();
        console.log(canvasbase64);
        localStorage.setItem("test123", canvasbase64);
    })

    var HideControls = {
        'tl': true, //左上   top left
        'tr': true, //右上   top right          
        'bl': true, //左下   bottom left
        'br': true, //右下   bottom right
        'ml': true, //中左   middle left
        'mt': true, //中上   middle top
        'mr': true, //中右   middle right
        'mb': true, //中下   middle bottom
        'mtr': true, //中上控制角度     middle top rotate 
    };
    delTextBtn.addEventListener('click', function() {
        canvas.remove(canvas.getActiveObject());
    });
    // var textStyle1 = document.getElementById('textStyle1');
    var textStyle2 = document.getElementById('textStyle2');
    var textStyle3 = document.getElementById('textStyle3');
    var fontFamilySelect = document.getElementById('fontFamilySelect');
<<<<<<< HEAD
    var textShadow = '-1px -1px 0px rgba(0, 0, 0, .7)';
    var textColor = '#e6c785';
    var strokeColor = '';
    var fonts = ["", "Pacifico", "VT323", "Quicksand", "Inconsolata"];
    var textFontFamily = fonts[0];
    textStyle1.addEventListener('change', function() {
        textShadow = '-1px -1px 0px rgba(0, 0, 0, .7)';
        textColor = '#e6c785';
        strokeColor = '';
    })
=======
    var textColor = 'rgba(0,0,0,1)';
    var strokeColor = 'rgba(0,0,0,1)';
    var strokeWidth = 0.6;
    var colorPicker = document.getElementById('colorPicker');
    var fonts = ["", "Pacifico", "VT323", "Quicksand", "Inconsolata"];
    var textFontFamily = fonts[0];
    var defaultColor = 'rgba(0,0,0,1)';
    const pickr = Pickr.create({
        el: '.color-picker',
        autoReposition: false,
        closeOnScroll: true,
        comparison: false,
        default: defaultColor,
        // showAlways: true,
        theme: 'classic', // or 'monolith', or 'nano'
        components: {
            opacity: true,
            hue: true,
            // Input / output Options
            interaction: {
                hex: true,
                rgba: true,
                // hsla: true,
                // hsva: true,
                // cmyk: true,
                input: true,
                // clear: true,
                // save: true,
            }
        }
    });
    pickr.on('change', (...args) => {
            let color = args[0].toRGBA();
            console.log(color);
            if (textStyle2.classList.contains("-on") == true) {
                defaultColor = `rgba(${color[0]},${color[1]},${color[2]},${color[3]})`;
                textColor = "rgba(0,0,0,0)";
                strokeColor = defaultColor;
            } else {
                defaultColor = `rgba(${color[0]},${color[1]},${color[2]},${color[3]})`;
                strokeColor = 'rgba(0,0,0,0)';
                textColor = defaultColor;
            }
        })
        // textStyle1.addEventListener('change', function() {
        //     textShadow = '-1px -1px 0px rgba(0, 0, 0, .7)';
        //     textColor = '#e6c785';
        //     strokeColor = '';
        // })
>>>>>>> 741dd5b28c6b98bbc3d0da79b2d63fec7f3856c1
    textStyle2.addEventListener('change', function() {
        textStyle2.classList.add("-on");
        strokeWidth = 0.6;
        textColor = 'rgba(0,0,0,0)';
        strokeColor = defaultColor;
        textStyle3.classList.remove("-on");
    })
    textStyle3.addEventListener('change', function() {
        textStyle3.classList.add("-on");
        strokeWidth = 0;
        strokeColor = 'rgba(0,0,0,0)';
        textColor = defaultColor;
        textStyle2.classList.remove("-on");
    })



    fontFamilySelect.addEventListener('change', function() {
        if (fontFamilySelect.value == "Pacifico") {
            textFontFamily = fonts[1];
        } else if (fontFamilySelect.value == "VT323") {
            textFontFamily = fonts[2];
        } else if (fontFamilySelect.value == "Quicksand") {
            textFontFamily = fonts[3];
        } else if (fontFamilySelect.value == "Inconsolata") {
            textFontFamily = fonts[4];
        }
    });
    addTextBtn.addEventListener('click', function() {

        let textContent1 = document.getElementById('textContent1');
        if (textStyle2.classList.contains("-on") == false && textStyle3.classList.contains("-on") == false) {
            alert("請選擇一種文字風格");
            return;
        } else if (fontFamilySelect.value == "default") {
            alert("請選擇一種字體");
            return;
        } else if (textContent1.value == "") {
            alert("請先輸入文字");
            return;
        } else {
            var textWithBackground = new fabric.IText(textContent1.value, {
                fontFamily: textFontFamily,
                fontSize: 24,
                left: 50,
                top: 50,
                fill: textColor,
                strokeWidth: strokeWidth,
                stroke: strokeColor,
                textBackgroundColor: 'rgba(255,255,255,0)',
            }).setControlsVisibility(HideControls);
            canvas.add(textWithBackground);
            textContent1.value = "";
        }
    });



    tagIndex = 1;
    $('.tagImages').click(function() {
        // alert(tagIndex);
        if (tagIndex == 1) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/boneTag_finish.png";
        } else if (tagIndex == 2) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/circleTag_finish.png";
        } else if (tagIndex == 3) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/cloverTag_finish.png";
        } else if (tagIndex == 4) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/fishTag_finish.png";
        } else if (tagIndex == 5) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/footprint_finish.png";
        } else if (tagIndex == 6) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/heartTag_finish.png";
        } else if (tagIndex == 7) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/spadesTag_finish.png";
        } else if (tagIndex == 8) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/starTag_finish.png";
        }
        resizeCanvas();
    });
    step1NextBtn.addEventListener('click', function() {
        if (tagIndex == 1) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/boneTag_finish.png";
        } else if (tagIndex == 2) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/circleTag_finish.png";
        } else if (tagIndex == 3) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/cloverTag_finish.png";
        } else if (tagIndex == 4) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/fishTag_finish.png";
        } else if (tagIndex == 5) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/footprint_finish.png";
        } else if (tagIndex == 6) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/heartTag_finish.png";
        } else if (tagIndex == 7) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/spadesTag_finish.png";
        } else if (tagIndex == 8) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/starTag_finish.png";
        }
        resizeCanvas();
    });

    sliderBtnLeft.addEventListener('click', function() {
        tagIndex--;
        // alert(tagIndex);
        if (tagIndex == 1) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/boneTag_finish.png";
        } else if (tagIndex == 2) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/circleTag_finish.png";
        } else if (tagIndex == 3) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/cloverTag_finish.png";
        } else if (tagIndex == 4) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/fishTag_finish.png";
        } else if (tagIndex == 5) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/footprint_finish.png";
        } else if (tagIndex == 6) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/heartTag_finish.png";
        } else if (tagIndex == 7) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/spadesTag_finish.png";
        } else if (tagIndex == 8) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/starTag_finish.png";
        }
        resizeCanvas();
    });
    sliderBtnRight.addEventListener('click', function() {
        tagIndex++;
        // alert(tagIndex);
        if (tagIndex == 1) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/boneTag_finish.png";
        } else if (tagIndex == 2) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/circleTag_finish.png";
        } else if (tagIndex == 3) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/cloverTag_finish.png";
        } else if (tagIndex == 4) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/fishTag_finish.png";
        } else if (tagIndex == 5) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/footprint_finish.png";
        } else if (tagIndex == 6) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/heartTag_finish.png";
        } else if (tagIndex == 7) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/spadesTag_finish.png";
        } else if (tagIndex == 8) {
            tagImg2.src = "./img/customized_collar/buckle_tag_png/starTag_finish.png";
        }
        resizeCanvas();
    });

    document.getElementById('collarImage1').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/1.png";
        resizeCanvas();
    });
    document.getElementById('collarImage2').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/2.png";
        resizeCanvas();
    });
    document.getElementById('collarImage3').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/3.png";
        resizeCanvas();
    });
    document.getElementById('collarImage4').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/4.png";
        resizeCanvas();
    });
    document.getElementById('collarImage5').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/5.png";
        resizeCanvas();
    });
    document.getElementById('collarImage6').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/6.png";
        resizeCanvas();
    });
    document.getElementById('collarImage7').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/7.png";
        resizeCanvas();
    });
    document.getElementById('collarImage8').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/8.png";
        resizeCanvas();
    });
    document.getElementById('collarImage9').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/9.png";
        resizeCanvas();
    });
    document.getElementById('collarImage10').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/10.png";
        resizeCanvas();
    });
    document.getElementById('collarImage11').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/11.png";
        resizeCanvas();
    });
    document.getElementById('collarImage12_1').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/12_1.png";
        resizeCanvas();
    });
    document.getElementById('collarImage12_2').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/12_2.png";
        resizeCanvas();
    });
    document.getElementById('collarImage13').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/13.png";
        resizeCanvas();
    });
    document.getElementById('collarImage14').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/14.png";
        resizeCanvas();
    });
    document.getElementById('collarImage15').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/15.png";
        resizeCanvas();
    });
    document.getElementById('collarImage16').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/16.png";
        resizeCanvas();
    });
    document.getElementById('collarImage17').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/17.png";
        resizeCanvas();
    });
    document.getElementById('collarImage18').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/18.png";
        resizeCanvas();
    });
    document.getElementById('collarImage19').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/19.png";
        resizeCanvas();
    });
    document.getElementById('collarImage20').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/20.png";
        resizeCanvas();
    });
    document.getElementById('collarImage21').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/21.png";
        resizeCanvas();
    });
    document.getElementById('collarImage22').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/22.png";
        resizeCanvas();
    });
    document.getElementById('collarImage23').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/23.png";
        resizeCanvas();
    });
    document.getElementById('collarImage24').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/24.png";
        resizeCanvas();
    });
    document.getElementById('collarImage25').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/25.png";
        resizeCanvas();
    });
    document.getElementById('collarImage26').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/26.png";
        resizeCanvas();
    });
    document.getElementById('collarImage27').addEventListener('click', function() {
        collarImg.src = "./img/customized_collar/leather_png/27.png";
        resizeCanvas();
    });

    resizeCanvas();

    function resizeCanvas() {
        canvas.setWidth(previewArea.clientWidth);
        canvas.setHeight(previewArea.clientHeight);
        canvas2.width = previewArea.clientWidth; //第二個canvas的寬 = 父層div的寬
        canvas2.height = previewArea.clientHeight; //第二個canvas的高 = 父層div的高
        imgRatio = 1000 / 1000; //圖片寬高比例
        imgWidth = previewArea.clientWidth * 0.7; //圖片寬度參數
        imgHeight = imgWidth * imgRatio; //圖片高度參數
        imgOffsetX = (canvas.width - imgWidth) / 2; //圖片X位移量
        imgOffsetY = (canvas.height - imgHeight) / 2; //圖片Y位移量
        fabricScaleX = (previewArea.clientWidth / 1000) * 0.7;
        fabricScaleY = (previewArea.clientWidth / 1000) * 0.7;
        if (window.innerWidth <= 414) { //RWD
            imgWidth = previewArea.clientWidth * 1;
            imgHeight = imgWidth * imgRatio;
            imgOffsetX = (canvas.width - imgWidth) / 2;
            imgOffsetY = -15;
        } else if (window.innerWidth < 576) {
            imgWidth = previewArea.clientWidth * 1;
            imgHeight = imgWidth * imgRatio;
            imgOffsetX = (canvas.width - imgWidth) / 2;
            imgOffsetY = (canvas.height - imgHeight) / 2;
            fabricScaleX = (previewArea.clientWidth / 1000) * 1;
            fabricScaleY = (previewArea.clientWidth / 1000) * 1;
        } else if (window.innerWidth < 768) {
            imgWidth = previewArea.clientWidth * 0.8;
            imgHeight = imgWidth * imgRatio;
            imgOffsetX = (canvas.width - imgWidth) / 2.2;
            imgOffsetY = (canvas.height - imgHeight) / 2;
            fabricScaleX = (previewArea.clientWidth / 1000) * 0.8;
            fabricScaleY = (previewArea.clientWidth / 1000) * 0.8;
        } else if (window.innerWidth < 992) {
            imgWidth = previewArea.clientWidth * 0.6;
            imgHeight = imgWidth * imgRatio;
            imgOffsetX = (canvas.width - imgWidth) / 2;
            imgOffsetY = (canvas.height - imgHeight) / 2;
            fabricScaleX = (previewArea.clientWidth / 1000) * 0.6;
            fabricScaleY = (previewArea.clientWidth / 1000) * 0.6;
        } else if (window.innerWidth < 1200) {
            imgWidth = previewArea.clientWidth * 1;
            imgHeight = imgWidth * imgRatio;
            imgOffsetX = (canvas.width - imgWidth) / 2;
            imgOffsetY = (canvas.height - imgHeight) / 2;
            fabricScaleX = (previewArea.clientWidth / 1000) * 1;
            fabricScaleY = (previewArea.clientWidth / 1000) * 1;
        } else if (window.innerWidth < 1500) {
            imgWidth = previewArea.clientWidth * 0.9;
            imgHeight = imgWidth * imgRatio;
            imgOffsetX = (canvas.width - imgWidth) / 2;
            imgOffsetY = (canvas.height - imgHeight) / 2;
            fabricScaleX = fabricScaleX = (previewArea.clientWidth / 1000) * 0.9;
            fabricScaleY = fabricScaleY = (previewArea.clientWidth / 1000) * 0.9;
        }

        canvas.clear();
        fabric.Image.fromURL(collarImg.src, function(img) {
            var oImg = img.set({
                left: imgOffsetX,
                top: imgOffsetY,
                angle: 0,
                opacity: 1,
                scaleX: fabricScaleX,
                scaleY: fabricScaleY,
                selectable: false,
                hoverCursor: "default",
            })

            canvas.add(oImg);
        });

        fabric.Image.fromURL(tagImg2.src, function(img) {
            var tagImg = img.set({
                left: imgOffsetX,
                top: imgOffsetY,
                angle: 0,
                opacity: 1,
                scaleX: fabricScaleX,
                scaleY: fabricScaleY,
                selectable: false,
                hoverCursor: "default",
            })

            canvas.add(tagImg);
        });
        // defaultImg = new fabric.Image(collarImg, {
        //     left: imgOffsetX,
        //     top: imgOffsetY,
        //     angle: 0,
        //     opacity: 1,
        //     scaleX: (previewArea.clientWidth / 1000) * 0.7,
        //     scaleY: (previewArea.clientWidth / 1000) * 0.7,
        //     selectable: false,
        //     hoverCursor: "default",
        // });
        // canvas.clear();
        // canvas.add(defaultImg);
        // // 輸出主要圖片----------------------------------------------------------------------
        // collarImg.addEventListener('load', function() {
        //     context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
        // });
        // context.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
        // //-----------------------------------------------------------------------------------



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



        // // 輸出吊牌圖片----------------------------------------------------------------------
        // tagImg2.addEventListener('load', function() {
        //     context.drawImage(tagImg2, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
        // });
        // context.drawImage(tagImg2, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
        // //-----------------------------------------------------------------------------------


        // let textContent1 = document.getElementById('textContent1');
        // var textWithBackground = new fabric.IText(textContent1.value || '點兩下進行編輯', {
        //     fontFamily: 'arial black',
        //     left: imgOffsetX,
        //     top: imgOffsetY,
        //     textBackgroundColor: 'rgba(255,255,255,0)'
        // }).setControlsVisibility(HideControls);
        // canvas.add(textWithBackground);
        // textContent1.value = "";
        // var dataURL = canvas.toDataURL();
        // console.log(dataURL);
    }
    window.addEventListener('resize', resizeCanvas);
}
window.addEventListener('load', dofirst);