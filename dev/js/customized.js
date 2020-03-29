function dofirst() {
    // alert(window.innerWidth);
    WebFont.load({
        google: {
            families: ['DFKai-sb', 'Microsoft JhengHei', 'Arial', 'Pacifico', 'Coming Soon', 'Quicksand', 'Inconsolata']
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
    var tagImg2 = document.getElementById('tagImg2');
    var collarImg = new Image();
    collarImg.src = "./img/customized_collar/leather_png/1.png";
    var collarImg2 = new Image();
    collarImg2.src = "./img/customized_collar/leather_png/real_upper_finish8.png";
    var tagImg1 = new Image();
    tagImg1.src = "./img/customized_collar/leather_png/29_2.png";
    // tagImg2.src = "";

    // var base64Btn = document.getElementById('base64Btn');
    // base64Btn.addEventListener('click', function() {
    //     var canvasbase64 = canvas.toDataURL();
    //     console.log(canvasbase64);
    //     localStorage.setItem("test123", canvasbase64);
    // })
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
        if (canvas.getActiveObject() == null) {
            alert("請先選取一組文字");
        } else {
            canvas.remove(canvas.getActiveObject());
        }

    });
    // var textStyle1 = document.getElementById('textStyle1');
    var textStyle2 = document.getElementById('textStyle2');
    var textStyle3 = document.getElementById('textStyle3');
    var fontFamilySelect = document.getElementById('fontFamilySelect');
    var textColor = 'rgba(0,0,0,1)';
    var strokeColor = 'rgba(0,0,0,1)';
    var strokeWidth = 0.6;
    var colorPicker = document.getElementById('colorPicker');
    var fonts = ['', 'DFKai-sb', 'Microsoft JhengHei', 'Arial', 'Pacifico', 'Coming Soon', 'Quicksand', 'Inconsolata'];
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
        if (fontFamilySelect.value == "DFKai-sb") {
            textFontFamily = fonts[1];
        } else if (fontFamilySelect.value == "Microsoft JhengHei") {
            textFontFamily = fonts[2];
        } else if (fontFamilySelect.value == "Arial") {
            textFontFamily = fonts[3];
        } else if (fontFamilySelect.value == "Pacifico") {
            textFontFamily = fonts[4];
        } else if (fontFamilySelect.value == "Coming Soon") {
            textFontFamily = fonts[5];
        } else if (fontFamilySelect.value == "Quicksand") {
            textFontFamily = fonts[6];
        } else if (fontFamilySelect.value == "Inconsolata") {
            textFontFamily = fonts[7];
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
    $(document).ready(function() {
        $.ajax({
            url: "php/getTagInfo.php",
            type: "post",
            dataType: "json",
            success: function(data) {
                $('.tagImages').click(function() {
                    let showPsn = $(this).attr("psn");
                    for (i = 0; i < data.length; i++) {
                        if (showPsn == i) {
                            tagImg2.src = `./img/customized_collar/new1/${data[i].tagSrc2}`;
                        }
                    }
                    resizeCanvas();
                });
                $('#sliderBtnLeft').click(function() {
                    tagIndex--;
                    for (i = 0; i < data.length; i++) {
                        if (tagIndex == i + 1) {
                            tagImg2.src = `./img/customized_collar/new1/${data[i].tagSrc2}`;
                        }
                    }
                    resizeCanvas();
                })
                $('#sliderBtnRight').click(function() {
                    tagIndex++;
                    for (i = 0; i < data.length; i++) {
                        if (tagIndex == i + 1) {
                            tagImg2.src = `./img/customized_collar/new1/${data[i].tagSrc2}`;
                        }
                    }
                    resizeCanvas();
                })
                $('#step1NextBtn').click(function() {
                    for (i = 0; i < data.length; i++) {
                        if (tagIndex == i + 1) {
                            tagImg2.src = `./img/customized_collar/new1/${data[i].tagSrc2}`;
                        }
                    }
                    resizeCanvas();
                })
            }
        })
    })

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
        canvasRatio = 831 / 1320;
        canvas.setWidth(previewArea.clientWidth);
        canvas.setHeight(previewArea.clientWidth * canvasRatio);
        console.log("寬", previewArea.clientWidth, "px");
        console.log("高", previewArea.clientWidth * canvasRatio, "px");
        canvas2.width = previewArea.clientWidth; //第二個canvas的寬 = 父層div的寬
        canvas2.height = previewArea.clientWidth * canvasRatio; //第二個canvas的高 = 父層div的高
        imgRatio = 1000 / 1000; //圖片寬高比例
        imgWidth = previewArea.clientWidth * 0.75; //圖片寬度參數
        imgHeight = imgWidth * imgRatio; //圖片高度參數
        imgOffsetX = (canvas.width - imgWidth) / 2; //圖片X位移量
        imgOffsetY = (canvas.height - imgHeight) / 2; //圖片Y位移量
        fabricScaleX = (previewArea.clientWidth / 1000) * 0.75;
        fabricScaleY = (previewArea.clientWidth / 1000) * 0.75;
        if (window.innerWidth = 375) { //RWD
            imgWidth = previewArea.clientWidth * 0.75;
            imgHeight = imgWidth * imgRatio;
            imgOffsetX = (canvas.width - imgWidth) / 2;
            imgOffsetY = (canvas.height - imgHeight) / 2;
            fabricScaleX = (previewArea.clientWidth / 1000) * 0.75;
            fabricScaleY = (previewArea.clientWidth / 1000) * 0.75;
        } else if (window.innerWidth = 414) {
            imgWidth = previewArea.clientWidth * 0.75;
            imgHeight = imgWidth * imgRatio;
            imgOffsetX = (canvas.width - imgWidth) / 2;
            imgOffsetY = (canvas.height - imgHeight) / 2;
            fabricScaleX = (previewArea.clientWidth / 1000) * 0.75;
            fabricScaleY = (previewArea.clientWidth / 1000) * 0.75;
        } else if (window.innerWidth < 576) {
            imgWidth = previewArea.clientWidth * 0.75;
            imgHeight = imgWidth * imgRatio;
            imgOffsetX = (canvas.width - imgWidth) / 2;
            imgOffsetY = (canvas.height - imgHeight) / 2;
            fabricScaleX = (previewArea.clientWidth / 1000) * 0.75;
            fabricScaleY = (previewArea.clientWidth / 1000) * 0.75;
        } else if (window.innerWidth < 768) {
            imgWidth = previewArea.clientWidth * 0.75;
            imgHeight = imgWidth * imgRatio;
            imgOffsetX = (canvas.width - imgWidth) / 2;
            imgOffsetY = (canvas.height - imgHeight) / 2;
            fabricScaleX = (previewArea.clientWidth / 1000) * 0.75;
            fabricScaleY = (previewArea.clientWidth / 1000) * 0.75;
        } else if (window.innerWidth < 992) {
            imgWidth = previewArea.clientWidth * 0.75;
            imgHeight = imgWidth * imgRatio;
            imgOffsetX = (canvas.width - imgWidth) / 2;
            imgOffsetY = (canvas.height - imgHeight) / 2;
            fabricScaleX = (previewArea.clientWidth / 1000) * 0.75;
            fabricScaleY = (previewArea.clientWidth / 1000) * 0.75;
        } else if (window.innerWidth < 1200) {
            imgWidth = previewArea.clientWidth * 0.75;
            imgHeight = imgWidth * imgRatio;
            imgOffsetX = (canvas.width - imgWidth) / 2;
            imgOffsetY = (canvas.height - imgHeight) / 2;
            fabricScaleX = (previewArea.clientWidth / 1000) * 0.75;
            fabricScaleY = (previewArea.clientWidth / 1000) * 0.75;
        } else if (window.innerWidth < 1500) {
            imgWidth = previewArea.clientWidth * 0.75;
            imgHeight = imgWidth * imgRatio;
            imgOffsetX = (canvas.width - imgWidth) / 2;
            imgOffsetY = (canvas.height - imgHeight) / 2;
            fabricScaleX = (previewArea.clientWidth / 1000) * 0.75;
            fabricScaleY = (previewArea.clientWidth / 1000) * 0.75;
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

        fabric.Image.fromURL(collarImg2.src, function(img) {
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

        tagImg1.addEventListener('load', function() {
            context2.drawImage(tagImg1, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
        });
        context2.drawImage(tagImg1, imgOffsetX, imgOffsetY, imgWidth, imgHeight);

    }
    window.addEventListener('resize', resizeCanvas);
}
window.addEventListener('load', dofirst);