function dofirst() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var backgroundCanvas = document.getElementById('backgroundCanvas');
    var context2 = backgroundCanvas.getContext('2d');
    var previewArea = document.getElementById('preview_area');
    var collarImg = document.getElementById('collarImg');
    var collarTagImg1 = document.getElementById('collarTagImg1');



    resizeCanvas();

    function resizeCanvas() {
        canvas.width = previewArea.clientWidth;
        canvas.height = previewArea.clientHeight;
        backgroundCanvas.width = previewArea.clientWidth;
        backgroundCanvas.height = previewArea.clientHeight;
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
            imgOffsetY = (canvas.height - imgHeight) / 2.5;
        }

        context2.drawImage(collarImg, imgOffsetX, imgOffsetY, imgWidth, imgHeight);
        // context.drawImage(collarTagImg1, imgOffsetX, imgOffsetY, imgWidth, imgHeight);

        // document.querySelector("#chkbox")
        //     .addEventListener('click', function(e) {
        //         console.log(e.target.checked);
        //         if (e.target.checked == false) {
        //             return false;
        //         } else if (e.target.checked == true) {
        //             canvasZoomIn();
        //             resizeCanvas();
        //             canvas.style.cursor = "crosshair";
        //         }
        //     });

        // function canvasZoomIn() {

        //     // 图片被放大区域的中心点，也是放大镜的中心点
        //     var centerPoint = {};
        //     // 图片被放大区域的半径
        //     var originalRadius = 300;
        //     // 图片被放大区域
        //     var originalRectangle = {};
        //     // 放大倍数
        //     var scale = 1.4;
        //     // 放大后区域
        //     var scaleGlassRectangle;

        //     centerPoint.x = 200;
        //     centerPoint.y = 200;

        //     mouseEnter();
        //     mouseMove();
        //     mouseLeave();
        //     touchStart();
        //     touchMove();
        //     touchEnd();
        //     draw();

        //     function drawBackGround() {
        //         resizeCanvas();
        //     }

        //     function calOriginalRectangle(point) {
        //         originalRectangle.x = point.x - originalRadius;
        //         originalRectangle.y = point.y - originalRadius;
        //         originalRectangle.width = originalRadius * 2;
        //         originalRectangle.height = originalRadius * 2;
        //     }

        //     function drawMagnifyingGlass() {

        //         if (window.innerWidth < 576) {
        //             originalRadius = 150;
        //         } else if (window.innerWidth < 768) {
        //             originalRadius = 150;
        //         } else if (window.innerWidth < 992) {
        //             originalRadius = 150;
        //         } else if (window.innerWidth < 1200) {
        //             originalRadius = 200;
        //         } else if (window.innerWidth < 1500) {
        //             originalRadius = 250;
        //         } else {
        //             originalRadius = 250;
        //         }

        //         scaleGlassRectangle = {
        //             x: centerPoint.x - originalRectangle.width * scale / 2,
        //             y: centerPoint.y - originalRectangle.height * scale / 2,
        //             width: originalRectangle.width * scale,
        //             height: originalRectangle.height * scale
        //         };
        //         context.save();
        //         context.beginPath();
        //         context.arc(centerPoint.x, centerPoint.y, originalRadius, 0, Math.PI * 2, false);
        //         context.clip();

        //         context.drawImage(canvas,
        //             originalRectangle.x, originalRectangle.y,
        //             originalRectangle.width, originalRectangle.height,
        //             scaleGlassRectangle.x, scaleGlassRectangle.y,
        //             scaleGlassRectangle.width, scaleGlassRectangle.height
        //         );
        //         context.restore();

        //         context.beginPath();
        //         var gradient = context.createRadialGradient(
        //             centerPoint.x, centerPoint.y, originalRadius - 5,
        //             centerPoint.x, centerPoint.y, originalRadius);
        //         gradient.addColorStop(0, 'rgba(0,0,0,0.2)');
        //         gradient.addColorStop(0.80, 'silver');
        //         gradient.addColorStop(0.90, 'silver');
        //         gradient.addColorStop(1.0, 'rgba(150,150,150,0.9)');

        //         context.strokeStyle = gradient;
        //         context.lineWidth = 5;
        //         context.arc(centerPoint.x, centerPoint.y, originalRadius, 0, Math.PI * 2, false);
        //         context.stroke();
        //     }

        //     function draw() {
        //         context.clearRect(0, 0, canvas.width, canvas.height);
        //         drawBackGround();
        //         calOriginalRectangle(centerPoint);
        //         drawMagnifyingGlass();
        //     }

        //     function touchStart() {
        //         canvas.ontouchstart = function(e) {
        //             e.preventDefault();
        //             draw();
        //         };
        //     }

        //     function touchMove() {
        //         canvas.ontouchmove = function(e) {
        //             e.preventDefault();
        //             centerPoint = windowToCanvas(e.clientX, e.clientY);
        //             console.log(centerPoint);
        //             draw();
        //         };
        //     }

        //     function touchEnd() {
        //         canvas.ontouchEnd = function(e) {
        //             e.preventDefault();
        //             context.clearRect(0, 0, canvas.width, canvas.height);
        //             drawBackGround();
        //         };
        //     }

        //     function mouseEnter() {
        //         canvas.onmouseenter = function(e) {
        //             e.preventDefault();
        //             context.clearRect(0, 0, canvas.width, canvas.height);
        //             drawBackGround();

        //         };
        //     }

        //     function mouseMove() {
        //         canvas.onmousemove = function(e) {
        //             centerPoint = windowToCanvas(e.clientX, e.clientY);
        //             draw();
        //         };
        //     }

        //     function mouseLeave() {
        //         canvas.onmouseleave = function(e) {
        //             e.preventDefault();
        //             context.clearRect(0, 0, canvas.width, canvas.height);
        //             drawBackGround();
        //         };
        //     }

        //     function windowToCanvas(x, y) {
        //         var bbox = canvas.getBoundingClientRect();
        //         return {
        //             x: x - bbox.left,
        //             y: y - bbox.top
        //         };
        //     }
        // }




    }
    window.addEventListener('resize', resizeCanvas);
}
window.addEventListener('load', dofirst);