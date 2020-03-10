"use strict";

//私信、會員中心用這支
//會員判斷
function getMember() {
    var xhr = new XMLHttpRequest();
    var url = "./php/checkMem.php";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var data_info = "";
    xhr.send(data_info);

    xhr.onload = function () {
        if (xhr.status == 200) {
            if (xhr.responseText.indexOf("true") != -1) {
                console.log(xhr.responseText);
                var header = document.getElementById("header");
                header.innerHTML = "\n                <nav class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\n                    <div class=\"col-xl-8 col-lg-9 col-md-11 col-sm-12 container\">\n                        <h1>\n                            <a href=\"./index.html\">\n                                <img src=\"./img/logo-wide.png\" alt=\"logo\">\n                            </a>\n                        </h1>\n                        <ul class=\"col-xl-9 col-lg-9 col-md-9\">\n                            <li><a href=\"./map.html\">\u6D6A\u6D6A\u5728\u54EA\u88E1</a></li>\n                            <li><a href=\"./donation.html\">\u611B\u5FC3\u52A9\u6D6A\u6D6A</a></li>\n                            <li><a href=\"./customized.html\">\u5BA2\u88FD\u5316\u9805\u5708</a></li>\n                            <li><a href=\"./post_article_region.html\">\u6BDB\u5B69\u4EA4\u6D41\u5340</a></li>\n                            <li><a href=\"./aboutus.html\">\u95DC\u65BC\u6211\u5011</a></li>\n                            <li class=\"rwd\"><a href=\"./memberCenter.html\">\u6703\u54E1\u4E2D\u5FC3</a></li>\n                            <li class=\"rwd\"><a href=\"./message.html\">\u6211\u7684\u4FE1\u7BB1</a></li>\n                            <li class=\"rwd\"><a href=\"./index.html\">\u767B\u51FA</a></li>\n                            <li class=\"memZone\">\n                                <div>\n                                    <div class=\"memPic\"></div>\n                                    <div class=\"message\">\n                                        <span class=\"unread\">2</span>\n                                    </div>\n                                </div>\n                                <ul class=\"memZone\">\n                                    <li><a href=\"./memberCenter.html\">\u6703\u54E1\u4E2D\u5FC3</a></li>\n                                    <li><a id=\"signOut\" onclick=\"signOut()\">\u767B\u51FA</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                        <button class=\"hamburger hamburger--spring\" type=\"button\">\n                            <span class=\"hamburger-box\">\n                            <span class=\"hamburger-inner\"></span>\n                            </span>\n                        </button>\n                    </div>\n                </nav>\n                ";
                var script = document.getElementById("script");
                var body = document.querySelector('body');
                var headerScript = document.createElement("script");
                headerScript.src = "./js/memberHeader.js";
                body.insertBefore(headerScript, script);
                var memImgSrc = xhr.responseText.split("|")[5];
                var memImg = document.querySelector('li.memZone div div.memPic');
                memImg.style.backgroundImage = "url(\"./img/memImg/" + memImgSrc + "\")";
            }
        }
    };
}
getMember();

//會員登出
function signOut(e) {
    // e.preventDefault();
    var xhr = new XMLHttpRequest();
    var url = "./php/signOut.php";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var data_info = "";
    xhr.send(data_info);

    xhr.onload = function () {
        if (xhr.status == 200) {
            var header = document.getElementById("header");
            header.innerHTML = "\n                <nav class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\n                    <div class=\"container col-xl-8 col-lg-9 col-md-11 col-sm-12\">\n                        <h1>\n                            <a href=\"./index.html\">\n                                <img src=\"./img/logo-wide.png\" alt=\"logo\">\n                            </a>\n                        </h1>\n                        <ul class=\"col-xl-9 col-lg-9 col-md-9\">\n                            <li><a href=\"./map.html\">\u6D6A\u6D6A\u5728\u54EA\u88E1</a></li>\n                            <li><a href=\"./donation.html\">\u611B\u5FC3\u52A9\u6D6A\u6D6A</a></li>\n                            <li><a href=\"./customized.html\">\u5BA2\u88FD\u5316\u9805\u5708</a></li>\n                            <li><a href=\"./post_article_region.html\">\u6BDB\u5B69\u4EA4\u6D41\u5340</a></li>\n                            <li><a href=\"./aboutus.html\">\u95DC\u65BC\u6211\u5011</a></li>\n                            <li><a class=\"login\" href=\"./login.html\">\u767B\u5165 / \u8A3B\u518A</a></li>\n                        </ul>\n                        <button class=\"hamburger hamburger--spring\" type=\"button\">\n                            <span class=\"hamburger-box\">\n                            <span class=\"hamburger-inner\"></span>\n                            </span>\n                        </button>\n                    </div>\n                </nav>\n                ";
            location.href = "./index.html";
        } else {
            alert(xhr.status);
        }
    };
};