let uploadImg= document.getElementById("uploadImg");
let msgContent= document.getElementById("msgContent");
let formBtn= document.querySelector("form a.btn");

formBtn.addEventListener("click",function(e){
    e.preventDefault();
    if(!uploadImg.files[0] && msgContent.value==""){
        alert("請輸入私信內容");
    }else{
        var formData= new FormData();
        if(uploadImg.files[0]){
            formData.append("uploadImg",uploadImg.files[0]);
        }
        if(msgContent.value!=""){
            formData.append("msgContent",encodeURIComponent(msgContent.value));
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
                    // sessionStorage.setItem("now-on",petLostOwner);
                    // location.href="./message.html";
                    alert("success",data);
                }else{
                    alert("not success");
                }
            },
            error(data){
                alert("error");
            }
        });
    }
});
