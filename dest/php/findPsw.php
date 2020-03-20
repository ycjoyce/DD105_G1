<?php
try{
    require_once("./connectDB.php");
    
    $sql= "select * from `meminfo` where memId='{$_REQUEST["email"]}';";

    $checkMail= $pdo->query($sql);
    $checkRow= $checkMail->fetch(PDO::FETCH_ASSOC);
    
    if($checkMail->rowCount()==0){
        echo "notFound";
    }else{
        //執行寄mail
        // $mailto= "{$_REQUEST['email']}";
        $token= md5($checkRow["memNo"].$checkRow["memName"]);
        $mailFromName= "=?UTF-8?B?".base64_encode("浪愛回家")."?=";
        $mailSubject= "=?UTF-8?B?".base64_encode("您的暫時密碼")."?=";
        $mailHeader= "From:".$mailFromName."<jessicachen111@yahoo.com.tw>\r\n";
        $mailHeader.= "Content-type:text/html;charset=UTF-8";
        mail("yeechiajoyce@gmail.com", $mailSubject, "這是一封測驗信", $mailHeader); 
    }
}catch(PDOException $e){
    echo "錯誤訊息 : ".$e->getMessage();
}
?>