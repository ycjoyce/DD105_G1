<?php
session_start();
try{
    require_once("./connectDB.php");

    $sql="insert into `message` (sendMemNo, getMemNo, msgTime, msgText, msgPic) values ( {$_SESSION['memNo']} , (select memno from `lostpetreport` where lostpetrpno = {$_REQUEST['lostNo']} ) , date_format(now(),'%Y.%m.%d  %H:%i') , null , null );";
    
    $msg= $pdo->exec($sql);

    if($msg===false){
        echo "error";
    }else{
        echo $msg;
    }

}catch(PDOException $e){
    echo "錯誤訊息: ".$e->getMessage()."<br>";
}
?>