let memId= document.getElementById("memId");
let memName= document.getElementById("memName");
let memPsw= document.getElementById("memPsw");
let nowPsw= document.getElementById("nowPsw");
let newPsw= document.getElementById("newPsw");
let checkPsw= document.getElementById("checkPsw");
let memPoint= document.getElementById("memPoint");
let memPic= document.getElementById("memPic");
let showPsw= document.getElementById("showPsw");
let submitbtn= document.querySelector("div.submitbtn a.btn");
let upload_img= document.getElementById("upload_img");

//顯示資料
function getMemInfo(){
    $.ajax({
        url: './php/memInfoTable.php',
        type: 'GET',
        success(data){
            if(data.indexOf("error")==-1){
                var memInfo= JSON.parse(data);
                memId.innerText= memInfo.memId;
                memName.value= memInfo.memName;
                memPsw.value= memInfo.memPsw;
                memPoint.innerText= memInfo.memPoint;
                memPic.style.backgroundImage= `url(./img/memImg/${memInfo.memPic})`;
            }else{
                alert("error");
            }
        },
        error(data){
            alert(data);
        }
    });
}
getMemInfo();

//修改密碼按鈕
showPsw.addEventListener("click",function(){
    var clickToShow= document.querySelectorAll(".clickToShow");
    for(var i=0; i<clickToShow.length; i++){
        clickToShow[i].classList.toggle("show");
    }
});

//預覽圖片
upload_img.addEventListener("change",function(){
    var file= upload_img.files[0];
    var fileReader= new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener("load",function(e){
        memPic.style.backgroundImage= `url(${e.target.result})`;
    });
});

//送出修改

function setNewPsw(){
    var formData= new FormData();
    formData.append("memName",memName.value);
    formData.append("memPsw",newPsw.value);
    
    if(upload_img.files[0]){
    formData.append("uploadImg",upload_img.files[0]);
    }
    $.ajax({
    url: './php/updateMemInfo.php',
    cache: false,
    contentType: false,
    processData: false,
    data: formData,
    type: 'POST',
    success(data){
        if(data.indexOf("success")!=-1){
            alert("修改成功");
            getMember();
            window.location.reload();
        }else{
            console.log(data);
        }
        },
        error(data){
            alert("error");
        }
    });
}

function originalPsw(){
    var formData= new FormData();
    formData.append("memName",memName.value);
    formData.append("memPsw",memPsw.value);
    
    if(upload_img.files[0]){
    formData.append("uploadImg",upload_img.files[0]);
    }
    $.ajax({
    url: './php/updateMemInfo.php',
    cache: false,
    contentType: false,
    processData: false,
    data: formData,
    type: 'POST',
    success(data){
        if(data.indexOf("success")!=-1){
            alert("修改成功");
            getMember();
            window.location.reload();
        }else{
            console.log(data);
        }
        },
        error(data){
            alert("error");
        }
    });
}

submitbtn.addEventListener("click",function(){
    if(memName.value==""||memPsw.value==""){
        alert("請輸入修改");
    }else{
        if(memName.value!=member.memName){//如果有要修改名字
            $.ajax({//檢查暱稱有無重複
                url: './php/checkName.php',
                data: {memName: memName.value},
                type: 'POST',
                success(data){
                    if(data.indexOf("ok")==-1){//名字重複
                        alert(data);
                    }else{//名字沒有重複
                        if(nowPsw.value!="" && newPsw.value!="" && checkPsw.value!=""){//如果有要修改密碼
                            if(nowPsw.value=="" || newPsw.value=="" || checkPsw.value==""){
                                alert("請輸入完整資料");
                            }else{
                                if(nowPsw.value!=member.memPsw){//如果現在密碼輸入錯誤
                                    alert("請輸入正確之現在密碼");
                                    nowPsw.value="";
                                    newPsw.value="";
                                    checkPsw.value="";
                                }else{//如果現在密碼輸入正確
                                    if(newPsw.value.length<4){
                                        alert("請輸入4碼以上之密碼");
                                        newPsw.value="";
                                        checkPsw.value="";
                                    }else{
                                        if(newPsw.value==checkPsw.value){
                                            setNewPsw();
                                        }else{
                                            alert("確認密碼錯誤");
                                            newPsw.value="";
                                            checkPsw.value="";
                                        }
                                    }
                                }
                            }
                        }else{//沒有要修改密碼
                            originalPsw();
                        }
                    }
                },
                error(data){
                    alert("error");
                }
            });
        }else{//沒有要修改名字
            if(nowPsw.value!="" || newPsw.value!="" || checkPsw.value!=""){//如果有要修改密碼
                if(nowPsw.value=="" || newPsw.value=="" || checkPsw.value==""){
                    alert("請輸入完整資料");
                }else{
                    if(nowPsw.value!=member.memPsw){//如果現在密碼輸入錯誤
                        alert("請輸入正確之現在密碼");
                        nowPsw.value="";
                        newPsw.value="";
                        checkPsw.value="";
                    }else{
                        if(newPsw.value.length<4){
                            alert("請輸入4碼以上之密碼");
                            newPsw.value="";
                            checkPsw.value="";
                        }else{
                            if(newPsw.value==checkPsw.value){
                                setNewPsw();
                            }else{
                                alert("確認密碼錯誤");
                                newPsw.value="";
                                checkPsw.value="";
                            }
                        }
                    }
                }
            }else{//沒有要修改密碼
                originalPsw();
            }
        }
    }
});



