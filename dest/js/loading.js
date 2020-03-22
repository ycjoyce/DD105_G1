let nowLoading= 1;

function dogRunning(){
    var loading= document.getElementById("loading");
    var dogArea= document.querySelector("#loading div.img");
    dogArea.style.backgroundImage= `url(../img/loading${nowLoading}.png)`;
    // console.log(nowLoading);
}
dogRunning();

function playLoading(){
    timerLoading= setInterval(function(){
        if(nowLoading+1>7){
            nowLoading=1;
        }else{
            nowLoading++;
        }
        dogRunning();
    },800);
}
playLoading();



