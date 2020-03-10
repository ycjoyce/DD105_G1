//hover會員圖片
// let memberPic= document.querySelector('li.memZone div div.memPic');
// let memZoneUl= document.querySelector('li.memZone ul.memZone');
document.querySelector('li.memZone div div.memPic').addEventListener("click",function(){
    document.querySelector('li.memZone ul.memZone').classList.toggle("open");
})


//點擊我的信箱
// let messageBtn= document.querySelector('nav div ul li div.message');
document.querySelector('nav div ul li div.message').addEventListener("click",function(){
    location.href= "message.html";
});