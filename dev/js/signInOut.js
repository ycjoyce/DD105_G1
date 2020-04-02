let member;
//member.memNo --- 登入會員編號
//member.memId --- 登入會員帳號
//member.memName --- 登入會員暱稱
//member.memPsw --- 登入會員密碼
//member.memPic --- 登入會員圖片
//member.memPoint --- 登入會員紅利點數
//member.memStatus --- 登入會員狀態
//member.memTagNo --- 登入會員解鎖吊牌編號

//判斷所在頁面
function checkPage(){
    if(location.pathname.split("/").pop()=="map.html"){
        document.getElementById("navMap").classList.add("active");
    }else if(location.pathname.split("/").pop()=="donation.html"){
        document.getElementById("navDonate").classList.add("active");
    }else if(location.pathname.split("/").pop()=="raisedonation.html"){
        document.getElementById("navDonate").classList.add("active");
    }else if(location.pathname.match("showproject.php")){
        document.getElementById("navDonate").classList.add("active");
    }else if(location.pathname.split("/").pop()=="customized.html"){
        document.getElementById("navCus").classList.add("active");
    }else if(location.pathname.split("/").pop()=="post_article_region.php"){
        document.getElementById("navPost").classList.add("active");
    }else if(location.pathname.match("post_content.php")){
        document.getElementById("navPost").classList.add("active");
    }else if(location.pathname.split("/").pop()=="aboutus.html"){
        document.getElementById("navAbout").classList.add("active");
    }else if(location.pathname.split("/").pop()=="login.html"){
        document.getElementById("navLogin").classList.add("active");
    }
    
}
checkPage();

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
                <nav class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-ss-12 col-mini-12">
                    <div class="col-xl-8 col-lg-9 col-md-11 col-sm-12  col-ss-12 col-mini-12 container">
                        <h1>
                            <a href="./main.html">
                                <img src="./img/logo-wide.png" alt="logo">
                            </a>
                        </h1>
                        <ul class="col-xl-9 col-lg-9 col-md-9">
                            <li><a href="./map.html" id="navMap">浪浪在哪裡</a></li>
                            <li><a href="./donation.html" id="navDonate">愛心助浪浪</a></li>
                            <li><a href="./customized.html" id="navCus">客製化項圈</a></li>
                            <li><a href="./post_article_region.php" id="navPost">毛孩交流區</a></li>
                            <li><a href="./aboutus.html" id="navAbout">關於我們</a></li>
                            <li class="rwd"><a href="./memberCenter.html" id="navMem">會員中心</a></li>
                            <li class="rwd"><a href="./message.html" id="navMsg">我的信箱</a></li>
                            <li class="rwd"><a onclick="signOut()" class="login">登出</a></li>
                            <li class="memZone">
                                <div>
                                    <div class="memPic" id="memPic"></div>
                                    <div class="message">
                                        <span id="headerUnread" class="unread"></span>
                                    </div>
                                </div>
                                <ul class="memZone" id="togglePanel">
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

                //漢堡選單
                $("button.hamburger").on("click", function(){
                    $(this).toggleClass("is-active");
                    $("nav ul").slideToggle();
                });
                var script= document.getElementById("script");
                var body= document.querySelector('body');
                var headerScript= document.createElement("script");
                headerScript.src="./js/memberHeader.js";
                body.insertBefore(headerScript,script);
                var memImgSrc= member.memPic;
                var memImg= document.querySelector('li.memZone div div.memPic');
                memImg.style.backgroundImage=`url("./img/memImg/${memImgSrc}")`;
                
                checkPage();

                var headerUnread= document.getElementById("headerUnread");
                var xhr2= new XMLHttpRequest();
                var url2= "./php/headerUnread.php";
                xhr2.open("POST",url2,true);
                xhr2.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                var data_info2= `memNo=${member.memNo}`;
                xhr2.send(data_info2);
                
                xhr2.onload=function(){
                    if(xhr2.status==200){
                        if(xhr2.responseText!=0){
                            headerUnread.style.display="inline-block";
                            headerUnread.innerText= xhr2.responseText;
                        }else{
                            headerUnread.style.display="none";
                        }
                    }else{
                        alert(xhr2.status);
                    }
                }
            }
        }else{
            alert(xhr.status);
        }
    }
}
getMember();

function customizedSignIn() {
    var signInFirstBlock = document.getElementById('signInFirstBlock');
    var memPoints = member.memPoint;
    signInFirstBlock.style.display = "flex";
    memberPoint.style.display = "none"; 
}

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
                <nav class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-ss-12 col-mini-12">
                    <div class="container col-xl-8 col-lg-9 col-md-11 col-sm-12 col-ss-12 col-mini-12">
                        <h1>
                            <a href="./main.html">
                                <img src="./img/logo-wide.png" alt="logo">
                            </a>
                        </h1>
                        <ul class="col-xl-9 col-lg-9 col-md-9">
                            <li><a href="./map.html" id="navMap">浪浪在哪裡</a></li>
                            <li><a href="./donation.html" id="navDonate">愛心助浪浪</a></li>
                            <li><a href="./customized.html" id="navCus">客製化項圈</a></li>
                            <li><a href="./post_article_region.php" id="navPost">毛孩交流區</a></li>
                            <li><a href="./aboutus.html" id="navAbout">關於我們</a></li>
                            <li><a class="login" href="./login.html" id="navLogin">登入 / 註冊</a></li>
                        </ul>
                        <button class="hamburger hamburger--spring" type="button">
                            <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </nav>
                `;
                sessionStorage.clear();
                checkPage();
                //漢堡選單
                $("button.hamburger").on("click", function(){
                    $(this).toggleClass("is-active");
                    $("nav ul").slideToggle();
                });
                if(location.pathname.split("/").pop()=="customized.html"){
                    customizedSignIn();
                }
                if(location.pathname.split("/").pop()=="message.html"||location.pathname.split("/").pop()=="memberCenter.html"){
                    location.href="./main.html";
                }
        }else{
            alert( xhr.status );
        }
    }
}
