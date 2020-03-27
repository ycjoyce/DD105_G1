let memId= document.getElementById("memId");
let memName= document.getElementById("memName");
let memPsw= document.getElementById("memPsw");
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

//切換密碼按鈕
showPsw.addEventListener("click",function(){
    if(showPsw.innerText=="隱藏密碼"){
        memPsw.type="password";
        showPsw.innerText="顯示密碼";
    }else{
        memPsw.type="text";
        showPsw.innerText="隱藏密碼";
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
submitbtn.addEventListener("click",function(){
    if(memName.value==""||memPsw.value==""){
        alert("請輸入修改");
    }else{
        if(memName.value!=member.memName){
            $.ajax({
                url: './php/checkName.php',
                data: {memName: memName.value},
                type: 'POST',
                success(data){
                    if(data.indexOf("ok")==-1){
                        alert(data);
                    }else{
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
                },
                error(data){
                    alert("error");
                }
            });
        }else{
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
    }
});
