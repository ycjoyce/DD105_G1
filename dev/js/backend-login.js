function loginInit() {
  function hideClose() {
    $(".memInfoClear").css({
      visibility: "hidden"
    });
  }
  $("input").focus(function() {
    $(this)
      .next()
      .css({
        visibility: "visible"
      });
  });
  $("input").focusout(function() {
    setTimeout(hideClose, 200);
  });

  $(".memInfoClear").click(function() {
    $(this)
      .prev()
      .val("");
  });
}


function sendForm() {
  let managerAccount = $("#memId").val();
  let managerPsw = $("#memPsw").val();
  let data_info = `managerAccount=${managerAccount}&managerPsw=${managerPsw}`;
  //先檢查帳密是否都輸入，沒有的話跳出視窗警告，都有的話建立AJAX物件送表單去驗證
  if (managerAccount == "") {
    alert("請輸入帳號");
    $("#memId").focus();
    return false;
  } 
  if (managerPsw == "") {
    alert("請輸入密碼");
    $("#memPsw").focus();
    return false;
  } else {
    // var xhr = new XMLHttpRequest();
    // xhr.open("post", "php/backend-login.php", true);
    // xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    // xhr.send(data_info);

    // 若server處理狀態已完成，且狀態碼也顯示成功，則跳轉到後台頁面
    // xhr.onreadystatechange = function() {
    //   if (xhr.readyState == 4 && xhr.status == 200) {
    //     let answer = xhr.responseText;
    //     if (answer == "ok") {
    //         window.location.href = "adminManage.html" ;
    //     }else{
    //         alert("用戶名或密碼不正確! 請重新輸入!") ;
    //         $("#managerId").focus();
    //         return false ;
    //     }
    //   }
    // };
    $('form').on('submit', function(e){
      e.preventDefault();
      $.ajax({
          url: './php/backend-login.php',
          type: "POST",
          dataType: 'json',
          data: data_info,
          success: function($manage){
           if( $manage != "沒查詢到該帳號密碼"){
             window.location.href = "adminManage.html";
           }
           else{
             alert("帳號密碼有誤 請重新輸入!");
             $("#memId").val("");
             $("#memPsw").val("");
             $("#memId").focus();
             return false ;
           }
          }
      })
  });
  }
}

window.addEventListener("load", function() {
    loginInit(); //設定表格Form的一些互動行為
   
    $("#btnLogin").click(sendForm);
},
false
);
