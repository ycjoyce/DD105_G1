let uploadImg= document.getElementById("uploadImg");
let msgContent= document.getElementById("msgContent");
let formBtn= document.querySelector("form a.btn");
let msgPanel= document.getElementById("msgPanel");

formBtn.addEventListener("click",function(e){
    e.preventDefault();
    if(member.memId){
        if(!uploadImg.files[0] && msgContent.value==""){
            alert("請輸入私信內容");
        }else{
            var formData= new FormData();
            if(uploadImg.files[0]){
                formData.append("uploadImg",uploadImg.files[0]);
            }
            if(msgContent.value!=""){
                formData.append("msgContent",msgContent.value);
            }
            $.ajax({
                url: './php/aboutusMsg.php',
                cache: false,
                contentType: false,
                processData: false,
                data: formData,
                type: 'POST',
                success(data){
                    if(data.indexOf("success")!=-1){
                        sessionStorage.setItem("now-on",data.split("|")[2]);
                        location.href="./message.html";
                    }else{
                        alert(data);
                    }
                },
                error(data){
                    alert("error");
                }
            });
        }
    }else{
        alert("請先登入");
    }
});

uploadImg.addEventListener("change",function(){
    var file= uploadImg.files[0];
    var fileName= file.name.substring(0,file.name.lastIndexOf(".")).length>10?file.name.substr(0,10)+"..":file.name.substr(0,file.name.lastIndexOf("."));
    var fileExt= file.name.substr(file.name.lastIndexOf("."));
    msgPanel.innerText= fileName + fileExt;
});