let member;

//會員判斷
function getMember(){
    var xhr= new XMLHttpRequest();
    var url= "./php/checkMem.php";
    xhr.open("GET",url,true);
    xhr.send(null);
    
    xhr.onload=function (){
        if( xhr.status == 200 ){
            member= JSON.parse(xhr.responseText);
            if(member.memId){
                var header = document.getElementById("header");
                header.innerHTML=`
                <nav class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div class="col-xl-8 col-lg-9 col-md-11 col-sm-12 container">
                        <h1>
                            <a href="./index.html">
                                <img src="./img/logo-wide.png" alt="logo">
                            </a>
                        </h1>
                        <ul class="col-xl-9 col-lg-9 col-md-9">
                            <li><a href="./map.html">浪浪在哪裡</a></li>
                            <li><a href="./donation.html">愛心助浪浪</a></li>
                            <li><a href="./customized.html">客製化項圈</a></li>
                            <li><a href="./post_article_region.html">毛孩交流區</a></li>
                            <li><a href="./aboutus.html">關於我們</a></li>
                            <li class="rwd"><a href="./memberCenter.html">會員中心</a></li>
                            <li class="rwd"><a href="./message.html">我的信箱</a></li>
                            <li class="rwd"><a href="./index.html">登出</a></li>
                            <li class="memZone">
                                <div>
                                    <div class="memPic"></div>
                                    <div class="message">
                                        <span class="unread">2</span>
                                    </div>
                                </div>
                                <ul class="memZone">
                                    <li><a href="./memberCenter.html">會員中心</a></li>
                                    <li><a id="signOut" onclick="signOut()">登出</a></li>
                                </ul>
                            </li>
                        </ul>
                        <button class="hamburger hamburger--spring" type="button">
                            <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </nav>
                `;
                var script= document.getElementById("script");
                var body= document.querySelector('body');
                var headerScript= document.createElement("script");
                headerScript.src="./js/memberHeader.js";
                body.insertBefore(headerScript,script);
                var memImgSrc= member.memPic;
                var memImg= document.querySelector('li.memZone div div.memPic');
                memImg.style.backgroundImage=`url("./img/memImg/${memImgSrc}")`;
            }
        
        }else{
            alert(xhr.status);
        }
    }
}
getMember();

//會員登出
function signOut(){
    var xhr= new XMLHttpRequest();
    var url= "./php/signOut.php";
    xhr.open("GET",url,true);
    xhr.send(null);

    xhr.onload=function (){
        if(xhr.status==200){
            var header = document.getElementById("header");
                header.innerHTML=`
                <nav class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div class="container col-xl-8 col-lg-9 col-md-11 col-sm-12">
                        <h1>
                            <a href="./index.html">
                                <img src="./img/logo-wide.png" alt="logo">
                            </a>
                        </h1>
                        <ul class="col-xl-9 col-lg-9 col-md-9">
                            <li><a href="./map.html">浪浪在哪裡</a></li>
                            <li><a href="./donation.html">愛心助浪浪</a></li>
                            <li><a href="./customized.html">客製化項圈</a></li>
                            <li><a href="./post_article_region.html">毛孩交流區</a></li>
                            <li><a href="./aboutus.html">關於我們</a></li>
                            <li><a class="login" href="./login.html">登入 / 註冊</a></li>
                        </ul>
                        <button class="hamburger hamburger--spring" type="button">
                            <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </nav>
                `;

                
                if(location.pathname.split("/").pop()=="message.html"||location.pathname.split("/").pop()=="memberCenter.html"){
                    location.href="./index.html";
                }
                
        }else{
            alert( xhr.status );
        }
    }
}