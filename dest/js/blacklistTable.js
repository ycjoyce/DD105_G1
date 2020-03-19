function cancelBlack(e){
    // alert(this.className);
    var blackMemNo= this.classList[2].substr(2);
    // alert(blackMemNo);
    var xhr= new XMLHttpRequest();
    var url= "./php/cancelBlack.php";
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    var data_info= `blackMemNo=${blackMemNo}`;
    xhr.send(data_info);

    if(xhr.status==200){
        
            alert("已成功解除一筆黑名單");
            document.querySelector("div.blacklist_content").innerHTML="";
            // showBlacklist();
        
    }else{
        alert("it's me");
    }
}

function showBlacklist(){
    var xhr= new XMLHttpRequest();
    var url= "./php/showBlacklist.php";
    xhr.open("GET",url,true);
    xhr.send(null);
    xhr.onload= function(){
        if(xhr.status==200){
            if(xhr.responseText.indexOf("notFound")!=-1){
                alert("無黑名單");
            }else{
                var res= JSON.parse(xhr.responseText);
                console.log(res);
                //DOM
                for(var i=0; i<res.length; i++){
                    var container= document.querySelector("div.blacklist_content");
                    var divCard= document.createElement("div");
                    divCard.className= "card";
                    container.insertBefore(divCard,container.firstChild);
        
                    var divImg= document.createElement("div");
                    var img= document.createElement("img");
                    img.src= `./img/memImg/${res[i].memPic}`;
                    divImg.appendChild(img);
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