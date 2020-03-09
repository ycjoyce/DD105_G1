//hover會員圖片
let memImg= document.querySelector('li.memZone div div.memPic');
let memZoneUl= document.querySelector('li.memZone ul.memZone');
memImg.addEventListener("click",function(){
    memZoneUl.classList.toggle("open");
})


//點擊我的信箱
let messageBtn= document.querySelector('nav div ul li div.message');
messageBtn.addEventListener("click",function(){
    location.href= "message.html";
});