let now= 1;
let prevBtn= document.querySelector('div.carousel_donation div.changePage button.to_left');
let nextBtn= document.querySelector('div.carousel_donation div.changePage button.to_right');
let carouselArea= document.querySelector('section.donation div.rightSide div.carousel_donation div.card');
let changeArea= document.querySelector('section.donation div.rightSide div.carousel_donation div.changePage');
let timerId;

function dogAniSize(){
    let dogAnimate= document.querySelector('section.donation div.dogAnimate');
    let upImg= dogAnimate.querySelector("img");
    dogAnimate.style.height= upImg.offsetHeight + "px";
}
dogAniSize();
window.addEventListener("resize",dogAniSize);


function donationCarousel(){
    
    var bigImg= document.querySelector('div.carousel_donation div.img img');
    var projectNum= document.querySelector('div.carousel_donation div.card span.projectNum');
    var date= document.querySelector('div.carousel_donation div.card span.date');
    var cardTitle= document.querySelector('div.carousel_donation div.card h4 a');
    var goal= document.querySelector('div.carousel_donation div.card div.showNum div.cur span.peoNum span');
    var complete= document.querySelector('div.carousel_donation div.card div.showNum div.dogAnimate span');
    var changeNum= document.querySelector('div.carousel_donation div.changePage span');
    var progressBar= document.querySelector('div.carousel_donation div.progress_bar');

    var leftCards= document.querySelectorAll('section.donation div.leftSide div.card');
    var goalVal= leftCards[now-1].querySelector("div.text input[name='goal']").value;
    var curVal= leftCards[now-1].querySelector("div.text input[name='cur']").value;
    var comVal= Math.floor(curVal/goalVal*100)+"%";
    var wave= document.getElementById("wave");
    wave.style.bottom= Math.floor(curVal/goalVal*100)*0.8-80 +"%";

    projectNum.innerText= leftCards[now-1].querySelector('div.text span:first-child').innerText;
    date.innerText= leftCards[now-1].querySelector('div.text span.date').innerText;
    cardTitle.innerText= leftCards[now-1].querySelector('div.text h4').innerText;
    goal.innerText= leftCards[now-1].querySelector("div.text input[name='goal']").value;
    complete.innerText= comVal;
    changeNum.innerText= `0${now}/03`;

    // console.log(now);
    // console.log(projectNum.innerText);
    // console.log(date.innerText);
    // console.log(cardTitle.innerText);
    // console.log(goal.innerText);
    // console.log(complete.innerText);





    for(let i=1; i<=3; i++){
        if(i!=now){
            progressBar.querySelector(`span:nth-child(${i})`).classList.remove("on");
            leftCards[i-1].classList.remove("on");
        }
        else{
            progressBar.querySelector(`span:nth-child(${i})`).classList.add("on");
            leftCards[i-1].classList.add("on");
        }
    }
    //換大圖
    bigImg.src=`img/donation_card_${now}.jpg`;
}

donationCarousel();

nextBtn.onclick=function(){
    //箭頭動畫
    var timer;
    nextBtn.classList.add("active");
    clearTimeout(timer);
    timer= setTimeout(function(){
        nextBtn.classList.remove("active");
    },300);

    //小字轉場
    var projectNum= document.querySelector('div.carousel_donation div.card span.projectNum');
    var date= document.querySelector('div.carousel_donation div.card span.date');
    projectNum.classList.add("active");
    projectNum.addEventListener("animationend",function(){
        projectNum.classList.remove("active");
    });
    date.classList.add("active");
    date.addEventListener("animationend",function(){
        date.classList.remove("active");
    });

    //標題轉場
    var cardTitle= document.querySelector('div.carousel_donation div.card h4');
    cardTitle.classList.add("active");
    cardTitle.addEventListener("animationend",function(){
        cardTitle.classList.remove("active");
    });

    //按鈕轉場
    var greenBtn= document.querySelector('div.carousel_donation div.card a.btn.darkgreen');
    var btnTimer;
    greenBtn.classList.add("active");
    clearTimeout(btnTimer);
    btnTimer= setTimeout(function(){
        greenBtn.classList.remove("active");
    },500);

    //金額轉場
    var goal= document.querySelector('div.carousel_donation div.card div.showNum div.cur span.peoNum span');
    goal.classList.add("active");
    goal.addEventListener("animationend",function(){
        goal.classList.remove("active");
    });

    if(now+1<=3)
        now++;
    else
        now=1;
    donationCarousel();
};

prevBtn.onclick=function(){
    //箭頭動畫
    var timer;
    prevBtn.classList.add("active");
    clearTimeout(timer);
    timer= setTimeout(function(){
        prevBtn.classList.remove("active");
    },300);

    //小字轉場
    var projectNum= document.querySelector('div.carousel_donation div.card span.projectNum');
    var date= document.querySelector('div.carousel_donation div.card span.date');
    projectNum.classList.add("active");
    projectNum.addEventListener("animationend",function(){
        projectNum.classList.remove("active");
    });
    date.classList.add("active");
    date.addEventListener("animationend",function(){
        date.classList.remove("active");
    });

    //標題轉場
    var cardTitle= document.querySelector('div.carousel_donation div.card h4');
    cardTitle.classList.add("active");
    cardTitle.addEventListener("animationend",function(){
        cardTitle.classList.remove("active");
    });

    //按鈕轉場
    var greenBtn= document.querySelector('div.carousel_donation div.card a.btn.darkgreen');
    var btnTimer;
    greenBtn.classList.add("active");
    clearTimeout(btnTimer);
    btnTimer= setTimeout(function(){
        greenBtn.classList.remove("active");
    },500);

    //金額轉場
    var goal= document.querySelector('div.carousel_donation div.card div.showNum div.cur span.peoNum span');
    goal.classList.add("active");
    goal.addEventListener("animationend",function(){
        goal.classList.remove("active");
    });

    if(now-1>=1)
        now--;
    else
        now=3;
    donationCarousel();
};

function play(){
    timerId= setInterval(function(){
        nextBtn.onclick();
    },8000);
}
play();

function stop(){
    clearInterval(timerId);
}

carouselArea.addEventListener("mouseout",play);
carouselArea.addEventListener("mouseover",stop);
changeArea.addEventListener("mouseout",play);
changeArea.addEventListener("mouseover",stop);


let clickBar= document.querySelector('div.carousel_donation div.progress_bar');

for(let i=1; i<=3; i++){
    clickBar.querySelector(`span:nth-child(${i})`).onclick=function(){
        //小字轉場
        var projectNum= document.querySelector('div.carousel_donation div.card span.projectNum');
        var date= document.querySelector('div.carousel_donation div.card span.date');
        projectNum.classList.add("active");
        projectNum.addEventListener("animationend",function(){
            projectNum.classList.remove("active");
        });
        date.classList.add("active");
        date.addEventListener("animationend",function(){
            date.classList.remove("active");
        });

        //標題轉場
        var cardTitle= document.querySelector('div.carousel_donation div.card h4');
        cardTitle.classList.add("active");
        cardTitle.addEventListener("animationend",function(){
            cardTitle.classList.remove("active");
        });

        //按鈕轉場
        var greenBtn= document.querySelector('div.carousel_donation div.card a.btn.darkgreen');
        var btnTimer;
        greenBtn.classList.add("active");
        clearTimeout(btnTimer);
        btnTimer= setTimeout(function(){
            greenBtn.classList.remove("active");
        },500);

        //金額轉場
        var goal= document.querySelector('div.carousel_donation div.card div.showNum div.cur span.peoNum span');
        goal.classList.add("active");
        goal.addEventListener("animationend",function(){
            goal.classList.remove("active");
        });
        
        now= i;
        donationCarousel();
    }
}
