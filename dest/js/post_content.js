$( document ).ready(function() {
    $( ".heartbutton" ).click(function() {
    	if ($(this).hasClass('active')){
    		$(this).removeClass('active');
    	}else{
      $(this).addClass('active');
    	}
    });
});

//header高度===============================
let headerHeight= document.querySelector("div.headerHeight");
let header= document.querySelector('nav');
headerHeight.style.height= header.offsetHeight + "px";
headerHeight.style.marginBottom= "30px";

//連結私信==================================
let forumMsg= document.getElementById("forumMsg");
forumMsg.addEventListener("click",function(){
	if(member.memId){
        var authorNo= this.classList[0].substr(2);
        if(member.memNo==authorNo){
          alert("此作者為您本人");
        }else{
          $.ajax({
            url: './php/donationMsg.php',
            type: 'POST',
            data: {getMemNo: authorNo},
            success(data){
              if(data.indexOf("error")==-1){
                sessionStorage.setItem("now-on",authorNo);
                location.href="./message.html";
              }else{
                alert("操作失敗");
              }
            },
            error(data){
              alert(data);
            }
          });
        }
    }else{
      alert("請先登入");
    }
});