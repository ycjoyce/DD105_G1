function cancelBlack(e){
    $.ajax({
        url: './php/cancelBlack.php',
        data: {blackMemNo:this.classList[2].substr(2)},
        type: 'POST',
        success(data){
            if(data.indexOf("error")==-1){
                alert("已成功解除一筆黑名單");
                document.querySelector("div.blacklist_content").innerHTML="";
                showBlacklist();
            }else{
                alert("解除失敗，請再試一次");
            }
        },
        error(data){
            alert("it's me");
        },
    });
}

function showBlacklist(){
    var xhr= new XMLHttpRequest();
    var url= "./php/showBlacklist.php";
    xhr.open("GET",url,true);
    xhr.send(null);
    xhr.onload= function(){
        if(xhr.status==200){
            var container= document.querySelector("div.blacklist_content");
            if(xhr.responseText.indexOf("notFound")!=-1){
                // alert("無黑名單");
                container.style.display="block";
                container.innerHTML=`
                <div class="withoutBlack">
                    <div>
                        <img src="./img/fukidashi04.png" class="bubble">
                        <p>目前尚無<br>黑名單</p>
                    </div>
                    <img src="./img/animal_cat.png" class="cat">
                </div>`;
            }else{
                var res= JSON.parse(xhr.responseText);
                container.style.display="flex";
                
                //DOM
                for(var i=0; i<res.length; i++){
                    var divCard= document.createElement("div");
                    divCard.className= "card";
                    container.insertBefore(divCard,container.firstChild);
        
                    var divImg= document.createElement("div");
                    // var img= document.createElement("img");
                    divImg.style.backgroundImage= `url(./img/memImg/${res[i].memPic})`;
                    // divImg.appendChild(img);
                    divCard.appendChild(divImg);
    
                    var span= document.createElement("span");
                    span.innerText= res[i].memName;
                    divCard.appendChild(span);
    
                    var button= document.createElement("button");
                    button.className= `updatebtn BLbtn No${res[i].memNo}`;
                    button.innerText= "解除黑名單";
                    divCard.appendChild(button);
    
                    var cancelBtn= document.querySelector(`.updatebtn.BLbtn.No${res[i].memNo}`);
                    cancelBtn.addEventListener("click",cancelBlack);
                }
            }
        }else{
            alert(xhr.status);
        }
    }
}
showBlacklist();