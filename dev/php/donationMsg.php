<?php
session_start();
try{
    require_once("./connectDB.php");

    $sql="insert into `message` (sendMemNo, getMemNo, msgTime, msgText, msgPic ,readOrNot) values ( {$_SESSION['memNo']} , {$_REQUEST['getMemNo']} , date_format(now(),'%Y.%m.%d  %H:%i') , null , null , 1);";
    
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