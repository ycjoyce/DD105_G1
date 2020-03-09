'use strict';

var blobCursor = function () {
    var CURSOR = document.querySelector('#cursorBlob');
    var LINKS = document.querySelectorAll('.nav__link');
    var setCursorPos = function setCursorPos(e) {
        var posX = e.pageX,
            posY = e.pageY;

        CURSOR.style.top = posY - CURSOR.offsetHeight / 2 + 'px';
        CURSOR.style.left = posX - CURSOR.offsetWidth / 2 + 'px';
    };
    document.addEventListener('mousemove', setCursorPos);

    var setCursorHover = function setCursorHover() {
        return CURSOR.style.transform = 'scale(2.5)';
    };
    var removeCursorHover = function removeCursorHover() {
        return CURSOR.style.transform = '';
    };
    LINKS.forEach(function (link) {
        return link.addEventListener('mouseover', setCursorHover);
    });
    LINKS.forEach(function (link) {
        return link.addEventListener('mouseleave', removeCursorHover);
    });
}();

// $(document).mousemove(function(e){
//     $('#cursorBlob').css({
//         left: e.clientX+15,
//         top: e.clientY+15,
//     });
// });